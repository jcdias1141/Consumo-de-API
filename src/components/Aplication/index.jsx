import { useEffect, useState } from "react";
import { CardCaracter } from "../CardCaracter";
import { ContainerApp, HeaderApp, ContentCharacters, Loader } from "./styles";

import axios from "axios";

import IconLoader from "../../assets/loader.gif";

export function Aplication() {
    
  const [characters, setcharacters] = useState([]);

  const [page, setPage] = useState(1);

  const [countPages, setcountPages] = useState("");

  const [qtdCharacters, setQtdCharacters] = useState("");

  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => {
        const array = [...characters, ...response.data.results];
        setcharacters(array);
        setcountPages(response.data.info.pages);
        setQtdCharacters(response.data.info.count);
        setIsLoader(false);
      });
  }, [page]);

  return (
    <>
      {isLoader && (
        <Loader>
          <img src={IconLoader} alt="" />
        </Loader>
      )}

      <ContainerApp>
        <HeaderApp>
          <h1>Ricky and morty</h1>
          <span>N° de personagens: {qtdCharacters}</span>
        </HeaderApp>
        <ContentCharacters>
          <div>
            {characters &&
              characters.map(({ image, name, genre, specie }) => {
                return (
                  <CardCaracter
                    image={image}
                    name={name}
                    genre={genre}
                    specie={specie}
                  />
                );
              })}
          </div>
          {!(page == countPages) && (
            <button onClick={() => setPage(page + 1)}>Carregar mais</button>
          )}
        </ContentCharacters>
      </ContainerApp>
    </>
  );
}
