import styled from "styled-components";
import Link from 'next/link';

const ContenedorPrincipal = styled.div`
 
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  transition: transform 0.3s, background-color 0.3s;
  cursor: pointer;
  flex-wrap: wrap;
  width: 700px;

  :hover{
    transform: scale(1.1);
  background-color: #1256b7;
  }
`;

const Card = styled.div`
   background-color: #1f2937;
   color: #ddd;
   margin: 15px;
  height: 150px;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  padding-top: 40px;
  border-radius: 10px;
  width: 160px;

  a{
  color: white;
  text-decoration: none;
}

`;

const Titulo = styled.h2`
padding-top: 10px;
margin-top: 20px;/*Sacar*/ 
height: 50px;
font-weight: bolder;
font-size: 22px;
justify-content: center;
  background-color: #1f2937;
    color: white;
    text-align: center;
`;


function ButtonBox() {
  return (
    <div className="lista">
      <Titulo>Elija una Operación:</Titulo>

      <ContenedorPrincipal>
        <Card>
        
          <a href='/misdatos'>VER MIS DATOS</a>
      
        </Card>

        <Card>
    
          <a href='/micuenta'>VER SALDO EN MI CUENTA</a>
    
        </Card>

        <Card>
 
          <a href='/prestamocliente'>VER MONTO DE PRESTAMOS PARA CLIENTES</a>

        </Card>

        <Card>

          <a href='/prestamosucursal'>VER MONTO DE PRESTAMOS EN UNA SUCURSAL</a>

        </Card> 

        <Card>

          <a href='/tarjetacliente'>VER TARJETAS ASOCIADAS A UN CLIENTE</a>

        </Card>

        <Card>
    
          <a href='/generarprestamo'>GENERAR SOLICITUD DE PRÉSTAMOS (CLIENTES)</a>
     
        </Card>

        <Card>

          <a href='/anularprestamo'>ANULAR SOLICITUD DE PRESTAMO DE CLIENTE</a>

        </Card> 

        <Card>

          <a href='/modificardireccion'>MODIFICAR DIRECCION DE UN CLIENTE</a>
        
        </Card>

        <Card>

          <a href='/versucursales'>VER TODAS LAS SUCURSALES</a>

        </Card> 


        </ContenedorPrincipal>
    </div>
   
  );
}

export default ButtonBox;
