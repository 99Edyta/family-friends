import Logo from "./Logo";
import { FiBell } from "react-icons/fi";
import { IoBatteryFull, IoCellular, IoWifi } from "react-icons/io5";

export default function SiteHeader() {
  return (
    <header className="px-5 pb-2 pt-1">
      <div aria-label="Phone status" className="flex h-7 items-center justify-between px-1 text-[13px] font-semibold text-ink">
        <time dateTime="09:41">9:41</time>
        <div aria-hidden="true" className="flex items-center gap-1 text-[17px]">
          <IoCellular />
          <IoWifi />
          <IoBatteryFull className="ml-0.5 text-[20px]" />
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[375px] items-center justify-between pt-1">
        <Logo />
        <button
          type="button"
          aria-label="Notifications"
          className="relative grid size-9 place-items-center rounded-full text-ink focus-visible:outline-2 focus-visible:outline-coral"
        >
          <FiBell size={20} strokeWidth={1.8} />
          <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-coral" />
        </button>
      </div>
    </header>
  );
}
