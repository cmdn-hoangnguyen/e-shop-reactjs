import type { Service } from "../constants/types";
import { MAIN_CONTENT } from "../constants/enum";
import type { JSX } from "react";
import { IconWrapper } from "./IconWrapper";
import clsx from "clsx";

export interface ServiceCardProps extends Service {
  mainContent: MAIN_CONTENT;
}

export const ServiceItem = ({
  icon,
  title,
  description,
  mainContent,
}: ServiceCardProps): JSX.Element => {
  const isFeature = mainContent === MAIN_CONTENT.FEATURE;

  const containerClass = isFeature
    ? "feature-content d-flex"
    : "value-content d-flex-col";

  const detailClass = isFeature ? "feature-detail" : "value-detail";

  const titleClass = isFeature ? "feature-detail-name" : "value-title";

  const descriptionClass = isFeature
    ? "feature-detail-paragraph"
    : "value-paragraph";

  return (
    <div className={containerClass}>
      <IconWrapper iconClass={icon} />

      <div className={clsx("d-flex-col", detailClass)}>
        <h3 className={titleClass}>{title}</h3>
        <p className={descriptionClass}>{description}</p>
      </div>
    </div>
  );
};
