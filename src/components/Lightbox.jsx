import { useEffect } from "react"

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=90"

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return

    const onKey = (e) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [item, onClose])

  if (!item) return null

  const image = item.image || item.photo || DEFAULT_IMAGE

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="animate-fade-in fixed inset-0 z-[90] flex flex-col items-center justify-center gap-4 bg-black/90 p-5 text-center text-white backdrop-blur-sm"
    >
      <div
        key={item.name}
        className="animate-pop w-full max-w-3xl overflow-hidden rounded-2xl shadow-2xl"
      >
        <img
          src={image}
          alt={item.name}
          onError={(e) => {
            e.currentTarget.onerror = null
            e.currentTarget.src = DEFAULT_IMAGE
          }}
          className="max-h-[70vh] w-full object-contain"
        />
      </div>

      <p
        className="animate-fade-up text-lg font-semibold"
        style={{ animationDelay: "120ms" }}
      >
        {item.name}
      </p>

      <button
        onClick={onClose}
        className="rounded-xl border-2 border-white bg-white px-5 py-2.5 font-bold text-black transition duration-200 hover:scale-105 active:scale-95"
      >
        Close
      </button>
    </div>
  )
}
