import Input from "../Input/index.js";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa.js";


const PesquisaContainer = styled.section`
  background-image: linear-gradient(to right, #000000, #171D1C);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 100vh;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #BA8B02;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const SubTitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;


const Resultado = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 50%;
    margin: 20px auto;
    padding: 30px;

    p {
      width: 200px;
    }

    img {
      width: 150px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      transition: transform 100ms ease-in-out;
    }

    img:hover {
      transform: scale(1.10);

    }
`;

function Pesquisa() {
  const [livrosPesquisados, setlivrosPesquisados] = useState([]);

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <SubTitulo>Encontre seu livro em nossa estante</SubTitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.includes(textoDigitado)
          );
          setlivrosPesquisados(resultadoPesquisa);
        }}
      />

      {livrosPesquisados.map((livro) => (
        <Resultado>
          <p>{livro.nome}</p>
          <img src={livro.imagem} alt="imagem do livro"/>
        </Resultado>
      ))}
    </PesquisaContainer>
  );
}

export default Pesquisa;
