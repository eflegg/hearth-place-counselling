import styled from "styled-components";
import theme from "../Theme";
import Link from "next/link";
import { PrismicRichText, PrismicLink, PrismicText } from "@prismicio/react";

const FooterContainer = styled.footer`
  background: ${theme.colours.plum};

  .footer--inner {
    min-height: 460px;
    @media (min-width: 789px) {
      min-height: 400px;
    }
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
      transition: 0.25s all ease-in-out;
      &:hover {
        border-bottom: 1px solid ${theme.colours.clay};
        transition: 0.25s all ease-in-out;
      }
    }
  }
  h3 {
    color: ${theme.colours.clay};
    font-family: ${theme.type.body};
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
      text-align: center;
      ${theme.mediaQuery.sm`
        font-size: 32px;
        text-align: right;
      `}
      font-size: 24px;

      line-height: 32px;
      margin: 10px 0;
    }
    a.sx-verified-seal {
      margin: 0 auto;
      ${theme.mediaQuery.sm`
      margin-right: 0px;
      margin-left: auto;
    `}
    }
    .footer-images {
      text-align: center;
      img {
        width: 130px;
        margin: 10px;
      }
    }
    .cert-logos {
      display: flex;
      flex-direction: column;
      align-items: center;
      ${theme.mediaQuery.sm`
     flex-direction: row;
    
    `}
      .ccc-logo {
        width: 125px;
      }
    }
  }
`;

export default function Footer({ footerData, menu }) {
  const year = new Date().toLocaleDateString("en-US", {
    year: "numeric",
  });

  return (
    <FooterContainer>
      <div className="footer--inner">
        <div className="footer-menu">
          <ul>
            {menu.data.menuLinks.map((menuLink, index) => {
              return (
                <>
                  <li key={index}>
                    <PrismicLink field={menuLink.link}>
                      <PrismicText field={menuLink.linkLabel} />
                    </PrismicLink>
                  </li>
                </>
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
            <a href="tel:2365083200">
              <PrismicRichText field={footerData.data.phoneNumber} />
            </a>
            <a href="mailto:dean@hearthplace.ca">
              <PrismicRichText field={footerData.data.email} />
            </a>
            <PrismicRichText field={footerData.data.certificationText} />
            <div className="position-relative cert-logos">
              <a
                href="https://www.psychologytoday.com/profile/1019467"
                className="sx-verified-seal"
                target="_blank"
              ></a>
              <script
                type="text/javascript"
                src="https://member.psychologytoday.com/verified-seal.js"
                data-badge="13"
                data-id="1019467"
                data-code="aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy9bQkFER0VdL3Byb2ZpbGUvW1BST0ZJTEVfSURdP2NhbGxiYWNrPXN4Y2FsbGJhY2s="
              ></script>

              {/* <img
                className="psych-today--logo"
                src={footerData.data.psychToday.url}
                alt={footerData.data.psychToday.alt}
              /> */}

              <img
                className="ccc-logo"
                src={footerData.data.canCertCounsellor.url}
                alt={footerData.data.canCertCounsellor.alt}
              />
            </div>
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
