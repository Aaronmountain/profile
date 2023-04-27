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
      <input ref={menuRef} type="checkbox" id="rwdmenu" />
      <label htmlFor="rwdmenu" className="menu">
        <Image
          src="/layout/menu.svg"
          alt="rwd menu bar"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </label>
      <header className={cx({ home: isHomeRoute, introduction: !isHomeRoute })}>
        <Link href="/home">
          <a className="logo">My WebSite</a>
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
                <Link href={href}>
                  <a
                    className="contact__item__link"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      src={`/common/${imgName}.svg`}
                      alt={imgName}
                      objectFit="cover"
                      width="50%"
                      height="50%"
                    />
                    <span style={{ marginLeft: "0.25rem" }}>{title}</span>
                  </a>
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
