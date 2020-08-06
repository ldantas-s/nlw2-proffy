import styled from 'styled-components';


export const MainHome = styled.main`
    width: 100%;
    height: 100vh;
    padding: 5.2rem;
    background-color: var(--color-primary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
MainHome.Icon = styled.img`
    padding: 10px;
`;

export const BlockContent = styled.div`
    /* display: flex; */
`;
BlockContent.SubTitle = styled.h2`
    font-size: 1.7rem;
    text-align: center;
    width: 100%;
    padding: 1.2rem;
    color: var(--color-title-in-primary);
`;
BlockContent.Logo = styled.img`
    width: 100%;
`;
BlockContent.Content = styled.div``;

BlockContent.Landing = styled.img`
    width: 100%;
`;