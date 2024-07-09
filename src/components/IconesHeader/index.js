import perfil from "../../images/perfil.svg";
import sacola from "../../images/sacola.svg";
import styled from "styled-components";

const IconesContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const Icone = styled.li`
  width: 25px;
  
`;

const icones = [perfil, sacola];

function IconesHeader() {
  return (
    <IconesContainer>
      {icones.map((icone) => (
        <Icone>
          <img src={icone} alt="icones" />
        </Icone>
      ))}
    </IconesContainer>
  );
}

export default IconesHeader;
