import Logo from "../Logo/index.js";
import OpcoesHeader from "../OpcoesHeader/index.js";
import IconesHeader from "../IconesHeader/index.js";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #171D1C;
  display: flex;
  justify-content: center;
  color: #fff;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;
