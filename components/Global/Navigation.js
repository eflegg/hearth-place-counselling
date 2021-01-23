import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import theme from "../Theme";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { Spring, config } from "react-spring/renderprops.cjs";
import ActiveLink from "./ActiveLink";

const MobileNav = styled.div`
  .nav-active {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    height: 100vh;
    width: 110vw;
    background-color: ${theme.colours.yellow};
    ul {
      margin-top: 50px;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .nav-link__mobile {
        a {
          color: white;
          font-size: 30px;
          margin-top: 20px;
          line-height: 80px;
        }
      }
    }
  }
  .btn-nav {
    &:focus {
      outline: none;
    }
    height: 50px;
    width: 50px;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: transparent;
    border: 0px;
    position: absolute;
    top: 5px;
    right: 25px;
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
  position: absolute;
  transform: translateY(105%);

  z-index: 1;
  ul {
    display: flex;
    justify-content: flex-end;
    li {
      list-style: none;
      margin-right: 30px;
      a {
        color: ${theme.colours.blue};
        &.active:after {
          content: "";
          display: block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin: 0 auto;
          background-color: ${theme.colours.blue};
          position: relative;
          top: 8px;
        }
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
          {/* <ul>
            <li>
              <ActiveLink activeClassName="active" href="/about">
                <a>About</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName="active" href="/blog">
                <a>Blog</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/services" activeClassName="active">
                Services
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName="active" href="/contact">
                <a>Contact</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName="active" href="/">
                <a>Home</a>
              </ActiveLink>
            </li>
          </ul> */}
          <ul className="nav">
            <li>
              <ActiveLink activeClassName="active" href="/">
                <a className="nav-link">Home</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName="active" href="/about">
                <a className="nav-link">About</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName="active" href="/services">
                <a className="nav-link">Services</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName="active" href="/blog">
                <a className="nav-link">Blog</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName="active" href="/contact">
                <a className="nav-link">Contact</a>
              </ActiveLink>
            </li>
          </ul>
        </DesktopNav>
      ) : (
        <MobileNav className="mobile-nav" style={props}>
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
              <Spring
                from={{ width: "0vw", height: "0vh" }}
                to={{ width: "100vw", height: "100vh" }}
              >
                {(props) => (
                  <nav
                    style={props}
                    id="navMenu"
                    className={`${
                      props.className ? props.className : ""
                    }  nav-active`}
                  >
                    <ul>
                      <li
                        className="nav-link__mobile"
                        onClick={() => {
                          toggleNav(false);
                        }}
                      >
                        <Link href="/about">
                          <a>About</a>
                        </Link>
                      </li>
                      <li
                        className="nav-link__mobile"
                        onClick={() => {
                          toggleNav(false);
                        }}
                      >
                        <Link href="/blog">
                          <a>Blog</a>
                        </Link>
                      </li>
                      <li
                        className="nav-link__mobile"
                        onClick={() => {
                          toggleNav(false);
                        }}
                      >
                        <Link href="/services" activeClassName="active">
                          Services
                        </Link>
                      </li>
                      <li
                        className="nav-link__mobile"
                        onClick={() => {
                          toggleNav(false);
                        }}
                      >
                        <Link href="/contact">
                          <a>Contact</a>
                        </Link>
                      </li>
                      <li
                        className="nav-link__mobile"
                        onClick={() => {
                          toggleNav(false);
                        }}
                      >
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                )}
              </Spring>
            </>
          ) : null}
        </MobileNav>
      )}
    </>
  );
}
