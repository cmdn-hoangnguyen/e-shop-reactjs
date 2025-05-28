import clsx from 'clsx';

import { Button } from './Button';
import { BUTTON_THEME } from '../constants/enum';
import type { PromotionItem } from '../constants/types';

interface PromotionCardProps {
  promotion: PromotionItem;
  index: number;
}

export const PromotionCard = ({ promotion, index }: PromotionCardProps) => {
  const formatTitle = (title: string) => {
    return title.split('\n').map((line, lineIndex) => <span key={lineIndex}>{line}</span>);
  };

  return (
    <div className="promotion-content">
      <div className="promotion-bg"></div>

      <div className="card-image-wrapper promotion-image-wrapper">
        <img
          className="card-image promotion-image"
          src={promotion?.image?.url}
          alt={promotion?.image?.alt}
        />
      </div>

      <div
        className={clsx(
          'promotion-detail d-flex-col justify-between',
          index === 0 && 'promotion-arrival-content'
        )}
      >
        <h2 className="promotion-title d-flex-col">{formatTitle(promotion?.title)}</h2>

        <Button
          variant={BUTTON_THEME.ROUNDED_BUTTON}
          label={promotion?.buttonLabel}
          href="/#"
          isButtonRole
        />
      </div>
    </div>
  );
};
