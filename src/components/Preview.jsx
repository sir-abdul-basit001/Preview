import { useEffect, useMemo, useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { FONTS, WA_MESSAGE, restaurants } from "../data/restaurants"
import useDocumentMeta from "../hooks/useDocumentMeta"
import Reveal from "./Reveal"

const NAV = [
  ["home", "Home"],
  ["menu", "Menu"],
  ["about", "About"],
  ["gallery", "Gallery"],
  ["contact", "Contact"],
]

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=85"

const DEVELOPER = {
  name: "Sir Abdul Basit",
  role: "Full-Stack Web Developer",
  description:
    "I build responsive, modern websites and web applications for businesses.",
  portfolio: "https://portfolio-five-drab-14.vercel.app/",
  whatsapp: "923180102385",
}

const developerWhatsApp = (message) =>
  `https://wa.me/${DEVELOPER.whatsapp}?text=${encodeURIComponent(message)}`

const getImage = (item) => item?.image || DEFAULT_IMAGE

const goTo = (id) =>
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  })

const btnBase =
  "inline-block rounded-xl border-2 border-pv-a px-[18px] py-3 font-bold no-underline transition duration-200 hover:-translate-y-0.5 active:scale-95"

const btn1 = `${btnBase} bg-pv-a text-pv-bg hover:brightness-110`
const btn2 = `${btnBase} text-pv-a hover:bg-pv-a/15`

// Food Card Component
function FoodCard({ item, index }) {
  return (
    <div
      style={{ animationDelay: `${index * 70}ms` }}
      className="animate-card-in group overflow-hidden rounded-xl bg-pv-b transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
    >
      <div className="h-[180px] overflow-hidden">
        <img
          src={getImage(item)}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h3 className="text-base font-semibold">{item.name}</h3>

        <p className="my-1.5 text-[0.9rem] opacity-85">{item.desc}</p>

        <em className="text-[0.8rem] font-semibold not-italic text-pv-a">
          Sample price to be confirmed
        </em>
      </div>
    </div>
  )
}

// Reusable Section Component
function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-[1000px] px-4 py-11">
      <Reveal>
        <h2 className="mb-4 text-[1.7rem] font-bold text-pv-a">{title}</h2>
      </Reveal>

      <Reveal delay={100}>{children}</Reveal>
    </section>
  )
}

