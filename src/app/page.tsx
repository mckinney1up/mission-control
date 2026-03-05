import Link from "next/link";
import OfficeScene from "@/components/OfficeScene";

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
    <main className="min-h-screen bg-[#f8f9fb] text-slate-900">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-12">
        <header className="space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Mission Control
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900">
                Morning stack for McKinney
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Clean snapshot of creative missions, revenue experiments, and the next
                actions that keep New Haven moving.
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                href="#"
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:border-slate-300"
              >
                Export brief
              </Link>
              <Link
                href="#"
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
              >
                Update priorities
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Daily Brief", "Goals", "Content", "Systems"].map((label, idx) => (
              <article
                key={label}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                  {label}
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  {idx === 0 && "3"}
                  {idx === 1 && "4"}
                  {idx === 2 && "3"}
                  {idx === 3 && "2"}
                </p>
                <p className="text-sm text-slate-500">
                  {idx === 0 && "Moves locked for today"}
                  {idx === 1 && "Active missions"}
                  {idx === 2 && "Ideas ready"}
                  {idx === 3 && "Systems online"}
                </p>
              </article>
            ))}
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
                  Daily Brief
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Top moves for today
                </h2>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                07:30 posted
              </span>
            </div>
            <ul className="mt-6 divide-y divide-slate-100 text-sm text-slate-600">
              {[
                "Render 3 manga panels (wall inspection sequence)",
                "Wire Mission Control widgets (brief + goals)",
                "Draft IG commentary outline + CTA to mailing list",
              ].map((item) => (
                <li key={item} className="py-3">
                  • {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              AI News Filtered
            </p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">
              Only what helps us
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-slate-600">
              <li className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                <p className="font-semibold text-slate-900">Zyphra ZUNA EEG model</p>
                <p className="text-slate-500">
                  Use as inspiration for “thought-to-panel” marketing copy.
                </p>
              </li>
              <li className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                <p className="font-semibold text-slate-900">Tavus Phoenix‑4</p>
                <p className="text-slate-500">
                  Real-time emotional video → test for music promo clips.
                </p>
              </li>
              <li className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                <p className="font-semibold text-slate-900">DeepMind Lyria 3</p>
                <p className="text-slate-500">
                  Auto-scores for reels / manga teasers without studio time.
                </p>
              </li>
            </ul>
          </article>
        </section>

        <OfficeScene />

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Missions
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                Goal tracker
              </h2>
            </div>
            <Link href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900">
              Edit goals →
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {goals.map((goal) => (
              <article
                key={goal.title}
                className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {goal.status}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{goal.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{goal.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Task Board
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Next actions
                </h2>
              </div>
              <Link href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900">
                View all
              </Link>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {tasks.map((task) => (
                <li
                  key={task.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-900">{task.title}</p>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-500">
                      {task.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-slate-500">{task.eta}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Content Queue
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Ideas locked & loaded
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {contentIdeas.map((idea) => (
                <li
                  key={idea.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4"
                >
                  <p className="font-semibold text-slate-900">{idea.title}</p>
                  <p className="text-slate-500">{idea.hook}</p>
                </li>
              ))}
            </ul>
            <button className="mt-5 w-full rounded-2xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-600 hover:border-slate-300">
              Add idea
            </button>
          </article>
        </section>
      </div>
    </main>
  );
}
