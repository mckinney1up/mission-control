const tileMap = [
  ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
  ["wall", "shelf", "shelf", "wall-console", "wall-console", "wall", "wall", "wall-console", "wall-console", "shelf", "shelf", "wall"],
  ["wall", "desk", "desk", "floor", "floor", "monitor", "monitor", "floor", "floor", "books", "books", "wall"],
  ["wall", "desk", "desk", "floor", "floor", "floor", "floor", "floor", "floor", "books", "books", "wall"],
  ["wall", "floor", "floor", "floor", "table", "table", "table", "floor", "floor", "floor", "floor", "wall"],
  ["wall", "floor", "floor", "floor", "table", "table", "table", "floor", "floor", "floor", "floor", "wall"],
  ["wall", "station", "station", "floor", "floor", "console", "console", "floor", "floor", "crate", "crate", "wall"],
  ["wall", "station", "station", "floor", "floor", "console", "console", "floor", "floor", "crate", "crate", "wall"],
  ["wall", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "floor", "wall"],
  ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
];

const tilePieces: Record<string, { base: string; detail?: string[] }> = {
  wall: { base: "bg-[#d4d8e5]" },
  floor: { base: "bg-[#fefcf5]" },
  "wall-console": {
    base: "bg-[#d4d8e5]",
    detail: [
      "left-1 right-1 top-1 h-1 rounded-sm bg-[#a3b5f7]",
      "left-1 right-1 top-2 h-1 rounded-sm bg-[#fcd34d]",
    ],
  },
  desk: {
    base: "bg-[#f7d5b3]",
    detail: ["inset-x-0 top-0 h-1 bg-[#e5b88c]"],
  },
  station: {
    base: "bg-[#f1dbc2]",
    detail: [
      "inset-x-1 top-1 h-2 rounded bg-[#94a3b8]",
      "inset-x-2 bottom-1 h-2 rounded bg-[#cbd5f5]",
    ],
  },
  table: {
    base: "bg-[#f5cfa6]",
    detail: ["inset-x-1 top-1 h-1 bg-[#e4b785]", "inset-x-0 bottom-0 h-1 bg-[#d19c62]"],
  },
  monitor: {
    base: "bg-[#fefcf5]",
    detail: ["left-1 right-1 top-1 h-3 rounded bg-[#a3c7ff]", "left-3 right-3 bottom-1 h-1 rounded bg-[#475569]"],
  },
  console: {
    base: "bg-[#d1f3ff]",
    detail: ["inset-1 rounded bg-[#8de0ff]", "inset-x-2 bottom-1 h-1 rounded bg-[#f472b6]"],
  },
  shelf: {
    base: "bg-[#bac8ff]",
    detail: ["left-1 right-1 top-1 h-1 rounded bg-[#7dd3fc]", "left-1 right-1 top-3 h-1 rounded bg-[#fbbf24]"],
  },
  books: {
    base: "bg-[#fefcf5]",
    detail: ["inset-x-2 top-1 h-1 rounded bg-[#a78bfa]", "inset-x-2 top-3 h-1 rounded bg-[#f472b6]"],
  },
  crate: {
    base: "bg-[#f6d6b8]",
    detail: ["inset-x-1 top-1 h-1 rounded bg-[#eab38d]", "inset-x-1 top-3 h-1 rounded bg-[#eab38d]"],
  },
};

const characters = [
  {
    name: "McKinney",
    role: "Creative Director",
    task: "Reviewing brief",
    row: 5,
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
    col: 10,
    color: "bg-amber-500",
  },
];

function renderTile(type: string, key: string) {
  const tile = tilePieces[type] ?? tilePieces.floor;
  return (
    <div key={key} className={`relative h-6 w-6 rounded-[2px] ${tile.base}`}>
      {tile.detail?.map((detailClass, index) => (
        <span key={index} className={`absolute ${detailClass}`} />
      ))}
    </div>
  );
}

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
              row.map((tile, colIndex) => renderTile(tile, `${rowIndex}-${colIndex}`)),
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
