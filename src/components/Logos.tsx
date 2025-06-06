import Image from "next/image";

const Logos: React.FC = () => {
  return (
    <section
      id="logos"
      className="py-3 px-5 bg-background border-t-2 border-black border-b-2 flex items-center justify-center"
    >
      <div className="max-w-2xl grid grid-cols-2 justify-center items-center gap-4 ">
        <p className=" text-sm md:text-base text-right">
          A startup in the I2N pre-accelator program.
        </p>
        <Image src="/images/uni-logo.png" alt="logo" width={289} height={75} />
      </div>
    </section>
  );
};

export default Logos;
