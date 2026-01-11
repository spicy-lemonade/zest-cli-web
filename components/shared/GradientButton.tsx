import React from "react";

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  type = "button",
  size = "md",
  fullWidth = false,
  className = "",
}) => {
  const sizeClasses = {
    sm: "px-8 py-3 text-sm rounded-full",
    md: "px-10 py-4 text-base rounded-2xl",
    lg: "px-12 py-5 text-lg rounded-3xl",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`zest-gradient-bg text-white font-black shadow-xl shadow-red-500/20 hover:scale-[1.02] active:scale-95 transition-all ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </button>
  );
};
