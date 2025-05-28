import type { JSX } from "react";

import clsx from "clsx";

interface ButtonProps {
  label: string;
  onClick: () => void;
  isPrimary?: boolean;
  className?: string;
}

export const Button = ({
  label,
  onClick,
  isPrimary = false,
  className = "",
}: ButtonProps): JSX.Element => {
  const handleClick = (): void => {
    onClick();
  };

  const classes = [
    isPrimary
      ? "button-primary button-borderless"
      : "button-add-to-card button-bordered",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={clsx("button", classes)} onClick={handleClick}>
      {label}
    </button>
  );
};
