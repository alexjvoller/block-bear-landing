import Image from "next/image";
import CTAButtons from "./CTAButtons";

export const MidCTA = () => {
  return (
    <section id="cta" className="">
      <div className="px-5 gap-4 justify-center relative h-full w-full flex z-10 mx-auto py-12 sm:py-20">
        <div className="">
          <div className=" opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
          </div>

          <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
            <h2 className="text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">
              Block Bear is coming soon
            </h2>

            <p className="mx-auto max-w-xl md:px-5">
              Claim the Launch Party Badge for your profile. Only available if
              you join the waitlist before we launch
            </p>
            <CTAButtons />
          </div>
        </div>

        {/* <CTAButtons /> */}
        <div className="hidden lg:block">
          <Image
            src="/images/glasses-bear.png"
            alt="Trackables preview"
            width={200}
            height={200}
            quality={100}
            sizes="(max-width: 768px) 100vw, 384px"
            style={{
              filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1))",
              borderRadius: "4px",
            }}
          />
        </div>
      </div>
    </section>
  );
};
