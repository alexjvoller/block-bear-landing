import { cn, roundToTwoDecimals } from "@/lib/utils";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { useAnimationContext } from "@/contexts/use-animation-context";

type ValueStatProps = {
  name: string;
  value: number | string | undefined | null;
  date: Date | string | undefined;
  className?: string;
  unit?: string;
  delay?: number;
};

export const ValueStatistic = ({
  name,
  value,
  date,
  className,
  unit,
  delay = 0,
}: ValueStatProps) => {
  const { isChartVisible } = useAnimationContext();
  const displayValue =
    typeof value === "number" ? roundToTwoDecimals(value) : value ?? 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={isChartVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{
        duration: 0.4,
        delay,
        ease: "easeOut",
      }}
      className={cn(className, "w-30 justify-between gap-4 py-2 md:py-3")}
    >
      <div className="flex flex-col justify-start">
        <p className="text-xs dark:text-gray-300">{name}</p>
        <span className="text-sm mt-2 font-semibold md:text-md">
          {displayValue}
          {unit}
        </span>
      </div>
      {date !== undefined && (
        <div className="flex flex-col justify-between">
          <p className="text-xs">on</p>
          <p className="text-sm md:text-md">{format(date, "dd MMM")}</p>
        </div>
      )}
    </motion.div>
  );
};
