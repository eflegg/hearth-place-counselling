import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import theme from "../Theme";
import Link from "next/link";
import { Spring, config } from "react-spring/renderprops.cjs";
import ActiveLink from "./ActiveLink";
import { PrismicLink, PrismicText } from "@prismicio/react";

const MobileNav = styled.nav`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 3;
  .menu-image {
    width: 400px;
    img {
      max-width: 100%;
    }
  }
  .nav-active {
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    align-items: center;
    ${theme.mediaQuery.sm`
    flex-direction: row;
    align-items: center;
    `}
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    min-height: 800px;
    height: 100vh;
    ${theme.mediaQuery.sm`
    height: 100vh;
    `}
    width: 100%;
    background-color: ${theme.colours.clay};
    ul {
      margin-top: 50px;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      ${theme.mediaQuery.sm`
      align-items: flex-start;
      `}
      .nav-link__mobile {
        a {
          color: ${theme.colours.campfire};
          font-family: ${theme.type.body};
          font-size: 24px;
          line-height: 45px;
          ${theme.mediaQuery.sm`
          font-size: 40px;
          line-height: 70px;
          `}
          font-weight: 400;
          transition: 0.25s all ease-in-out;
          &:hover {
            border-bottom: 1px solid ${theme.colours.gold};
            transition: 0.25s all ease-in-out;
          }
        }
      }
    }
  }
  .btn-nav {
    cursor: pointer;
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
    position: fixed;
    top: 18px;
    right: 15px;
    span {
      width: 35px;
      height: 5px;
      margin-bottom: 1px;
      border-radius: 3px;
      margin-top: 5px;
      background: ${theme.colours.gold};
      z-index: 2;
    }
    .burger-2 {
      position: relative;
    }
    &.nav-close {
      .burger-1 {
        position: relative;
        transform: rotate(-45deg);
        top: 8px;
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

export default function Navigation({ menuData }) {
  const [navActive, toggleNav] = useState(false);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

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
            <Spring from={{ width: "0vw" }} to={{ width: "100vw" }}>
              {(props) => (
                <nav
                  style={props}
                  id="navMenu"
                  className={`${
                    props.className ? props.className : ""
                  }  nav-active`}
                >
                  <div className="menu-image">
                    <img src="/Hearth-Place-moon-grass.png" alt="" />
                  </div>
                  <ul>
                    {menuData.data.menuLinks.map((menuLink, index) => {
                      return (
                        <li
                          key={index}
                          className="nav-link__mobile"
                          onClick={() => {
                            toggleNav(false);
                          }}
                        >
                          <PrismicLink
                            field={menuLink.link}
                            className="text-neutral-500"
                          >
                            <PrismicText field={menuLink.linkLabel} />
                          </PrismicLink>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              )}
            </Spring>
          </>
        ) : null}
      </MobileNav>
    </>
  );
}
