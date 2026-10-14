import Link from "next/link";
import Image from "next/image";

const ExplorLink = () => {
  return (
    <section className="mx-auto mt-6 w-full max-w-[1650px] px-3 text-white sm:px-4 lg:px-6">
      <div className="flex w-full items-center justify-between gap-4 rounded-xl border border-[#28534f] bg-[#191E22]/90 p-5">
        <p className="text-sm sm:text-base">
          Made for curious minds. Built for possibility.
        </p>

        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-sm transition hover:text-[#52ece1] sm:text-base"
        >
          Explore all starters
          <Image
            src="/assets/4e1af.svg"
            alt=""
            width={25}
            height={25}
          />
        </Link>
      </div>
    </section>
  );
};

export default ExplorLink;
