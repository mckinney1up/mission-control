type SpritePalette = {
  primary: string;
  secondary: string;
};

const width = 12;

const topRows = [
  Array(width).fill("ceiling"),
  Array(width).fill("wallGreen"),
  [
    "cabinet",
    "cabinet",
    "window",
    "window",
    "cabinet",
    "cabinet",
    "window",
    "window",
    "cabinet",
    "cabinet",
    "window",
    "window",
  ],
  [
    "machineLeft",
    "machineRight",
    "pcStation",
    "pcStation",
    "monitorTall",
    "monitorTall",
    "pcStation",
    "pcStation",
    "machineLeft",
    "machineRight",
    "plant",
    "plant",
  ],
];

const floorRows = Array.from({ length: 6 }, (_, rowIndex) =>
  Array.from({ length: width }, (_, colIndex) => ((rowIndex + colIndex) % 2 === 0 ? "floorA" : "floorB")),
);

const tileMap = [...topRows, ...floorRows];

const overrides: Array<[number, number, string]> = [
  [5, 2, "worktable"],
  [5, 3, "worktable"],
  [5, 4, "chair"],
  [5, 7, "worktable"],
  [5, 8, "worktable"],
  [5, 9, "chair"],
  [6, 2, "worktable"],
  [6, 3, "worktable"],
  [6, 4, "chair"],
  [6, 7, "worktable"],
  [6, 8, "worktable"],
  [6, 9, "chair"],
  [7, 5, "centerTableTopLeft"],
  [7, 6, "centerTableTopRight"],
  [8, 5, "centerTableBottomLeft"],
  [8, 6, "centerTableBottomRight"],
  [7, 4, "centerLightRed"],
  [7, 7, "centerLightBlue"],
];

overrides.forEach(([row, col, type]) => {
  if (tileMap[row]) {
    tileMap[row][col] = type;
  }
});

const tilePieces: Record<string, { base: string; detail?: string[]; style?: React.CSSProperties }> = {
  ceiling: {
    base: "bg-[#d9ead3]",
    detail: ["inset-x-0 bottom-0 h-[2px] bg-[#b8d4a9]"],
  },
  wallGreen: {
    base: "bg-[#ecf7d9]",
    detail: ["inset-x-2 top-1 h-1 bg-[#d0e0b8]", "inset-x-2 bottom-1 h-1 bg-[#d0e0b8]"]
  },
  cabinet: {
    base: "bg-[#f7e2c8]",
    detail: [
      "inset-x-1 top-1 h-1 rounded bg-[#ddb893]",
      "inset-x-1 top-3 h-1 rounded bg-[#ddb893]",
      "inset-y-1 left-2 w-[2px] bg-[#b9895e]",
    ],
  },
  window: {
    base: "bg-[#d0e8ff]",
    detail: ["inset-1 rounded bg-[#a4d3ff]", "inset-1 border border-white/70"],
  },
  machineLeft: {
    base: "bg-[#dfe3ea]",
    detail: ["inset-x-1 top-1 h-2 rounded bg-[#b2bfd3]", "left-1 bottom-1 h-2 w-2 rounded bg-[#f87171]"],
  },
  machineRight: {
    base: "bg-[#dfe3ea]",
    detail: ["inset-x-1 top-1 h-2 rounded bg-[#b2bfd3]", "right-1 bottom-1 h-2 w-2 rounded bg-[#60a5fa]"],
  },
  pcStation: {
    base: "bg-[#fefbf4]",
    detail: ["left-1 right-1 top-1 h-2 rounded bg-[#9ac7ff]", "left-3 right-3 bottom-1 h-1 rounded bg-[#4b5563]"],
  },
  monitorTall: {
    base: "bg-[#fefbf4]",
    detail: ["left-1 right-1 top-1 h-3 rounded bg-[#9ac7ff]", "left-4 right-4 bottom-1 h-1 rounded bg-[#4b5563]"],
  },
  plant: {
    base: "bg-[#fdf7e8]",
    detail: ["left-2 right-2 top-1 h-3 rounded bg-[#86efac]", "left-3 right-3 bottom-1 h-1 rounded bg-[#7f5539]"]
  },
  floorA: {
    base: "bg-[#f7f1e3]",
    detail: [
      "inset-0 border border-[#e9dfca] opacity-70",
      "-left-2 right-0 top-2 h-[1px] bg-[#dfd4be] rotate-45",
    ],
  },
  floorB: {
    base: "bg-[#f2ebdd]",
    detail: [
      "inset-0 border border-[#e3d9c5] opacity-60",
      "left-0 -right-2 top-2 h-[1px] bg-[#d5c8b1] -rotate-45",
    ],
  },
  worktable: {
    base: "bg-[#f4d3a8]",
    detail: [
      "left-1 right-1 top-1 h-1 bg-[#e0b784]",
      "left-2 right-2 top-2 h-2 rounded bg-[#9bc2ff]",
      "left-4 right-4 bottom-1 h-1 rounded bg-[#475569]",
    ],
  },
  chair: {
    base: "bg-[#d4d1cc]",
    detail: ["left-2 right-2 top-1 h-1 rounded bg-[#a8a29e]", "left-1 right-1 top-2 h-2 rounded bg-[#7c6f64]"]
  },
  centerTableTopLeft: {
    base: "bg-[#ded6c8]",
    detail: ["inset-x-1 top-1 h-1 bg-[#c4b8a3]", "left-2 top-2 h-2 w-2 rounded-full bg-[#f87171]"],
  },
  centerTableTopRight: {
    base: "bg-[#ded6c8]",
    detail: ["inset-x-1 top-1 h-1 bg-[#c4b8a3]", "right-2 top-2 h-2 w-2 rounded-full bg-[#60a5fa]"],
  },
  centerTableBottomLeft: {
    base: "bg-[#d1c8bb]",
    detail: ["inset-x-1 bottom-1 h-1 bg-[#b6aa96]", "left-3 bottom-2 h-1 w-3 bg-[#9c8f7b]"]
  },
  centerTableBottomRight: {
    base: "bg-[#d1c8bb]",
    detail: ["inset-x-1 bottom-1 h-1 bg-[#b6aa96]", "right-3 bottom-2 h-1 w-3 bg-[#9c8f7b]"]
  },
  centerLightRed: {
    base: "bg-transparent",
    detail: ["inset-1 rounded-full bg-[#fee2e2]", "inset-2 rounded-full bg-[#f87171]"]
  },
  centerLightBlue: {
    base: "bg-transparent",
    detail: ["inset-1 rounded-full bg-[#dbeafe]", "inset-2 rounded-full bg-[#60a5fa]"]
  },
};

