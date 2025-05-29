import {
  BADGE_THEME,
  BUTTON_THEME,
  COLOR_THEME,
  type BADGE_COLOR_THEME,
  type BUTTON_COLOR_THEME,
} from './enum';

export interface ButtonThemeProps {
  base: Record<BUTTON_THEME, string>;
  color: Record<BUTTON_COLOR_THEME, string>;
}

export interface BadgeThemeProps {
  base: Record<BADGE_THEME, string>;
  color: Record<BADGE_COLOR_THEME, string>;
}

export interface CustomTheme {
  button: ButtonThemeProps;
  badge: BadgeThemeProps;
}

export const theme: CustomTheme = {
  button: {
    base: {
      [BUTTON_THEME.NAVIGATION]: 'action-item-content',
      [BUTTON_THEME.ROUNDED_BUTTON]: 'button button-borderless',
      [BUTTON_THEME.ROUNDED_OUTLINE_BUTTON]: 'button button-bordered',
      [BUTTON_THEME.FULL_ROUNDED]: 'button-full-rounded ',
    },
    color: {
      [COLOR_THEME.PRIMARY]: 'button-primary',
      [COLOR_THEME.DEFAULT]: 'button-default',
      [COLOR_THEME.SECONDARY]: 'button-secondary',
    },
  },

  badge: {
    base: {
      [BADGE_THEME.DEFAULT]: 'badge',
    },
    color: {
      [COLOR_THEME.DANGER]: 'badge-danger',
    },
  },
};
