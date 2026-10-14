import Image from "next/image";

const HomeImaginationBloc = () => {
  return (
    <section className="mx-auto mt-10 w-full max-w-[1600px] rounded-xl bg-[#05363B] p-3 text-white sm:p-4 lg:p-6">
      <div
        className="
          grid min-h-[43px]
          grid-cols-1
          overflow-hidden rounded-[13px]
          border border-[#28534f]
          bg-[radial-gradient(ellipse_at_75%_65%,#1d5d54,transparent_55%),linear-gradient(139.64deg,#04343a,#073e40)]
          md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]
        "
      >
        {/* Left: Text and buttons */}
        <div className="flex flex-col items-start justify-center p-6 sm:p-10 lg:p-12">
          <h1 className="font-['Inter:Bold',Inter,sans-serif] text-[clamp(32px,3.15vw,48px)] font-[650] leading-[1.15] tracking-[0.02em] text-[#f4f3e9]">
            Your imagination.
            <br />A world of its own.
          </h1>

          <p className="mt-5 max-w-[440px] text-base leading-7 text-white/75 sm:text-lg">
            Create and share playable 3D worlds. No code. No downloads. Just you
            and your ideas.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:items-center">
            <button className="inline-flex h-[52px] w-[280px] items-center justify-center gap-3 rounded-full bg-[#52ece1] px-6 font-semibold text-[#04343a] transition hover:bg-[#8af5ed]">
              Create your first world
              <Image src="/assets/0cba2.svg" alt="" width={20} height={20} />
            </button>

            <button className="inline-flex h-[52px] w-[280px] items-center justify-center gap-3 rounded-full border border-white/30 px-6 font-medium text-white transition hover:border-white hover:bg-white/10">
              Or jump into an example
              <Image
                src="/assets/4e1af.svg"
                alt=""
                width={20}
                height={20}
                className="-rotate-[50deg]"
              />
            </button>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="relative flex min-h-[260px] items-center justify-center p-6 md:min-h-0">
          <div className="absolute h-48 w-48 rounded-full bg-[#52ece1]/10 blur-3xl sm:h-64 sm:w-64" />

          <Image
            src="/assets/a9983.svg"
            alt="Illustration of a creative 3D world"
            width={360}
            height={360}
            priority
            className="relative z-10 h-auto w-full max-w-[320px] object-contain transition-transform duration-500 hover:scale-105 sm:max-w-[360px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeImaginationBloc;
