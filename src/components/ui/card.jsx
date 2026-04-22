import { cn } from "@/lib/utils";

export const Card = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-white/10 bg-white/8 shadow-[0_30px_80px_rgba(15,23,42,0.32)] backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-1 hover:border-emerald-400/20 hover:shadow-[0_35px_90px_rgba(15,23,42,0.4)]",
        className,
      )}
      {...props}
    />
  );
};
