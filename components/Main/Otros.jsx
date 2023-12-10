import styled from "styled-components";
import Image from 'next/image';
import Image1 from "../Main/Imagenes/tarjeta1.PNG";
import Image2 from "../Main/Imagenes/tarjeta2.PNG";
import Image3 from "../Main/Imagenes/tarjeta3.PNG";


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
  background-color: #bfd4f2;
    color: #1f2937;
    text-align: center;
`;

const Subtitulo = styled.div`
   font-weight: bolder;
  font-size: 30px;
`;

const Boton = styled.button`
  box-sizing: border-box;
  color: #1256b7;
  background-color: #ffffff; /* Puedes cambiar el color de fondo según tus preferencias */
  border: 2px solid #1256b7;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
`;
const ContenedorImagen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px; /* Puedes ajustar el margen según tus preferencias */
`;
const ImagenRedonda = styled(Image)`
  border-radius: 50%;
`;


function Destacados() {
  return (
    <div className="lista">
      <Titulo>Beneficios todos los dias</Titulo>

      <ContenedorPrincipal>
        <Card>
          <ContenedorImagen>
            <ImagenRedonda
              src={Image1}
              alt="Descripción de la imagen"
              width={300} // ajusta el ancho según tus necesidades
              height={220} // ajusta la altura según tus necesidades
            />
          </ContenedorImagen>
          <Subtitulo>Asegurate con TechBank</Subtitulo>
          <Subtitulo>y que tu preocupacion sea disfrutar</Subtitulo>
         
          <div className="texto">Conoce todas las coberturas que tenemos para vos.</div>
          <Boton>Conoce todos los seguros</Boton>
        </Card>

        <Card>
        <ContenedorImagen>
            <ImagenRedonda
              src={Image2}
              alt="Descripción de la imagen"
              width={300} // ajusta el ancho según tus necesidades
              height={220} // ajusta la altura según tus necesidades
              
            />
          </ContenedorImagen>
          <Subtitulo>Superfondos</Subtitulo>
          <Subtitulo>Inverti de la mano de los que saben</Subtitulo>
          <div className="texto">Conoce las alternativas de inversion y como operar.</div>
          <Boton>Invertí ahora</Boton>         
        </Card>

        <Card>
        <ContenedorImagen>
            <ImagenRedonda
              src={Image3}
              alt="Descripción de la imagen"
              width={300} // ajusta el ancho según tus necesidades
              height={220} // ajusta la altura según tus necesidades
              
            />
          </ContenedorImagen>
          <Subtitulo>¿Todavia no tenes tu cuenta?</Subtitulo>
          <Subtitulo>abrila de manera 100% digital</Subtitulo>
          <div className="texto">Conoce las operaciones para tus empleados y tu negocio.</div>
          <Boton>Conoce mas</Boton>         
        </Card>
        </ContenedorPrincipal>
    </div>
    
  
   
  );
}

export default Destacados;
