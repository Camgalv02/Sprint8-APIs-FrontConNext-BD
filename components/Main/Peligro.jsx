import React from 'react';
import styled from "styled-components";
import Image from 'next/image';
import ImagePeligro from "../Main/Imagenes/carrousel2.png";


const ImagenCarrousel2 = styled(Image)`
  width: 70%;
`;

const ContenedorImagen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px; /* Puedes ajustar el margen según tus preferencias */
`;

function Peligro() {
  return (
    <>
     <ContenedorImagen>
            <ImagenCarrousel2
              src={ImagePeligro}
            />
          </ContenedorImagen>
    </>
  );
}

export default Peligro