// Image Lightbox Component
function ImageLightbox({ item, onClose }) {
  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Image of ${item.name}`}
    >
      <button
        onClick={onClose}
        aria-label="Close image"
        className="absolute right-5 top-5 z-10 rounded-full bg-white/15 px-4 py-2 text-2xl text-white transition hover:bg-white/30"
      >
        &times;
      </button>

      <div
        className="w-full max-w-[850px] overflow-hidden rounded-2xl bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={getImage(item)}
          alt={item.name}
          className="max-h-[75vh] w-full object-contain"
        />

        <div className="p-4 text-center text-white">
          <h3 className="text-lg font-semibold">{item.name}</h3>

          {item.desc && (
            <p className="mt-1 text-sm text-white/70">{item.desc}</p>
          )}
        </div>
      </div>
    </div>
  )
}

// Main Preview Component
export default function Preview() {
  const { slug } = useParams()

  const r = useMemo(() => restaurants.find((x) => x.slug === slug), [slug])

  const [open, setOpen] = useState(false)
  const [cat, setCat] = useState("All")
  const [lightbox, setLightbox] = useState(null)
  const [progress, setProgress] = useState(0)

  useDocumentMeta(
    r
      ? `${r.name} | Kartarpura, Rawalpindi (Demo Preview)`
      : "Restaurant Digital Experience Showcase",
    r
      ? `${r.name}: ${r.category}. Demonstration website concept, not an official business website.`
      : "18 independent website concepts for Kartarpura, Rawalpindi.",
  )

  // Restaurant background
  useEffect(() => {
    if (!r) return

    document.body.style.background = r.bg

    return () => {
      document.body.style.background = ""
    }
  }, [r])

  // Reset state when switching restaurants
  useEffect(() => {
    setCat("All")
    setOpen(false)
    setLightbox(null)
  }, [slug])

  // Scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight

      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0)
    }

    onScroll()

    window.addEventListener("scroll", onScroll, {
      passive: true,
    })

    return () => window.removeEventListener("scroll", onScroll)
  }, [slug])

  if (!r) {
    return <Navigate to="/" replace />
  }

  const cats = ["All", ...new Set(r.items.map((i) => i.cat))]

  const visible = r.items.filter((i) => cat === "All" || i.cat === cat)

  const wa = `https://wa.me/${r.wa}?text=${WA_MESSAGE}`

  const map = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${r.name} Kartarpura Rawalpindi`,
  )}`

  const L = r.layout

  const handleNav = (e, id) => {
    e.preventDefault()
    setOpen(false)
    goTo(id)
  }

  const navLinks = NAV.map(([id, label]) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={(e) => handleNav(e, id)}
      className="group relative font-semibold no-underline"
    >
      {label}

      <span className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-pv-a transition-transform duration-300 group-hover:scale-x-100" />
    </a>
  ))

  // Hero image
  const heroImage = r.heroImage || getImage(r.items[0])

  // Hero image layout
  const bigClass = [
    "group overflow-hidden border-[3px] border-pv-a bg-pv-b animate-float",
    L === 0 && "mx-auto mb-[18px] h-[150px] w-[150px] rounded-full",
    L === 1 && "h-[200px] w-full rounded-3xl",
    L === 2 && "mb-4 h-[150px] w-[150px] rounded-2xl",
  ]
    .filter(Boolean)
    .join(" ")

  const heroStyle =
    L === 2
      ? {
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0 22px, var(--b) 22px 44px)",
          padding: "64px max(16px, calc(50% - 484px))",
        }
      : undefined

  // Gallery images
  const galleryItems = r.items.concat(r.items).slice(0, 6)

  return (
    <div
      className="min-h-screen bg-pv-bg text-pv-ink"
      style={{
        "--bg": r.bg,
        "--ink": r.ink,
        "--a": r.accent,
        "--b": r.surface,
        fontFamily: FONTS[r.font],
      }}
    >
      {/* Scroll Progress */}
      <div
        className="fixed left-0 top-[env(safe-area-inset-top,0px)] z-[60] h-[3px] w-full origin-left bg-pv-a"
        style={{
          transform: `scaleX(${progress})`,
        }}
      />

      {/* Demo Notice */}
      <div className="bg-pv-b px-4 py-2 text-center text-[0.85rem]">
        <Link
          to="/"
          className="mr-3 font-semibold text-pv-a underline-offset-4 hover:underline"
        >
          Back to all concepts
        </Link>
        Demonstration preview. Not an official website until the owner approves.
      </div>

      {/* Developer Introduction */}
      <section className="border-b border-pv-b bg-pv-b/60 px-4 py-4">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-bold text-pv-a">
              Website Concept by {DEVELOPER.name}
            </p>

            <p className="mt-1 text-xs opacity-75">{DEVELOPER.role}</p>

            <p className="mt-1 max-w-md text-xs opacity-70">
              {DEVELOPER.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <a
              href={DEVELOPER.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-pv-a px-4 py-2 text-xs font-semibold text-pv-a transition hover:bg-pv-a hover:text-pv-bg"
            >
              My Portfolio ↗
            </a>

            <a
              href={developerWhatsApp(
                `Assalam-o-Alaikum! I found your ${r.name} website concept and would like to discuss a project.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-pv-a px-4 py-2 text-xs font-semibold text-pv-bg transition hover:brightness-110"
            >
              Contact Developer
            </a>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <header className="sticky top-[env(safe-area-inset-top,0px)] z-40 flex flex-wrap items-center justify-between border-b border-pv-b bg-pv-bg/95 px-4 py-3 backdrop-blur">
        <b className="text-[1.1rem] text-pv-a">{r.name}</b>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="rounded-lg border border-pv-a px-3 py-1.5 text-pv-a transition duration-200 active:scale-95 md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav
          className={`flex w-full flex-col gap-3 overflow-hidden transition-all duration-300 ease-out md:max-h-none md:w-auto md:flex-row md:gap-4 md:pt-0 md:opacity-100 ${
            open ? "max-h-64 pt-3 opacity-100" : "max-h-0 pt-0 opacity-0"
          }`}
        >
          {navLinks}
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        style={heroStyle}
        className={`${
          L === 2 ? "" : "mx-auto max-w-[1000px] px-4 py-14"
        } ${L === 0 ? "text-center" : ""} ${
          L === 1 ? "grid items-center gap-6 md:grid-cols-[1.2fr_1fr]" : ""
        }`}
      >
        <div className={bigClass} aria-hidden="true">
          <img
            src={heroImage}
            alt={`${r.name} restaurant`}
            fetchPriority="high"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div>
          <h1
            className="animate-fade-up text-[clamp(2rem,7vw,3.4rem)] font-bold leading-[1.1]"
            style={{ animationDelay: "100ms" }}
          >
            {r.name}
          </h1>

          <p
            className={`animate-fade-up my-3 max-w-[520px] text-[1.1rem] ${
              L === 0 ? "mx-auto" : ""
            }`}
            style={{ animationDelay: "220ms" }}
          >
            {r.tagline}. {r.category}.
          </p>

          <div
            className={`animate-fade-up mt-[18px] flex flex-wrap gap-2.5 ${
              L === 0 ? "justify-center" : ""
            }`}
            style={{ animationDelay: "340ms" }}
          >
            <a
              href="#menu"
              onClick={(e) => handleNav(e, "menu")}
              className={btn1}
            >
              Explore Menu
            </a>

            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className={btn2}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <Section title="Featured">
        <div
          className={`grid gap-3.5 ${
            L === 2
              ? "grid-cols-1"
              : "grid-cols-[repeat(auto-fill,minmax(210px,1fr))]"
          }`}
        >
          {r.items.slice(0, 3).map((item, idx) => (
            <FoodCard key={item.name} item={item} index={idx} />
          ))}
        </div>
      </Section>

      {/* Menu Section */}
      <Section id="menu" title="Menu">
        <div className="mb-4 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border border-pv-a px-3.5 py-1.5 transition duration-200 active:scale-95 ${
                cat === c ? "bg-pv-a text-pv-bg" : "text-pv-a hover:bg-pv-a/15"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div
          key={cat}
          className={`grid gap-3.5 ${
            L === 2
              ? "grid-cols-1"
              : "grid-cols-[repeat(auto-fill,minmax(210px,1fr))]"
          }`}
        >
          {visible.map((item, idx) => (
            <FoodCard
              key={`${item.cat}-${item.name}`}
              item={item}
              index={idx}
            />
          ))}
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" title="About">
        <p>
          {r.name} serves {r.category.toLowerCase()} in Kartarpura, Rawalpindi.
        </p>

        <p className="mt-3">
          This concept shows how the business could appear online. The brand
          story, history and specialities will be added only after the owner
          confirms them.
        </p>
      </Section>

      {/* Gallery Section */}
      <Section id="gallery" title="Gallery">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-2.5">
          {galleryItems.map((item, idx) => (
            <button
              key={`${item.name}-${idx}`}
              aria-label={`View ${item.name}`}
              onClick={() => setLightbox(item)}
              className="group aspect-square overflow-hidden rounded-xl bg-pv-b transition duration-300 hover:-rotate-2 hover:scale-[1.03] hover:shadow-[0_10px_24px_rgba(0,0,0,0.3)] active:scale-95"
            >
              <img
                src={getImage(item)}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </button>
          ))}
        </div>

        <p className="mt-3 text-[0.85rem]">
          Illustrative images. Replace with owner-approved photos.
        </p>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact">
        <div className="grid gap-2.5">
          <p>Phone: {r.phone} (to be verified)</p>

          <p>Opening hours: to be confirmed</p>

          <div className="mt-[18px] flex flex-wrap gap-2.5">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className={btn1}
            >
              Chat on WhatsApp
            </a>

            <a href={`tel:+${r.wa}`} className={btn2}>
              Call
            </a>

            <a
              href={map}
              target="_blank"
              rel="noopener noreferrer"
              className={btn2}
            >
              Get Directions
            </a>
          </div>
        </div>
      </Section>

      {/* Restaurant Footer */}
      <footer className="bg-pv-b px-4 py-6 text-center text-[0.9rem]">
        <b>{r.name}</b>

        <p className="my-2 flex flex-wrap justify-center gap-4">{navLinks}</p>

        <p>{r.phone}</p>

        <p>Demo preview. Content is sample material pending owner approval.</p>
      </footer>

      {/* Developer Credit */}
      <section className="border-t border-pv-b bg-pv-bg px-4 py-8">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-lg font-bold text-pv-a">
              Crafted by {DEVELOPER.name}
            </p>

            <p className="mt-1 text-sm opacity-75">{DEVELOPER.role}</p>

            <p className="mt-2 max-w-md text-xs opacity-70">
              {DEVELOPER.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <a
              href={DEVELOPER.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className={btn2}
            >
              Portfolio ↗
            </a>

            <a
              href={developerWhatsApp(
                "Assalam-o-Alaikum! I would like to discuss a website development project.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={btn1}
            >
              WhatsApp ↗
            </a>
          </div>
        </div>

        <p className="mt-7 text-center text-xs opacity-60">
          © {new Date().getFullYear()} {DEVELOPER.name}. All Rights Reserved.
        </p>
      </section>

      {/* Image Lightbox */}
      <ImageLightbox item={lightbox} onClose={() => setLightbox(null)} />
    </div>
  )
}