const characters = [
  {
    name: "McKinney",
    role: "Creative Director",
    task: "Brief posted 07:30",
    state: "typing",
    row: 5,
    col: 3,
    palette: { primary: "bg-rose-500", secondary: "bg-amber-200" },
  },
  {
    name: "Margo",
    role: "Operations AI",
    task: "Things sync + routing",
    state: "routing",
    row: 5,
    col: 8,
    palette: { primary: "bg-indigo-500", secondary: "bg-sky-200" },
  },
  {
    name: "Higgsfield Bot",
    role: "Panel Render",
    task: "Queue active",
    state: "rendering",
    row: 7,
    col: 3,
    palette: { primary: "bg-emerald-500", secondary: "bg-lime-200" },
  },
  {
    name: "Content Desk",
    role: "Publishing",
    task: "Next IG beat",
    state: "publishing",
    row: 7,
    col: 9,
    palette: { primary: "bg-amber-500", secondary: "bg-orange-200" },
  },
];

const stateAnimations: Record<string, string> = {
  typing: "animate-pulse",
  routing: "animate-bounce",
  rendering: "animate-ping",
  publishing: "animate-spin",
  idle: "",
};

const stateLabels: Record<string, string> = {
  typing: "Writing",
  routing: "Routing",
  rendering: "Rendering",
  publishing: "Publishing",
  idle: "Idle",
};

function renderTile(type: string, key: string) {
  const tile = tilePieces[type] ?? tilePieces.floorA;
  return (
    <div key={key} className={`relative h-6 w-6 rounded-[2px] ${tile.base}`} style={tile.style}>
      {tile.detail?.map((detailClass, index) => (
        <span key={index} className={`absolute ${detailClass}`} />
      ))}
    </div>
  );
}

function PixelPerson({ palette }: { palette: SpritePalette }) {
  return (
    <div className="relative h-6 w-6">
      <span className={`absolute left-1 right-1 top-0 h-2 rounded-sm ${palette.secondary}`} />
      <span className={`absolute left-1 right-1 top-2 h-3 rounded-sm ${palette.primary}`} />
      <span className="absolute left-2 right-2 bottom-0 h-2 rounded-sm bg-slate-800" />
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
                className={`flex items-center justify-center ${stateAnimations[character.state]}`}
                style={{
                  gridColumn: `${character.col} / span 1`,
                  gridRow: `${character.row} / span 1`,
                  width: "24px",
                  height: "24px",
                }}
              >
                <PixelPerson palette={character.palette} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {characters.map((character) => (
            <article
              key={character.name}
              className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`h-3 w-3 rounded-full ${character.palette.primary}`} />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {character.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      {character.role}
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-500">
                  {stateLabels[character.state]}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-500">{character.task}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
