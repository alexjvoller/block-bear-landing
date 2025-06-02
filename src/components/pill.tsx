type PillProps = {
  number: number;
  text: string;
};

export const Pill: React.FC<PillProps> = ({ number, text }) => {
  return (
    <div className="px-2 py-1 text-lg rounded-lg bg-white border border-purple-300 text-purple-300 flex w-min h-min gap-1">
      <p className="font-['Lazer84']">{number}</p>|<p className="">{text}</p>
    </div>
  );
};
