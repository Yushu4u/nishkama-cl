"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
  trackingLabel?: string;
  trackingLocation?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  external = false,
  trackingLabel,
  trackingLocation,
}: ButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center font-bold transition-all rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600";

  const variantClasses = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98] shadow-sm hover:shadow",
    secondary:
      "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200/60 active:scale-[0.98]",
    outline:
      "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400 active:scale-[0.98] shadow-sm",
    ghost:
      "text-slate-700 hover:text-indigo-600 active:scale-[0.98]",
    dark:
      "bg-white text-slate-900 hover:bg-slate-100 active:scale-[0.98] shadow-sm",
  };

  const sizeClasses = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-sm sm:text-base px-7 py-3.5 gap-2.5",
  };

  const handleClick = () => {
    if (trackingLabel) {
      trackEvent({
        name: "cta_click",
        properties: {
          label: trackingLabel,
          location: trackingLocation || "unknown",
          destination: href || "action",
        },
      });
    }
    if (onClick) onClick();
  };

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
    disabled ? "opacity-50 pointer-events-none cursor-not-allowed" : ""
  }`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          onClick={handleClick}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} onClick={handleClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={handleClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
