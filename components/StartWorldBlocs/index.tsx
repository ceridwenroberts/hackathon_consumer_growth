import Link from "next/link";
import Image from "next/image";

const worlds = [
  {
    title: "Floating gardens",
    subtitle: "Explore & discover",
    image: "/assets/a9983.svg",
    bg: "bg-[#384740]",
  },
  {
    title: "Pastel playground",
    subtitle: "Jump & collect",
    image: "/assets/15dd0.svg",
    bg: "bg-[#454358]",
  },
  {
    title: "A little island",
    subtitle: "Relax & explore",
    image: "/assets/24ae7.svg",
    bg: "bg-[#2C545E]",
  },
];

const StartWorldBloc = () => {
  return (
    <section className="mx-auto mt-6 w-full max-w-[1650px] px-3 text-white sm:px-5 lg:px-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6">
        {worlds.map((world) => (
          <div
            key={world.title}
            className={`flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#28534f] ${world.bg} transition hover:border-[#52ece1]/50`}
          >
            {/* Card content */}
            <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
              <Link
                href="/"
                className="inline-flex w-fit max-w-full items-center justify-center border border-[#52ece1]/30 bg-[#52ece1]/10 px-3 py-2.5 text-xs font-semibold tracking-wider text-[#52ece1] transition hover:border-[#52ece1]/60 hover:bg-[#52ece1]/20 hover:text-white sm:px-5 sm:text-sm"
              >
                STARTER WORLD
              </Link>

              {/* Responsive image */}
              <div className="flex min-h-[180px] flex-1 items-center justify-center sm:min-h-[220px]">
                <Image
                  src={world.image}
                  alt={world.title}
                  width={360}
                  height={360}
                  sizes="(max-width: 639px) 90vw, (max-width: 1279px) 45vw, 30vw"
                  className="h-auto w-full max-w-[360px] object-contain"
                />
              </div>

              {/* Icon */}
              <div className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center self-end rounded-full border border-white">
                <Image
                  src="/assets/4e1af.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
            </div>

            {/* Card footer */}
            <div className="mt-auto bg-[#21262A] p-4 sm:p-5">
              <h3 className="text-xl leading-tight tracking-wide sm:text-2xl">
                {world.title}
              </h3>

              <p className="mt-1 text-base tracking-wide text-white/65 sm:text-lg">
                {world.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StartWorldBloc;
