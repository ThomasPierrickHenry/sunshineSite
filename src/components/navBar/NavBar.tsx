import { ListItem } from "./List";
import {Container, NavBarUl} from "./NavBar.styles";


export const NavBar = () => {
    return (
        <Container>
            <nav>
                <NavBarUl>
                    <ListItem contenu="Accueil" link=""></ListItem>
                    <ListItem contenu="Présentation" link="aboutUs"></ListItem>
                    <ListItem contenu="Nos Liens" link=""></ListItem>
                    <ListItem contenu="Contact" link=""></ListItem>
                </NavBarUl>
            </nav>
        </Container>
    );
}

