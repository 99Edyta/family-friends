import Link from "next/link";
import { FiHome, FiMessageCircle, FiStar, FiUser } from "react-icons/fi";

const items = [
  { href: "/", label: "Home", icon: FiHome, key: "discover" },
  { href: "/#favorites", label: "Favorites", icon: FiStar, key: "favorites" },
  { href: "/#messages", label: "Messages", icon: FiMessageCircle, key: "messages" },
  { href: "/#profile", label: "Profile", icon: FiUser, key: "profile" },
];

export default function BottomNav({ active = "discover" }) {
  return (
    <nav
      aria-label="Hovednavigation"
      className="relative z-20 mx-auto mt-auto w-full max-w-[375px] shrink-0 rounded-b-[35px] border-t border-black/5 bg-white/95 px-3 pb-[env(safe-area-inset-bottom)] backdrop-blur"
    >
      <ul className="mx-auto flex h-[58px] max-w-lg items-center justify-around">
        {items.map((item) => (
          <li key={item.key}>
            {(() => {
              const Icon = item.icon;
              return (
                <Link
                  href={item.href}
                  aria-label={item.label}
                  aria-current={active === item.key ? "page" : undefined}
                  className={`grid size-11 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral ${
                    active === item.key ? "text-coral" : "text-muted"
                  }`}
                >
                  <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
                </Link>
              );
            })()}
          </li>
        ))}
      </ul>
    </nav>
  );
}
