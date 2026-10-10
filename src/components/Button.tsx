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
    "group inline-flex items-center justify-center font-medium transition-smooth rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#282531]";

  const variantClasses = {
    primary:
      "bg-[#282531] text-[#FAF8F5] hover:bg-[#14121A] active:scale-[0.98] shadow-sm",
    secondary:
      "bg-[#EFECE4] text-[#282531] hover:bg-[#E5E0D5] active:scale-[0.98]",
    outline:
      "border border-[#E8E4DC] bg-transparent text-[#282531] hover:bg-[#FFFFFF] hover:border-[#DDD8CD] active:scale-[0.98]",
    ghost:
      "text-[#282531] hover:text-[#706B78] active:scale-[0.98]",
    dark:
      "bg-[#FAF8F5] text-[#282531] hover:bg-[#FFFFFF] active:scale-[0.98] shadow-sm",
  };

  const sizeClasses = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-2.5",
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
          className="h-4 w-4 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
