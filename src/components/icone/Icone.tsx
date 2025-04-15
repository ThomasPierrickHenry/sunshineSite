import { ContainerLogo, Logo }  from './Icone.styles';
import image from '../../assets/icone.png';


export const Icone = () => {
    return (
        <ContainerLogo>
            <Logo src={image} alt="Logo" />
        </ContainerLogo>
    );
}
