import { useEffect, useRef, type JSX } from "react";

import clsx from "clsx";

import { IconWrapper } from "./IconWrapper";
import { NavigateButton } from "./NavigateButton";
import { headerActionListItems, navigationListItems } from "../constants/data";
import { useCartContext } from "../contexts/CartContext";

export const Header = (): JSX.Element => {
  const { cart } = useCartContext();

  const pathname = window.location.pathname;

  const headerContainerRef = useRef<HTMLDivElement>(null);
  const headerContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const headerContainer = headerContainerRef.current;
      const headerContent = headerContentRef.current;

      if (!headerContainer || !headerContent) return;

      if (window.scrollY > 0) {
        headerContainer.classList.add("header-scrolled");
        headerContainer.style.backgroundColor = "white";
        headerContainer.style.boxShadow = "0 0 8px 0 var(--lighter-gray)";
        headerContent.style.height = "80px";
      } else {
        headerContainer.classList.remove("header-scrolled");
        headerContainer.style.backgroundColor = "transparent";
        headerContainer.style.boxShadow = "none";
        headerContent.style.height = "100px";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div
        className={clsx(
          "header-container",
          pathname !== "/" && "header-container-scrolled"
        )}
        ref={headerContainerRef}
      >
        <div
          className="header-content d-flex justify-between items-center"
          ref={headerContentRef}
        >
          <h1>
            <a
              className="logo-content d-flex items-center"
              id="homepage-link"
              href="/"
            >
              <IconWrapper iconClass="icon-cloth" />
              <span>E-Shop</span>
            </a>
          </h1>

          <nav className="navigation-container">
            <ul className="navigation-list d-flex items-center">
              {navigationListItems.map((item, index) => (
                <li className="navigation-item" key={index}>
                  <a className="navigation-item-text" href={item?.href}>
                    {item?.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="action-list d-flex items-center">
            {headerActionListItems.map((action) => (
              <li className="action-item" key={action?.id}>
                <NavigateButton
                  label={
                    <IconWrapper
                      iconClass={clsx("header-icon", action?.iconClass)}
                    />
                  }
                  href={action?.href}
                />

                {action?.id === "cart" && !!cart?.length && (
                  <span className="cart-status d-flex justify-center items-center">
                    <p className="cart-status-content">{cart?.length}</p>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
