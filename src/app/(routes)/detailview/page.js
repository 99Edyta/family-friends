import Link from "next/link";
import BottomNav from "../../components/BottomNav";
import SiteHeader from "../../components/SiteHeader";
import { featuredBreed } from "../../components/breedData";
import { FiChevronLeft, FiStar } from "react-icons/fi";

const traitColors = ["bg-sky", "bg-rose", "bg-sage", "bg-butter"];

const DetailView = () => {
  return (
    <div className="mx-auto flex h-full min-h-0 w-full max-w-[375px] flex-col">
      <SiteHeader />
      <main className="mx-auto min-h-0 w-full max-w-[375px] flex-1 overflow-y-auto overscroll-contain px-[17px] pb-8 pt-1">
        <div className="grid gap-3">
          <div className="relative overflow-hidden rounded-[25px] bg-rose">
            <img src={featuredBreed.image} alt={featuredBreed.alt} className="aspect-[0.94] w-full object-cover object-[50%_38%]" />
            <Link
              href="/"
              aria-label="Back to breeds"
              className="absolute left-4 top-4 grid size-8 place-items-center rounded-full bg-white/90 text-ink focus-visible:outline-2 focus-visible:outline-coral"
            >
              <FiChevronLeft size={20} />
            </Link>
            <button
              type="button"
              aria-label={`Save ${featuredBreed.name} as favorite`}
              className="absolute right-4 top-4 grid size-8 place-items-center rounded-full bg-white/90 text-coral focus-visible:outline-2 focus-visible:outline-coral"
            >
              <FiStar size={18} fill="currentColor" />
            </button>
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/55 py-1 pl-1 pr-3 text-xs font-medium text-white backdrop-blur-sm">
              <img src={featuredBreed.image} alt="" className="size-7 rounded-full object-cover" />
              {featuredBreed.name}
            </div>
          </div>

          <section>
            <h1 className="text-[25px] font-bold leading-tight text-ink">{featuredBreed.name}</h1>
            <ul aria-label="Breed traits" className="mt-3 flex flex-wrap gap-2">
              {featuredBreed.traits.map((trait, index) => (
                <li key={trait} className={`rounded-full px-3 py-1.5 text-[12px] font-medium text-ink/60 ${traitColors[index]}`}>
                  {trait}
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <h2 className="text-[12px] font-medium text-muted">Breed description</h2>
              <p className="mt-1 text-[14px] leading-[1.55] text-[#676767]">{featuredBreed.description}</p>
            </div>

            <div className="mt-4">
              <h2 className="text-[12px] font-medium text-muted">Breed history</h2>
              <p className="mt-1 text-[14px] leading-[1.55] text-[#676767]">{featuredBreed.history}</p>
            </div>
          </section>
        </div>
      </main>
      <BottomNav active="favorites" />
    </div>
  );
};

export default DetailView;
