import { Button } from './Button';
import { IconWrapper } from './IconWrapper';
import { footerTopContent, socialLinks } from '../constants/data';
import { BUTTON_THEME } from '../constants/enum';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-top-content d-grid">
            <div className="footer-top-content-item d-flex-col col-lg-6 col-md-12">
              <a className="logo-content d-flex items-center" href="/#">
                <IconWrapper iconClass="icon-cloth" />
                <span>E-Shop</span>
              </a>

              <p className="footer-top-paragraph">
                House My Brand designs clothing for the young, the old &everyone in between – but
                most importantly, for the fashionable
              </p>

              <ul className="social-list d-flex">
                {socialLinks?.map((link, index) => (
                  <li className="social-item" key={index}>
                    <Button
                      variant={BUTTON_THEME.NAVIGATION}
                      href={link.href}
                      label={<IconWrapper iconClass={link.iconClass} />}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {footerTopContent.map((content, index) => (
              <div
                className="footer-top-content-item d-flex-col col-lg-2 col-md-4 col-sm-12"
                key={index}
              >
                <h3 className="footer-top-title">{content.title}</h3>

                <ul className="shop-info-list d-flex-col">
                  {content.links.map((link, index) => (
                    <li className="shop-info-item" key={index}>
                      <Button
                        variant={BUTTON_THEME.NAVIGATION}
                        href={link.href}
                        label={link.label}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom-paragraph">CLASSMETHOD</p>
      </div>
    </footer>
  );
};
