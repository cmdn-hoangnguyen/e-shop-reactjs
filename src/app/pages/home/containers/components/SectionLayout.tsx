import type { JSX } from 'react';

import clsx from 'clsx';

interface SectionLayoutProps {
  children: React.ReactNode;
  title?: string | JSX.Element;
  sectionClass?: string;
}

export const SectionLayout = ({ children, title, sectionClass }: SectionLayoutProps) => {
  return (
    <section className={clsx('section', sectionClass)}>
      <div className="container">
        <div className="section-content d-flex-col">
          {title && (
            <>{typeof title === 'string' ? <h2 className="section-title">{title}</h2> : title}</>
          )}

          <ul className="d-grid value-list">{children}</ul>
        </div>
      </div>
    </section>
  );
};
