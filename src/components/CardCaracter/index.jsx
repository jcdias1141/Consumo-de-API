import { ContainerCard } from "./styles";

export function CardCaracter({ image, name, genre, specie }) {
    return(
        <>
            <ContainerCard>
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="info">
                    <h3>{name}</h3>
                    <ul>
                        <li>Genero:{genre}</li>
                        <li>Especie:{specie}</li>
                    </ul>
                </div>
            </ContainerCard>
        </>
    )
}