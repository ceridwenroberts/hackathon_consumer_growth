import Link from "next/link";
import Image from "next/image";

const StartWorldBloc = () => {
  return (
    <section className="mx-auto mt-6 w-full max-w-[1650px] px-3 text-white sm:px-4 lg:px-6">
      <div className="flex flex-col gap-10 md:flex-row">
        {/* Card 1: Floating gardens */}
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-[#28534f] bg-[#384740] transition hover:border-[#52ece1]/50">
          <div className="flex flex-col gap-3 p-5">
            <Link
              href="/"
              className="inline-flex self-start whitespace-nowrap items-center justify-center border border-[#52ece1]/30 bg-[#52ece1]/10 px-5 py-3 text-sm font-semibold tracking-wider text-[#52ece1] transition hover:border-[#52ece1]/60 hover:bg-[#52ece1]/20 hover:text-white"
            >
              STARTER WORLD
            </Link>
            <Image
              src="/assets/a9983.svg"
              alt=""
              width={360}
              height={360}
              className="h-auto w-full max-w-[360px] self-end object-contain"
            />
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center self-end rounded-full border border-white">
              <Image src="/assets/4e1af.svg" alt="" height={20} width={20} />
            </div>
          </div>

          <div className="mt-auto w-full bg-[#21262A] p-5">
            <h3 className="tracking-wide text-2xl leading-[25.2px]">
              Floating gardens
            </h3>
            <p className="mt-1 text-lg tracking-wide text-white/65">
              Explore & discover
            </p>
          </div>
        </div>

        {/* Card 2: Pastel playground */}
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-[#28534f] bg-[#454358] p-5 transition hover:border-[#52ece1]/50">
          <div className="flex flex-col justify-between gap-3 bg-[#454358]">
            <Link
              href="/"
              className="inline-flex self-start whitespace-nowrap items-center justify-center border border-[#52ece1]/30 bg-[#52ece1]/10 px-5 py-3 text-s font-semibold tracking-wider text-[#52ece1] transition hover:border-[#52ece1]/60 hover:bg-[#52ece1]/20 hover:text-white"
            >
              STARTER WORLD
            </Link>

            <Image
              src="/assets/15dd0.svg"
              alt=""
              width={360}
              height={360}
              className="shrink-0 self-end"
            />
            <div className="flex h-8 w-8 items-center cursor-pointer justify-center self-end rounded-full border border-white">
              <Image src="/assets/4e1af.svg" alt="" height={20} width={20} />
            </div>
          </div>

          <div className="-mx-5 -mb-5 mt-6 flex-1 bg-[#21262A] p-5">
            <h3 className="tracking-wide text-2xl leading-[25.2px]">
              Pastel playground
            </h3>
            <p className="mt-1 text-lg text-white/65">Jump & collect</p>
          </div>
        </div>
        <div className="flex min-w-0 overflow-hidden flex-1 flex-col rounded-xl border border-[#28534f] bg-[#2C545E] p-5 transition hover:border-[#52ece1]/50">
          <div className="flex flex-col justify-between gap-3 bg-[#2C545E]">
            <Link
              href="/"
              className="inline-flex self-start whitespace-nowrap items-center justify-center border border-[#52ece1]/30 bg-[#52ece1]/10 px-5 py-3 text-s font-semibold tracking-wider text-[#52ece1] transition hover:border-[#52ece1]/60 hover:bg-[#52ece1]/20 hover:text-white"
            >
              STARTER WORLD
            </Link>

            <Image
              src="/assets/24ae7.svg"
              alt=""
              width={360}
              height={360}
              className="shrink-0 self-end"
            />
            <div className="flex h-8 w-8 items-center justify-center self-end rounded-full border cursor-pointer border-white">
              <Image src="/assets/4e1af.svg" alt="" height={20} width={20} />
            </div>
          </div>

          <div className="-mx-5 -mb-5 mt-6 flex-1 bg-[#21262A] p-5">
            <h3 className="tracking-wide text-2xl leading-[25.2px]">
              A little island
            </h3>
            <p className="mt-1 text-lg text-white/65">Relax & explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartWorldBloc;
