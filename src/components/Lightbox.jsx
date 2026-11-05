import { useEffect } from "react"

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return
    const onKey = (e) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [item, onClose])

  if (!item) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="animate-fade-in fixed inset-0 z-[90] flex flex-col items-center justify-center gap-3 bg-black/85 p-5 text-center text-white backdrop-blur-sm"
    >
      <div key={item.name} className="animate-pop text-[8rem] leading-none">
        {item.emoji}
      </div>
      <p
        className="animate-fade-up text-lg"
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
