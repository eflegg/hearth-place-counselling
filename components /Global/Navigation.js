import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import theme from "../Theme";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const MobileNav = styled.div`
  .btn-nav {
    height: 50px;
    width: 50px;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
      width: 50px;
      height: 5px;
      margin-bottom: 5px;
      margin-top: 5px;
      background: ${theme.colours.blue};
      z-index: 2;
    }
    .burger-2 {
      position: relative;
      left: 10px;
    }
    &.nav-close {
      .burger-1 {
        position: relative;
        transform: rotate(-45deg);
        top: 15px;
        transition: all 0.15s ease-in-out;
      }
      .burger-2 {
        position: relative;
        left: 150px;
        overflow: hidden;
        transition: all 0.15s ease-in-out;
      }
      .burger-3 {
        position: relative;
        top: -15px;
        transform: rotate(45deg);
        transition: all 0.15s ease-in-out;
      }
    }
    &.nav-open {
      .burger-1 {
        transform: rotate(0deg);

        transition: all 0.15s ease-in-out;
      }
      .burger-2 {
        left: 10px;
        overflow: hidden;
        transition: all 0.15s ease-in-out;
      }
      .burger-3 {
        transform: rotate(0deg);
        transition: all 0.15s ease-in-out;
      }
    }
  }
`;

const DesktopNav = styled.nav`
  ul {
    display: flex;
    justify-content: flex-end;
    li {
      list-style: none;
      margin-right: 30px;
      a {
        color: ${theme.colours.blue};
      }
    }
  }
`;

export default function Navigation(props) {
  const isDesktop = useMediaQuery({
    query: `(min-device-width: ${theme.breakpoints.md})`,
  });
  const [navActive, toggleNav] = useState(false);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {isDesktop ? (
        <DesktopNav>
          <ul>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/about" activeClassName="active">
                Work
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </DesktopNav>
      ) : (
        <MobileNav className="mobile-nav">
          <button
            className={`btn-nav ${navActive ? "nav-close" : "nav-open"}`}
            onClick={() => {
              toggleNav(!navActive);
            }}
          >
            <span className="burger-1"></span>
            <span className="burger-2"></span>
            <span className="burger-3"></span>
          </button>
          <button
            role="button"
            aria-controls="navMenu"
            style={{ display: "none" }}
            className="accessibility-close"
          >
            Close Nav
          </button>
          {navActive ? (
            <>
              <nav
                id="navMenu"
                className={`${
                  props.className ? props.className : ""
                }  nav-active`}
              >
                <ul>
                  <li
                    onClick={() => {
                      toggleNav(false);
                    }}
                  >
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      toggleNav(false);
                    }}
                  >
                    <Link href="/about">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      toggleNav(false);
                    }}
                  >
                    <Link href="/about" activeClassName="active">
                      Work
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      toggleNav(false);
                    }}
                  >
                    <Link href="/about">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </>
          ) : null}
        </MobileNav>
      )}
    </>
  );
}
