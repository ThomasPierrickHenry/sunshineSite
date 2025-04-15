import { styled } from 'theme'

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    font-size: 1.2rem;`
    
