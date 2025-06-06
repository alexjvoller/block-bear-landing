import { cn, roundToTwoDecimals } from "@/lib/utils";
import { format } from "date-fns";

type ValueStatProps = {
  name: string;
  value: number | string | undefined | null;
  date: Date | string | undefined;
  className?: string;
  unit?: string;
};

export const ValueStatistic = ({
  name,
  value,
  date,
  className,
  unit,
}: ValueStatProps) => {
  const displayValue =
    typeof value === "number" ? roundToTwoDecimals(value) : value ?? 0;

  return (
    <div
      className={cn(
        className,
        "w-30 flex flex-row justify-between gap-4 py-2  md:py-3"
      )}
    >
      <div className="flex flex-col justify-start">
        <p className="text-xs  dark:text-gray-300">{name}</p>
        <span className="text-sm mt-2 font-semibold  md:text-md">
          {displayValue}
          {unit}
        </span>
      </div>
      {date !== undefined && (
        <div className="flex flex-col justify-between">
          <p className="text-xs ">on</p>
          <p className=" text-sm md:text-md">{format(date, "dd MMM")}</p>
        </div>
      )}
    </div>
  );
};
