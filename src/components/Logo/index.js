import logo from "../../images/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
  gap: 15px;
  text-align: center;

  strong {
    background: linear-gradient(135deg, #7a5d01, #d6aa3a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-family: "Lobster-Regular", sans-serif;
    color: #ffbf00;
    font-size: 40px;
  }
`;

function Logo() {
  return (
    <LogoContainer>
      <img src={logo} alt="logo do Alura Books" />
      <p>
        <strong>Page</strong>Journey
      </p>
    </LogoContainer>
  );
}

export default Logo;
