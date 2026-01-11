import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  padding = "md",
}) => {
  const paddingClasses = {
    sm: "p-6",
    md: "p-8",
    lg: "p-10",
  };

  return (
    <div className={`bg-slate-50 rounded-[2.5rem] border border-slate-100 ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
};
