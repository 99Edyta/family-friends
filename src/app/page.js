import BreedCard from "./components/BreedCard";
import BottomNav from "./components/BottomNav";
import SiteHeader from "./components/SiteHeader";
import { breeds } from "./components/breedData";
import { FiSearch } from "react-icons/fi";

export default function ListView() {
  return (
    <div className="mx-auto flex h-full min-h-0 w-full max-w-[375px] flex-col">
      <SiteHeader />
      <main className="mx-auto min-h-0 w-full max-w-[375px] flex-1 overflow-y-auto overscroll-contain px-[17px] pb-8 pt-3">
        <form action="/" method="get" role="search" className="flex h-12 items-center gap-3">
          <label htmlFor="breed-search" className="sr-only">
            Search breeds
          </label>
          <button
            type="submit"
            aria-label="Search"
            className="grid size-12 shrink-0 place-items-center rounded-full bg-coral/70 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
          >
            <FiSearch size={22} strokeWidth={2.5} />
          </button>
          <input
            id="breed-search"
            name="q"
            type="search"
            placeholder="search breeds"
            className="h-12 min-w-0 flex-1 rounded-full border border-black/15 bg-white px-4 text-[14px] text-ink outline-none placeholder:text-[#c4c4c4] focus:border-coral"
          />
        </form>

        <section aria-label="Dog breeds" className="mt-6 grid grid-cols-2 items-start gap-x-3.5 gap-y-3.5">
          {breeds.map((dog) => (
            <BreedCard key={dog.name} dog={dog} />
          ))}
        </section>
      </main>
      <BottomNav />
    </div>
  );
}
