import { styled} from 'theme'

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100px;
    align-items: center;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    font-size: 1.2rem;
    box-shadow: 2px 2px 9px 5px rgba(0,0,0,0.6);
    `
    
