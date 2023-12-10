import React from 'react';
import styled from "styled-components";
import Image from 'next/image';
import ImageCarrousel1 from "../Main/Imagenes/carrousel3.png";


const ImagenCarrousel = styled(Image)`
  width: 100%;
`;


const Titulo = styled.div`
  padding-top: 10px;
  margin-top: 20px;
  height: 40px;
  //font-weight: bold;
  font-size: 16px;
  justify-content: center;
  background-color: #bad2f4;
  color: #1f2937;
  text-align: center;

`;

function Carroussel() {
  return (
    <>
     <Titulo> 
      DOLAR | Compra: $ 382,50 Venta: $ 400,50 - EURO | Compra: $ 411,50 Venta: $ 429,50
      *Las cotizaciones publicadas en el sitio institucional pueden poseer un atraso en su actualización de aproximadamente 15 minutos.
    </Titulo>

      <ImagenCarrousel
        src={ImageCarrousel1}
      />
    </>
  );
}

export default Carroussel