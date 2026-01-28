import events from "@/data/events-volunteering.json";

type Item = {
  id: string;
  category: string;
  title: string;
  date: string; // YYYY-MM-DD
  location?: string;
  role?: string;
  note?: string;
  photos?: { src: string; alt?: string }[];
  links?: { label: string; href: string }[];
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function EventsVolunteeringSection() {
  const items = (events as Item[])
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <section id="events" className="py-16 md:py-24 px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-3 text-center">
        Events & Volunteering
      </h2>
      <p className="max-w-2xl mx-auto text-center text-muted-foreground mb-10">
        Photos + short notes from tech events and volunteering.
      </p>

      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        {items.map((it) => {
          const cover = it.photos?.[0];
          return (
            <div
              key={it.id}
              className="rounded-2xl border bg-background/60 shadow-sm overflow-hidden"
            >
              {cover ? (
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={cover.src}
                    alt={cover.alt ?? it.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ) : null}

              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-medium rounded-full border px-2 py-1 text-muted-foreground">
                    {it.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {formatDate(it.date)}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mt-3">{it.title}</h3>

                <div className="text-sm text-muted-foreground mt-1">
                  {it.location ? <span>{it.location}</span> : null}
                  {it.location && it.role ? <span> · </span> : null}
                  {it.role ? <span>{it.role}</span> : null}
                </div>

                {it.note ? (
                  <p className="text-sm mt-3 leading-relaxed">{it.note}</p>
                ) : null}

                {it.links && it.links.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {it.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
