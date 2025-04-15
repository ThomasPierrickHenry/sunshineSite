import { Container } from "./Header.styles";
import {NavBar} from "../navBar/NavBar";
import { Icone } from "../icone/Icone";
import { ButtonConnect } from "components/contactDropdown/ContactDropdown";

export default function Header() {
    return (
        <Container>
            <Icone/>
            <NavBar/>
            <ButtonConnect/>
        </Container>
    );
}