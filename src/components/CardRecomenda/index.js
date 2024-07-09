import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 30px;
  margin: 80px 0;

  img {
    width: 250px;
    height: 380px;
  }
`;

const SectionOne = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  

  h3 {
    color: #ba8b02;
    font-size: 25px;
    margin-top: 0;
  }

  button {
    background-color: #ba8b02;
    padding: 20px;
    width: 100%;
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
  }
`;

const SectionTwo = styled.div`
      margin-bottom: 50px;
`;

function CardRecomenda({ titulo, subtitulo, descricao, imagem }) {
  return (
    <CardContainer>
      <SectionOne>
        <SectionTwo>
          <h3>{titulo}</h3>
          <h4>{subtitulo}</h4>
          <p>{descricao}</p>
        </SectionTwo>
          <button>Saiba mais</button>
      </SectionOne>
      <img src={imagem} alt="" />
    </CardContainer>
  );
}

export default CardRecomenda;
