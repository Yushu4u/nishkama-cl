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
    "group inline-flex items-center justify-center font-bold transition-all rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2F7CEF]";

  const variantClasses = {
    primary:
      "bg-[#2F7CEF] text-white hover:bg-[#1E66D8] active:scale-[0.98] shadow-sm hover:shadow active:bg-[#1856BA]",
    secondary:
      "bg-[#EFF6FF] text-[#1D4ED8] hover:bg-[#DBEAFE] border border-[#BFDBFE] active:scale-[0.98]",
    outline:
      "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400 active:scale-[0.98] shadow-sm",
    ghost:
      "text-slate-700 hover:text-[#2F7CEF] active:scale-[0.98]",
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
          location: trackingLocation || "Unknown",
          destination: href || "Action",
        },
      });
    }
    if (onClick) onClick();
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

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
          <span>{children}</span>
          {withArrow && (
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          )}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses} onClick={handleClick}>
        <span>{children}</span>
        {withArrow && (
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        )}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClasses}
      onClick={handleClick}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
