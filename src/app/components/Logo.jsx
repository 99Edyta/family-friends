import Link from "next/link";

const Logo = () => {
  return (
    <h1 className="text-[16px] font-bold tracking-[-0.04em] text-ink">
      <Link href="/" aria-label="FamilyFriends - oversigt">
        FamilyFriends
      </Link>
    </h1>
  );
};

export default Logo;
