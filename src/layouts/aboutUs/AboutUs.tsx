import { ReactElement } from "react";
import { Container } from "./AboutUs.styles";



export default function AboutUs(): ReactElement {
  return (
    <Container onClick={() => console.log("test")}>

      <h1>Présentation</h1>
      <p>Page de Présentation</p>

      
    </Container>
  );
}