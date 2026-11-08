import { Link } from "react-router-dom"
import { restaurants } from "../data/restaurants"
import useDocumentMeta from "../hooks/useDocumentMeta"

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=85"

const DEVELOPER = {
  name: "Sir Abdul Basit",
  role: "Full-Stack Web Developer",
  description:
    "I build responsive, modern websites and web applications for businesses.",
  portfolio: "https://portfolio-five-drab-14.vercel.app/",
  whatsapp: "923180102385",
}

const whatsappLink = (message) =>
  `https://wa.me/${DEVELOPER.whatsapp}?text=${encodeURIComponent(message)}`

export default function Dashboard() {
  useDocumentMeta(
    "Restaurant Digital Experience Showcase",
    "18 independent website concepts for Kartarpura, Rawalpindi.",
  )

  return (
    <div className="mx-auto max-w-[1100px] px-4 pb-12 pt-6">
      {/* DEVELOPER INTRO */}
      <section className="animate-fade-up mb-10 overflow-hidden rounded-3xl border border-ac/20 bg-card p-6 shadow-lg sm:p-9">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-ac/10 px-3 py-1.5 text-xs font-semibold text-ac">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Developer Introduction
            </span>

            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
              Hi, I'm {DEVELOPER.name}
            </h1>

            <p className="mt-2 font-semibold text-ac">{DEVELOPER.role}</p>

            <p className="mt-4 max-w-xl leading-7 text-mut">
              {DEVELOPER.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={DEVELOPER.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-ac px-5 py-3 text-sm font-semibold text-page transition hover:brightness-110"
              >
                View My Portfolio ↗
              </a>

              <a
                href={whatsappLink(
                  "Assalam-o-Alaikum! I would like to discuss a web development project.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-ac/40 px-5 py-3 text-sm font-semibold transition hover:bg-ac/10"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl border border-ac/30 bg-ac/10 text-4xl font-bold text-ac">
            AB
          </div>
        </div>
      </section>

      {/* SHOWCASE HEADER */}
      <header>
        <h2 className="animate-fade-up my-2 text-[clamp(1.7rem,6vw,2.8rem)] font-bold leading-tight">
          Restaurant Digital Experience Showcase
        </h2>

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

      {/* RESTAURANT CARDS */}
      <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {restaurants.map((r, i) => {
          const restaurantImage =
            r.heroImage ||
            r.image ||
            r.items?.[0]?.image ||
            r.items?.[0]?.photo ||
            DEFAULT_IMAGE

          return (
            <article
              key={r.slug}
              style={{ animationDelay: `${260 + i * 55}ms` }}
              className="animate-card-in group flex flex-col overflow-hidden rounded-2xl bg-card shadow-[0_1px_6px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.25)]"
            >
              <div className="h-[170px] overflow-hidden bg-black/5">
                <img
                  src={restaurantImage}
                  alt={`${r.name} restaurant`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = DEFAULT_IMAGE
                  }}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
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
          )
        })}
      </div>

      {/* DEVELOPER FOOTER */}
      <footer className="mt-14 border-t border-ac/20 pt-8">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="text-xl font-bold">Developed by {DEVELOPER.name}</h3>

            <p className="mt-1 text-sm text-mut">{DEVELOPER.role}</p>

            <p className="mt-2 text-sm text-mut">
              Creating modern digital experiences for businesses.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={DEVELOPER.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-ac/30 px-4 py-2.5 text-sm font-semibold transition hover:bg-ac/10"
            >
              Portfolio ↗
            </a>

            <a
              href={whatsappLink(
                "Assalam-o-Alaikum! I am interested in your web development services.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-ac px-4 py-2.5 text-sm font-semibold text-page transition hover:brightness-110"
            >
              WhatsApp ↗
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-mut">
          © {new Date().getFullYear()} {DEVELOPER.name}. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}
