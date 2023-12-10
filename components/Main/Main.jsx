import styled from "styled-components";
import Contacto from "./Contacto";


const Contenedor = styled.div`
    display: flex;
    justify-content: space-between; /* Ajusta el espaciado entre los elementos según tus preferencias */
    width: 100%;
    margin: auto;
  `;
  const Ayuda = styled.div`
    width: 50%;
    text-align: center;
    justify-content: center;
    background-color: #1f2937;
    color: white;
    margin: auto;
    display: flex;
    flex-direction: column;
    height: 120px;
  `;
  const Descarga = styled.div`
    width: 50%;
    text-align: center;
    justify-content: center;
    background-color: #1f2937;
    color: white;
    margin: auto;
    display: flex;
    flex-direction: column;
    border-left: solid 1px white;
    height: 120px;
  `;

  const Boton = styled.button`
    box-sizing: border-box;
    color: #1256b7;
  `;

 
function Main() {
  
  return (
    <Contenedor>      
      <Ayuda>
        <p>¿NECESITAS AYUDA?</p>
        <Boton>
          <a href="#">Haz Click Aquí</a>
        </Boton>
      </Ayuda>

      <Descarga>
        <p>DESCARGA TECHBANK EN TU CELULAR</p>
        <Boton>
          <a href="#">Descargar</a>
        </Boton>
      </Descarga>  
      <Contacto/>
    </Contenedor>

    
  );
}

export default Main;
