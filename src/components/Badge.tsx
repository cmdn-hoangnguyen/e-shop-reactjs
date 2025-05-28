import clsx from 'clsx';

import type { BADGE_COLOR_THEME, BADGE_THEME } from '../constants/enum';
import { theme } from '../constants/theme';

interface BadgeProps {
  text: string;
  variant: BADGE_THEME;
  color: BADGE_COLOR_THEME;
  className?: string;
}

export const Badge = ({ text, variant, color, className }: BadgeProps) => {
  const baseClass = theme.badge.base[variant];
  const colorClass = theme.badge.color[color];

  const classes = clsx('d-flex items-center justify-center', baseClass, colorClass, className);

  return <span className={classes}>{text}</span>;
};
