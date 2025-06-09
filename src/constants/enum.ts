export enum MAIN_CONTENT {
  FEATURE = 'feature',
  VALUE = 'value',
}

export enum ERROR_TYPE {
  PAGE = 'PAGE',
  PRODUCT = 'PRODUCT',
}

export enum BUTTON_THEME {
  ROUNDED_BUTTON = 'ROUNDED_BUTTON',
  ROUNDED_OUTLINE_BUTTON = 'ROUNDED_OUTLINE_BUTTON',
  FULL_ROUNDED = 'FULL_ROUNDED',
  NAVIGATION = 'NAVIGATION',
}

export enum COLOR_THEME {
  DANGER = 'DANGER',
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  DEFAULT = 'DEFAULT',
  TRANSPARENT = 'TRANSPARENT',
}

export type BUTTON_COLOR_THEME = COLOR_THEME.PRIMARY | COLOR_THEME.DEFAULT | COLOR_THEME.SECONDARY;

export type BADGE_COLOR_THEME = COLOR_THEME.DANGER;

export enum BADGE_THEME {
  DEFAULT = 'DEFAULT',
}

export enum LOCAL_STORAGE_KEY {
  CART = 'cart',
}

export enum TOAST_MESSAGE {
  SUCCESS_ADD_PRODUCT_TO_CART = 'Product added to cart successfully!',
  CONFIRM_DELETE_PRODUCT_FROM_CART = 'Do you want to delete this product?',
  SUCCESS_DELETE_PRODUCT_FROM_CART = 'Product removed from cart successfully!',
  CANCEL_DELETE_PRODUCT_FROM_CART = 'Canceled removing product from cart.',
}

export enum ERROR_MESSAGE {
  FAIL_FETCHING_PRODUCTS = 'Failed to fetch products',
}
