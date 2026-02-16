import useMediaQuery from "@/hooks/useMediaQuery";
import { cn } from "@/utils/tailwindcss";
import { useRouter } from "next/navigation";

export default function FilterResetButton() {
  const { isMobile } = useMediaQuery();
  const router = useRouter();

  const handleResetClick = () => {
    router.push("/");
  };

  return (
    <button
      className={cn(
        "text-foreground h-full flex justify-between items-center gap-2 transition-opacity hover:opacity-50",
        "mobile:h-full mobile:aspect-square mobile:py-1 mobile:justify-center",
      )}
      onClick={handleResetClick}
    >
      {isMobile ? <span className="sr-only">Reset</span> : <span>Reset</span>}
      <svg
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray w-4 h-4 mobile:w-5 mobile:h-5"
      >
        <path
          d="M1.04191 3.30574C1.66738 2.22626 2.66384 1.41087 3.84576 1.01141C5.02767 0.611938 6.31449 0.655616 7.4666 1.13431C8.6187 1.613 9.55758 2.49408 10.1084 3.61349C10.6593 4.7329 10.7845 6.01435 10.4608 7.21923C10.1372 8.42411 9.38666 9.47031 8.34904 10.163C7.31142 10.8557 6.05742 11.1477 4.82052 10.9847C3.58363 10.8216 2.44814 10.2146 1.62549 9.27665C1.18681 8.77649 0.85303 8.2004 0.636963 7.58241"
          stroke="currentColor"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M3.94749 3.71507H0.732422V0.5"
          stroke="currentColor"
          strokeLinecap="square"
        />
      </svg>
    </button>
  );
}
