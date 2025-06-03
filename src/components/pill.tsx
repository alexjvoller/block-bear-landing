type PillProps = {
  number: number;
  text: string;
};

export const Pill: React.FC<PillProps> = ({ number, text }) => {
  return (
    <div className="px-2 py-1 text-sm md:text-lg rounded-lg bg-white border border-purple-300 text-purple-300 flex w-fit h-min gap-2">
      <p className="font-['Lazer84']">{number}</p>|<p className="">{text}</p>
    </div>
  );
};
