import styled from "styled-components";
import Image from 'next/image';
import Image1 from "../Main/Imagenes/qr.jpg";



const ContenedorPrincipal = styled.div`
 
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px;
  transition: transform 0.3s, background-color 0.3s;
  cursor: pointer;

`;

const Card = styled.div`
   background-color: #dce7f7;
    color: #1f2937;
  margin: auto;
  height: 40%;
  width: 30%;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  padding-top: 40px;
  border-radius: 10px;

`;

const Titulo = styled.h2`
padding-top: 10px;
margin-top: 20px;/*Sacar*/ 
height: 50px;
font-weight: bolder;
font-size: 22px;
justify-content: center;
  background-color: #436493;
    color: #ffffff;
    text-align: center;
`;

const Subtitulo = styled.div`
   font-weight: bolder;
  font-size: 30px;
`;

const ContenedorImagen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px; /* Puedes ajustar el margen según tus preferencias */
`;

const ContenedorTexto = styled.div`
 font-size: 20px;
 margin: 15px;
`;
const Espacio = styled.p`
 margin: 15px;
`;

const Boton = styled.button`
  box-sizing: border-box;
  color: #1256b7;
  background-color: #ffffff; /* Puedes cambiar el color de fondo según tus preferencias */
  border: 2px solid #1256b7;
  border-radius: 5px;
  padding: 5px;
  width: 80px;
  margin-top: 10px;
`;


function Descarga() {
  return (
    <div className="lista">
      <Titulo>Elegí alguna de estas opciones para abrir tu cuenta desde tu celular</Titulo>

      <ContenedorPrincipal>
        <Card>
          <Subtitulo>Escanear código QR</Subtitulo>         
          <ContenedorTexto>Abrí la cámara de tu teléfono, ubicá el código en el centro, y seguí los pasos.</ContenedorTexto>
          <ContenedorImagen>
            <Image
              src={Image1}
              alt="Descripción de la imagen"
              width={300} // ajusta el ancho según tus necesidades
              height={220} // ajusta la altura según tus necesidades
            />
          </ContenedorImagen>
        </Card>

        <Card>
          <Subtitulo>Mensaje SMS</Subtitulo>
          
          <ContenedorTexto>
            <input type="radio" id="sms" name="contacto" value="sms"/>
            <label for="sms">SMS</label>
            <label for="sms">  ó  </label>
            <input type="radio" id="email" name="contacto" value="email"/>
            <label for="email">Email</label>
            <Espacio/>           
            <p>Dejanos tu teléfono y te enviaremos un link para continuar desde tu celular</p>
            <Espacio/>       
            <label for="codigoArea">Cód. Área: </label>
            <input type="text" id="codigoArea" name="codigoArea" placeholder="Área"/>
            <Espacio/> 
            <label for="numeroCelular">Número de celular: </label>
            <input type="text" id="numeroCelular" name="numeroCelular" placeholder="Celular"/>
            <Espacio/>       
            <label for="empresa">Empresa: </label>
            <select id="empresa" name="empresa">
              <option value="claro">Claro</option>
              <option value="movistar">Movistar</option>
              <option value="personal">Personal</option>
              <option value="tuenti">Tuenti</option>
            </select>
            <Espacio/>       
            <input type="checkbox" id="aceptarCondiciones" name="aceptarCondiciones"/>
            <label for="aceptarCondiciones"> Aceptar términos y condiciones</label>
            <Espacio/>       
            <Boton>Enviar</Boton>  
          </ContenedorTexto>         
        </Card>

        </ContenedorPrincipal>
    </div>
    
    
  
   
  );
}

export default Descarga;
