import type { Service } from "../constants/types";
import { MAIN_CONTENT, type MAIN_CONTENT_TYPE } from "../constants/enum";
import type { JSX } from "react";

export interface ServiceCardProps extends Service {
  mainContent: MAIN_CONTENT_TYPE;
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

  const detailClass = isFeature
    ? "feature-detail d-flex-col"
    : "value-detail d-flex-col";

  const titleClass = isFeature ? "feature-detail-name" : "value-title";

  const descriptionClass = isFeature
    ? "feature-detail-paragraph"
    : "value-paragraph";

  return (
    <div className={containerClass}>
      <i className={`icon ${icon}`} />
      <div className={detailClass}>
        <h3 className={titleClass}>{title}</h3>
        <p className={descriptionClass}>{description}</p>
      </div>
    </div>
  );
};
