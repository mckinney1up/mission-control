type SpritePalette = {
  primary: string;
  secondary: string;
};

const characters = [
  {
    name: "McKinney",
    role: "Creative Director",
    task: "Brief posted 07:30",
    state: "typing",
    x: 0.32,
    y: 0.58,
    palette: { primary: "bg-rose-500", secondary: "bg-amber-200" },
  },
  {
    name: "Margo",
    role: "Operations AI",
    task: "Things sync + routing",
    state: "routing",
    x: 0.66,
    y: 0.58,
    palette: { primary: "bg-indigo-500", secondary: "bg-sky-200" },
  },
  {
    name: "Higgsfield Bot",
    role: "Panel Render",
    task: "Queue active",
    state: "rendering",
    x: 0.24,
    y: 0.72,
    palette: { primary: "bg-emerald-500", secondary: "bg-lime-200" },
  },
  {
    name: "Content Desk",
    role: "Publishing",
    task: "Next IG beat",
    state: "publishing",
    x: 0.74,
    y: 0.72,
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
            Pokemon Fire Red backdrop with our live status overlays.
          </p>
        </div>
        <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500">
          Prototype
        </span>
      </div>

      <div className="mt-6">
        <div
          className="relative overflow-hidden rounded-2xl border border-slate-200"
          style={{
            backgroundImage: "url(/oak-lab.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            imageRendering: "pixelated",
            aspectRatio: "768 / 822",
          }}
        >
          <div className="pointer-events-none absolute inset-0">
            {characters.map((character) => (
              <div
                key={character.name}
                className={`absolute -translate-x-1/2 -translate-y-1/2 ${stateAnimations[character.state]}`}
                style={{ left: `${character.x * 100}%`, top: `${character.y * 100}%` }}
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
