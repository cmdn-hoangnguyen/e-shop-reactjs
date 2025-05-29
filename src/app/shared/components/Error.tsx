import type { JSX } from 'react';

import clsx from 'clsx';

import { Button } from '../../../components/Button';
import { errorData } from '../../../constants/data';
import { BUTTON_THEME, type ERROR_TYPE } from '../../../constants/enum';

interface ErrorProps {
  message: string;
  errorType?: ERROR_TYPE;
}

const Error: ({ message, errorType }: ErrorProps) => JSX.Element = ({
  message,
  errorType,
}: ErrorProps) => {
  return (
    <section className="section section-notfound d-flex items-center justify-center">
      <div className="container d-grid justify-items-center items-center">
        {errorType && (
          <div className="notfound-image-wrapper col-lg-6 col-md-12">
            <img
              className="notfound-image"
              src={errorData?.[errorType]?.image?.url}
              alt={errorData?.[errorType]?.image?.alt}
            />
          </div>
        )}

        <div
          className={clsx(
            'notfound-content-wrapper',
            errorType ? 'col-lg-6 col-md-12' : 'col-lg-12'
          )}
        >
          <div className="notfound-header d-flex-col items-center justify-center">
            <span className="notfound-status">404</span>
            <h2 className="notfound-title">OOPS! {errorType} NOT FOUND</h2>
          </div>

          <div className="notfound-body d-flex-col items-center justify-center">
            <p className="notfound-content">{message}</p>

            <Button
              className="button-bordered button-back-homepage"
              variant={BUTTON_THEME.ROUNDED_OUTLINE_BUTTON}
              href="/"
              label={'Back to Homepage'}
              isButtonRole
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
