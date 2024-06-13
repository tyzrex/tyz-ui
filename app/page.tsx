import { buttonVariants } from "@/components/ui/button";
import { FLATTEND_ROUTES } from "@/lib/routes-config";
import { TerminalIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center text-center px-2 py-8">
      <h1 className="text-3xl font-bold mb-4 sm:text-7xl">tyz-ui</h1>
      <h2 className="text-xl sm:text-3xl text-foreground font-bold">
        A custom usecase component extension over shadcn ui
      </h2>
      <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground mt-2">
        tyz-ui is a custom usecase component extension over shadcn ui that I
        created for my personal usage. These components serve as a reference for
        future development and usage in my projects.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs/${FLATTEND_ROUTES[0].href}`}
          className={buttonVariants({ className: "px-6" })}
        >
          Get Stared
        </Link>
        <Link
          href="#"
          className={buttonVariants({
            variant: "outline",
            className: "px-6",
          })}
        >
          View on Github
        </Link>
      </div>
      {/* <span className="flex flex-row items-center gap-2 text-zinc-400 text-md mt-7 -mb-12 max-[800px]:mb-12">
        <TerminalIcon className="w-4 h-4" /> ~ npx this-library-name@latest
      </span> */}
    </div>
  );
}
