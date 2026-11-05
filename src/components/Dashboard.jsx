import { Link } from "react-router-dom"
import { restaurants } from "../data/restaurants"
import useDocumentMeta from "../hooks/useDocumentMeta"

export default function Dashboard() {
  useDocumentMeta(
    "Restaurant Digital Experience Showcase",
    "18 independent website concepts for Kartarpura, Rawalpindi.",
  )

  return (
    <div className="mx-auto max-w-[1100px] px-4 pb-12 pt-6">
      <header>
        <h1 className="animate-fade-up my-2 text-[clamp(1.7rem,6vw,2.8rem)] font-bold leading-tight">
          Restaurant Digital Experience Showcase
        </h1>
        <p
          className="animate-fade-up mb-1.5 text-mut"
          style={{ animationDelay: "90ms" }}
        >
          18 Independent Website Concepts for Kartarpura, Rawalpindi
        </p>
        <p
          className="animate-fade-up mb-1.5 text-mut"
          style={{ animationDelay: "180ms" }}
        >
          Demonstration previews. Names, categories and numbers are leads to
          verify with each owner. Menus and prices are editable samples.
        </p>
      </header>

      <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {restaurants.map((r, i) => (
          <article
            key={r.slug}
            style={{ animationDelay: `${260 + i * 55}ms` }}
            className="animate-card-in group flex flex-col overflow-hidden rounded-2xl bg-card shadow-[0_1px_6px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.25)]"
          >
            <div
              className="flex h-[120px] items-center justify-center overflow-hidden text-5xl"
              style={{
                background: `linear-gradient(135deg, ${r.bg}, ${r.surface})`,
                color: r.accent,
              }}
            >
              <span className="transition-transform duration-500 ease-out group-hover:rotate-6 group-hover:scale-125">
                {r.items[0].emoji}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-1.5 p-3.5">
              <h3 className="text-[1.05rem] font-semibold">{r.name}</h3>
              <small className="text-mut">{r.category}</small>
              <p className="m-0 text-[0.9rem]">{r.identity}</p>
              <Link
                to={`/${r.slug}`}
                className="mt-auto rounded-xl bg-ac p-2.5 text-center font-semibold text-page transition duration-200 hover:brightness-110 active:scale-[0.97]"
              >
                Preview Website
              </Link>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-[0.9rem] text-mut">
        Concept developed by Abdul Basit
      </p>
    </div>
  )
}
