export const MAIN_CONTENT = {
  FEATURE: "feature",
  VALUE: "value",
};

export type MAIN_CONTENT_TYPE =
  (typeof MAIN_CONTENT)[keyof typeof MAIN_CONTENT];
