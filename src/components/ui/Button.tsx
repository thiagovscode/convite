import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean; className?: string };

export const Button: React.FC<Props> = ({ className = "", children, ...rest }) => {
  const base = "inline-flex items-center justify-center px-4 py-2 rounded-2xl font-semibold transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed";
  const styles = "bg-stone-900 hover:bg-stone-800 text-white shadow";
  return <button className={`${base} ${styles} ${className}`} {...rest}>{children}</button>;
};

export const ButtonGhost: React.FC<Props> = ({ className = "", children, ...rest }) => {
  const base = "inline-flex items-center justify-center px-3 py-2 rounded-xl font-medium text-slate-700 hover:bg-black/5";
  return <button className={`${base} ${className}`} {...rest}>{children}</button>;
};

export const ButtonOutline: React.FC<Props> = ({ className = "", children, ...rest }) => {
  const base = "inline-flex items-center justify-center px-4 py-2 rounded-2xl font-semibold border border-stone-300 text-stone-800 hover:bg-black/5";
  return <button className={`${base} ${className}`} {...rest}>{children}</button>;
};
