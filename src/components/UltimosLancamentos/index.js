import { livros } from "./dadosUltimosLancamentos";
import styled from "styled-components";
import { Titulo } from "../Titulo/index.js";
import CardRecomenda from "../CardRecomenda/index.js";
import ImagemLivro from "../../images/livro4.jpg";

const LancamentosContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
 
`;

const AcervoContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 100px;
    cursor: pointer;
    margin-top: 30px;

    img {
        width: 200px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transition: transform 100ms ease-in-out;
    }

    img:hover {
      transform: scale(1.10);
      
    }
`;


function UltimosLancamentos() {
  return (
    <LancamentosContainer>
      <Titulo 
      cor="#BA8B02"
      tamanhoFonte="36px"
      >ULTIMOS LANÇAMENTOS</Titulo>
      <AcervoContainer>
        {livros.map((livro) => (
          <img src={livro.imagem} alt="11" />
        ))}
      </AcervoContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por"
        subtitulo="Harry Potter e a Ordem da Fênix"
        descricao="Harry não é mais um garoto. Aos 15 anos, continua sofrendo a rejeição dos Dursdley, sua estranha família no mundo dos \'trouxas\'. Também continua contando com Rony Weasley e Hermione Granger, seus melhores amigos em Hogwarts, para levar adiante suas investigações e aventuras. Mas o bruxinho começa a sentir e descobrir coisas novas, como o primeiro amor e a sexualidade. Nos volumes anteriores, J. K. Rowling mostrou como Harry foi transformado em celebridade no mundo da magia por ter derrotado, ainda bebê, Voldemort, o todo-poderoso bruxo das trevas que assassinou seus pais. Neste quinto livro da saga, o protagonista, numa crise típica da adolescência, tem ataques de mau humor com a perseguição da imprensa, que o segue por todos os lugares e chega a inventar declarações que nunca deu. Harry vai enfrentar as investidas de Voldemort sem a proteção de Dumbledore, já que o diretor de Hogwarts é afastado da escola. E vai ser sem a ajuda de seu protetor que o jovem herói enfrentará descobertas sobre a personalidade controversa de seu pai, Tiago Potter, e a morte de alguém muito próximo."
        imagem={ImagemLivro}
      
      />
    </LancamentosContainer>
  );
}

export default UltimosLancamentos;
