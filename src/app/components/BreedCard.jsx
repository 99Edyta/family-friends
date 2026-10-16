import Link from "next/link";
import { FiStar } from "react-icons/fi";

export default function BreedCard({ dog }) {
  return (
    <article className="breed-card group relative">
      <Link href="/detailview" className="block focus-visible:outline-none">
        <div className="relative aspect-[1.4] overflow-hidden bg-peach">
          <img
            src={dog.image}
            alt={dog.alt}
            style={dog.imagePosition ? { objectPosition: dog.imagePosition } : undefined}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
        <div className="min-h-[66px] px-2.5 pb-2.5 pt-2">
          <p className="text-[13px] font-semibold leading-tight text-ink">{dog.name}</p>
          <p className="mt-1 text-[11px] leading-[1.2] text-muted">{dog.origin}</p>
        </div>
      </Link>
      <button
        type="button"
        aria-label={`Gem ${dog.name} som favorit`}
        className="absolute right-2 top-2 grid size-7 place-items-center rounded-full bg-white/25 text-white drop-shadow-sm transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-white"
      >
        <FiStar size={18} strokeWidth={2} />
      </button>
    </article>
  );
}
