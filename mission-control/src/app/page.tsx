import Link from "next/link";

const goals = [
  {
    title: "Manga Volume 1",
    status: "In progress",
    detail: "Finish panel references + first 3 scenes",
  },
  {
    title: "Micro Drama",
    status: "Stalled",
    detail: "Need 7 more one-minute scripts before casting",
  },
  {
    title: "Social Growth",
    status: "Active",
    detail: "3 posts/day focusing on faith + film commentary",
  },
  {
    title: "Income Experiments",
    status: "Research",
    detail: "Map grants + low-cap side hustles",
  },
];

const tasks = [
  {
    title: "Draft Higgsfield reference pack",
    eta: "Due tonight",
    tag: "Manga",
  },
  {
    title: "Set up Mission Control widgets",
    eta: "Today",
    tag: "Systems",
  },
  {
    title: "Scout affordable BJJ gyms",
    eta: "This week",
    tag: "Health",
  },
  {
    title: "Short IG commentary outline",
    eta: "Tomorrow",
    tag: "Content",
  },
];

const contentIdeas = [
  {
    title: "Faith vs Fandom",
    hook: "Why community beats clout in Hollywood",
  },
  {
    title: "Barista Comedy BTS",
    hook: "How 10 yrs at Starbucks shaped the micro-drama",
  },
  {
    title: "Manga Devlog",
    hook: "Solar-punk worldbuilding + Higgsfield workflow",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">
            Mission Control
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Morning stack for McKinney
            </h1>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 px-5 py-2 text-sm font-medium text-indigo-200 hover:bg-indigo-400/10"
            >
              Update priorities
            </Link>
          </div>
          <p className="text-slate-400 max-w-3xl">
            Snapshot of everything in play: creative missions, revenue goals,
            daily tasks, and the content queue. Built so you wake up already
            moving.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/40">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
              Daily Brief
            </p>
            <h2 className="mt-2 text-xl font-semibold">Top moves for today</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li className="rounded-xl bg-black/30 p-3">
                • Render 3 manga panels (wall inspection sequence)
              </li>
              <li className="rounded-xl bg-black/30 p-3">
                • Wire Mission Control widgets (brief + goals)
              </li>
              <li className="rounded-xl bg-black/30 p-3">
                • Draft IG commentary outline + CTA to mailing list
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/80 to-slate-900/60 p-6 shadow-xl shadow-black/40">
            <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-300">
              AI News Filtered
            </p>
            <h2 className="mt-2 text-xl font-semibold">Only what helps us</h2>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="rounded-xl border border-white/10 bg-black/30 p-3">
                <p className="font-medium">Zyphra ZUNA EEG model</p>
                <p className="text-slate-400">
                  Use as inspiration for “thought-to-panel” marketing copy.
                </p>
              </li>
              <li className="rounded-xl border border-white/10 bg-black/30 p-3">
                <p className="font-medium">Tavus Phoenix‑4</p>
                <p className="text-slate-400">
                  Real-time emotional video → test for music promo clips.
                </p>
              </li>
              <li className="rounded-xl border border-white/10 bg-black/30 p-3">
                <p className="font-medium">DeepMind Lyria 3</p>
                <p className="text-slate-400">
                  Auto-scores for reels / manga teasers without studio time.
                </p>
              </li>
            </ul>
          </article>
        </section>

        <section className="rounded-2xl border border-white/10 bg-black/30 p-6 shadow-xl shadow-black/40">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sky-300">
                Missions
              </p>
              <h2 className="text-xl font-semibold">Goal tracker</h2>
            </div>
            <Link href="#" className="text-sm text-slate-300 hover:text-white">
              Edit goals →
            </Link>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {goals.map((goal) => (
              <article
                key={goal.title}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-4"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {goal.status}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{goal.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{goal.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-pink-300">
                  Task Board
                </p>
                <h2 className="mt-1 text-xl font-semibold">Next actions</h2>
              </div>
              <Link href="#" className="text-sm text-slate-300 hover:text-white">
                View all
              </Link>
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              {tasks.map((task) => (
                <li
                  key={task.title}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{task.title}</p>
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                      {task.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-slate-400">{task.eta}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-900/80 to-slate-900/80 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">
              Content Queue
            </p>
            <h2 className="mt-1 text-xl font-semibold">Ideas locked & loaded</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              {contentIdeas.map((idea) => (
                <li
                  key={idea.title}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <p className="font-medium">{idea.title}</p>
                  <p className="text-slate-400">{idea.hook}</p>
                </li>
              ))}
            </ul>
            <button className="mt-4 w-full rounded-2xl border border-white/20 bg-black/40 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Add idea
            </button>
          </article>
        </section>
      </div>
    </main>
  );
}
