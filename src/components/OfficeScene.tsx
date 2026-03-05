const tileMap = [
  ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
  ["wall", "desk", "desk", "floor", "floor", "pc", "pc", "floor", "floor", "shelf", "shelf", "wall"],
  ["wall", "desk", "desk", "floor", "floor", "floor", "floor", "floor", "floor", "shelf", "shelf", "wall"],
  ["wall", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "wall"],
  ["wall", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "wall"],
  ["wall", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "wall"],
  ["wall", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "wall"],
  ["wall", "station", "station", "floor", "floor", "console", "console", "floor", "floor", "crate", "crate", "wall"],
  ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
];

const tileStyles: Record<string, string> = {
  wall: "bg-[#d1d5db]",
  floor: "bg-[#fdfbf3]",
  desk: "bg-[#f8e1c4]",
  station: "bg-[#f0d4b4]",
  pc: "bg-[#d9e8ff]",
  console: "bg-[#c7f0ff]",
  shelf: "bg-[#c2d6ff]",
  crate: "bg-[#f6d6b8]",
};

const characters = [
  {
    name: "McKinney",
    role: "Creative Director",
    task: "Reviewing brief",
    row: 4,
    col: 4,
    color: "bg-rose-500",
  },
  {
    name: "Margo",
    role: "Operations AI",
    task: "Routing automations",
    row: 5,
    col: 7,
    color: "bg-indigo-500",
  },
  {
    name: "Higgsfield Bot",
    role: "Panel Render",
    task: "Queue idle",
    row: 7,
    col: 3,
    color: "bg-emerald-500",
  },
  {
    name: "Content Desk",
    role: "Publishing",
    task: "Next IG beat",
    row: 7,
    col: 9,
    color: "bg-amber-500",
  },
];

export default function OfficeScene() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            The Office
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">
            Oak Lab status board
          </h2>
          <p className="text-sm text-slate-500">
            Pokemon-style floor plan showing who’s on deck and what subsystem they’re
            touching right now.
          </p>
        </div>
        <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500">
          Prototype
        </span>
      </div>

      <div className="mt-6">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[#fefcf5] p-4">
          <div className="grid grid-cols-12 gap-[2px]">
            {tileMap.map((row, rowIndex) =>
              row.map((tile, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`h-6 w-6 rounded-[2px] ${tileStyles[tile]}`}
                />
              )),
            )}
          </div>
          <div className="pointer-events-none absolute inset-4 grid grid-cols-12 gap-[2px]">
            {characters.map((character) => (
              <div
                key={character.name}
                className={`flex items-center justify-center rounded-full ${character.color}`}
                style={{
                  gridColumn: `${character.col} / span 1`,
                  gridRow: `${character.row} / span 1`,
                  width: "24px",
                  height: "24px",
                  boxShadow: "0 0 6px rgba(15, 23, 42, 0.2)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {characters.map((character) => (
            <article
              key={character.name}
              className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4"
            >
              <div className="flex items-center gap-3">
                <span className={`h-3 w-3 rounded-full ${character.color}`} />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {character.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {character.role}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-sm text-slate-500">{character.task}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
