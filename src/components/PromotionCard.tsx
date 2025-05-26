import type { PromotionItem } from "../constants/types";
import { NavigateButton } from "./NavigateButton";

interface PromotionCardProps {
  promotion: PromotionItem;
  index: number;
}

export const PromotionCard = ({ promotion, index }: PromotionCardProps) => {
  const formatTitle = (title: string) => {
    return title
      .split("\n")
      .map((line, lineIndex) => <span key={lineIndex}>{line}</span>);
  };

  return (
    <div className="promotion-content">
      <div className="promotion-bg"></div>

      <div className="card-image-wrapper promotion-image-wrapper">
        <img
          className="card-image promotion-image"
          src={promotion?.image}
          alt={promotion?.alt}
        />
      </div>

      <div
        className={`promotion-detail d-flex-col justify-between ${
          index === 0 ? "promotion-arrival-content" : ""
        }`}
      >
        <h2 className="promotion-title d-flex-col">
          {formatTitle(promotion?.title)}
        </h2>

        <NavigateButton label={promotion?.buttonLabel} href="/#" isButtonRole />
      </div>
    </div>
  );
};
