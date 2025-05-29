import type { JSX } from 'react';

import clsx from 'clsx';

import { COLOR_THEME, BUTTON_THEME, type BUTTON_COLOR_THEME } from '../constants/enum';
import { theme } from '../constants/theme';

interface ButtonProps {
  label: string | JSX.Element;
  variant: BUTTON_THEME;
  color?: BUTTON_COLOR_THEME;
  className?: string;
  href?: string;
  isButtonRole?: boolean;
  onClick?: () => void;
}

export const Button = ({
  label,
  variant,
  color,
  className = '',
  onClick,
  href,
  isButtonRole = false,
}: ButtonProps): JSX.Element => {
  const colorCondition =
    color ?? (variant === BUTTON_THEME.NAVIGATION ? undefined : COLOR_THEME.DEFAULT);

  const baseClass = theme.button.base[variant];
  const colorClass = colorCondition && theme.button.color[colorCondition];

  const classes = clsx(baseClass, colorClass, className);

  if (href) {
    return (
      <a className={classes} href={href} role={isButtonRole ? 'button' : undefined}>
        {label}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {label}
    </button>
  );
};
