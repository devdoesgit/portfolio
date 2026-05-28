import { useMemo, useState } from 'react';
import { ArrowUpRight, Award, ChevronDown, Trophy } from 'lucide-react';
import { SectionHeader, SectionShell } from './ui.jsx';
import { achievements, profile } from '../data/portfolio.js';

function linkProps(href) {
  return /^https?:\/\//.test(href) ? { target: '_blank', rel: 'noreferrer' } : {};
}

function isWin(result) {
  return /winner|rank 1|top \d|air \d/i.test(result);
}

function groupByYear(items) {
  return items.reduce((acc, item) => {
    const year = item.year.split('/')[0].trim();
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {});
}

const featuredIds = new Set([
  '2019-IEEE Software Hackathon',
  '2020-International Dandy Hacks',
  '2020-Hack CBS 3.0',
  '2021-HooHacks',
  '2021-Hack 2021',
  '2022-Hackmanthan',
]);

function achievementKey(a) {
  return `${a.year}-${a.title}`;
}

export default function AchievementsSection() {
  const [expanded, setExpanded] = useState(false);

  const stats = useMemo(() => {
    const wins = achievements.filter((a) => isWin(a.result)).length;
    const years = achievements.map((a) => parseInt(a.year, 10)).filter(Boolean);
    return {
      total: achievements.length,
      wins,
      from: Math.min(...years),
      to: Math.max(...years),
    };
  }, []);

  const featured = useMemo(
    () => achievements.filter((a) => featuredIds.has(achievementKey(a))),
    [],
  );

  const grouped = useMemo(() => groupByYear(achievements), []);

  const marqueeItems = useMemo(
    () => [...achievements, ...achievements].map((a) => `${a.title} · ${a.result}`),
    [],
  );

  return (
    <SectionShell id="achievements" variant="warm">
      <SectionHeader number="04" title="Achievements" count={`${stats.total} wins & ranks`} note="10+ hackathons 🏆" />

      <div className="achieve-stats" data-reveal>
        <div className="achieve-stat">
          <span className="achieve-stat-num">{stats.wins}+</span>
          <span className="achieve-stat-label">Podium finishes</span>
        </div>
        <div className="achieve-stat">
          <span className="achieve-stat-num">{stats.total}</span>
          <span className="achieve-stat-label">Competitions</span>
        </div>
        <div className="achieve-stat">
          <span className="achieve-stat-num">
            {stats.from}–{String(stats.to).slice(-2)}
          </span>
          <span className="achieve-stat-label">Year span</span>
        </div>
        <a href={profile.projectsUrl} className="achieve-proof" {...linkProps(profile.projectsUrl)}>
          <Award size={16} />
          Certificates & proof
          <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="achieve-marquee-wrap" data-reveal aria-hidden>
        <div className="achieve-marquee">
          <div className="achieve-marquee-track">
            {marqueeItems.map((label, i) => (
              <span className="achieve-marquee-item" key={`${label}-${i}`}>
                <Trophy size={12} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="achieve-bento" data-reveal>
        {featured.map((item) => (
          <article className="achieve-spotlight" key={achievementKey(item)}>
            <span className="achieve-spotlight-year">{item.year}</span>
            <span className="achieve-spotlight-result">{item.result}</span>
            <h3>{item.title}</h3>
            <p>{item.organization}</p>
          </article>
        ))}
      </div>

      <div className="achieve-archive" data-reveal>
        <button
          type="button"
          className="achieve-archive-toggle"
          onClick={() => setExpanded((open) => !open)}
          aria-expanded={expanded}
        >
          <span>{expanded ? 'Hide' : 'Browse'} all {stats.total} milestones</span>
          <ChevronDown size={18} className={expanded ? 'is-open' : ''} />
        </button>

        <div className={`achieve-archive-panel ${expanded ? 'is-open' : ''}`}>
          <div className="achieve-archive-inner">
            {Object.keys(grouped)
              .sort((a, b) => Number(b) - Number(a))
              .map((year) => (
                <div className="achieve-year-group" key={year}>
                  <div className="achieve-year-label">{year}</div>
                  <ul className="achieve-year-list">
                    {grouped[year].map((item) => (
                      <li key={achievementKey(item)}>
                        <span className={`achieve-tag ${isWin(item.result) ? 'achieve-tag--win' : ''}`}>
                          {item.result}
                        </span>
                        <span className="achieve-line-title">{item.title}</span>
                        <span className="achieve-line-org">{item.organization}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
