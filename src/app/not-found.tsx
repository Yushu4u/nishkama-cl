import React from "react";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#FAF8F5] px-6 text-center">
      <div className="shell max-w-md">
        <span className="font-display text-sm font-semibold tracking-widest text-[#706B78] uppercase">
          404 — Page Not Found
        </span>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[#282531] sm:text-5xl">
          Looks like this test path failed.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-[#706B78]">
          The page or resource you were looking for doesn&apos;t exist or may have been moved
          during a recent refactor.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md">
            Return to Homepage
          </Button>
          <Button href="/services" variant="outline" size="md">
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );
}
