import styled from "styled-components";
import theme from "../Theme";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";

const FooterContainer = styled.footer`
  background: ${theme.colours.plum};

  .footer--inner {
    padding: 30px 10px 0px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${theme.mediaQuery.sm`
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    `}
    position: relative;
  }
  .footer-menu {
    text-align: center;
    ${theme.mediaQuery.sm`
   
    text-align: left;
    `}
    a {
      font-family: ${theme.type.body};
      color: ${theme.colours.clay};
      font-size: 32px;
    }
  }
  h3 {
    color: ${theme.colours.clay};
    margin-top: 30px;
    text-align: center;
    font-size: 18px;
    border-top: 1px solid ${theme.colours.clay};
    width: 80%;
    margin: 30px auto 0;
    padding-bottom: 10px;
  }
  .footer-logo {
    margin: 0 auto;

    width: 70%;
    ${theme.mediaQuery.sm`
  
    width: 30%;
    `}
  }
  .footer-contact {
    .footer-contact--text {
      ${theme.mediaQuery.sm`
     
      position: absolute;
      top: 20px;
      right: 20px;
      `}
    }
    p {
      color: ${theme.colours.clay};
      text-align: right;
      font-size: 32px;
      line-height: 32px;
      margin: 10px 0;
    }
    .footer-images {
      text-align: center;
      img {
        width: 130px;
        margin: 10px;
      }
    }
  }
`;

export default function Footer({ footerData }) {
  const menuItems = [
    {
      label: "Home",
      link: "home",
    },
    {
      label: "About",
      link: "about",
    },
    {
      label: "Retreats",
      link: "services/retreats",
    },
    {
      label: "Counselling",
      link: "services/counselling",
    },
    {
      label: "Teachings",
      link: "services/teachings",
    },
    {
      label: "Modalities",
      link: "modalities",
    },
    {
      label: "Book Now",
      link: "booknow",
    },
  ];

  const year = new Date().toLocaleDateString("en-US", {
    year: "numeric",
  });

  return (
    <FooterContainer>
      <div className="footer--inner">
        <div className="footer-menu">
          <ul>
            {menuItems.map((menuItem, index) => {
              return (
                <li key={index}>
                  <Link href={`/${menuItem.link}`}>
                    <a>{menuItem.label}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-logo">
          <img
            src={footerData.data.footerLogo.url}
            alt={footerData.data.footerLogo.alt}
          />
        </div>
        <div className="footer-contact">
          <div className="footer-contact--text">
            <PrismicRichText field={footerData.data.phoneNumber} />
            <PrismicRichText field={footerData.data.email} />
            <PrismicRichText field={footerData.data.certificationText} />
          </div>

          <div className="footer-images">
            <img
              src={footerData.data.imageOne.url}
              alt={footerData.data.imageOne.alt}
            />
            <img
              src={footerData.data.imageTwo.url}
              alt={footerData.data.imageTwo.alt}
            />
          </div>
        </div>
      </div>
      <h3>&copy;{year}</h3>
    </FooterContainer>
  );
}
