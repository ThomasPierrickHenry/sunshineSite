import { NavLink } from "react-router-dom";
import { ContainerList } from "./List.styles";

type Props = {
    contenu: string
    link?: string
}

export const ListItem = ({contenu, link }: Props) => {
    return <ContainerList>
                <nav>
                    <NavLink to={link ? link : "/"} end>
                        {contenu}
                    </NavLink>
                </nav>
            </ContainerList>;
};