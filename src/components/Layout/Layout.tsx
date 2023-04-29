import React, { useEffect, useRef } from "react";
import cx from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Nav, footerNav } from "constants/Nav";
import styles from "./Layout.styles";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const menuRef = useRef<HTMLInputElement>(null);
  const pathname = useRouter().pathname;
  const isHomeRoute = pathname === "/home";

  useEffect(() => {
    if (menuRef.current && menuRef.current.checked) {
      menuRef.current.checked = false;
    }
  }, [pathname]);

  return (
    <React.Fragment>
      <input id="rwdmenu" type="checkbox" ref={menuRef} />
      <label htmlFor="rwdmenu" className="menu">
        <Image
          src="/layout/menu.svg"
          alt="rwd menu bar"
          width="40"
          height="40"
        />
      </label>
      <header className={cx({ home: isHomeRoute, introduction: !isHomeRoute })}>
        <Link href="/home">
          <span className="logo">My WebSite</span>
        </Link>
        <ul className="navbar">
          {Nav.map(({ title, href }) => (
            <Link key={`__navbar__item__${title}`} href={href} passHref>
              <li className="navbar__item">
                <button
                  type="button"
                  className={cx("navbar__item__link", {
                    active: href === pathname,
                  })}
                  disabled={href === pathname}
                >
                  {title}
                </button>
              </li>
            </Link>
          ))}
        </ul>
      </header>
      <main className={cx({ "body-content": !isHomeRoute })}>{children}</main>
      {!isHomeRoute && (
        <footer className="footer">
          <ul className="contact">
            {footerNav.map(({ title, href, imgName }) => (
              <li key={`__footer__contact__${title}`} className="contact__item">
                <Link href={href} target="_blank" rel="noreferrer noopener">
                  <div className="contact__item__link">
                    <Image
                      src={`/common/${imgName}.svg`}
                      alt={imgName}
                      width="50"
                      height="50"
                    />
                    <span style={{ marginLeft: "0.25rem" }}>{title}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </footer>
      )}
      <style jsx>{styles}</style>
    </React.Fragment>
  );
};

export default Layout;
