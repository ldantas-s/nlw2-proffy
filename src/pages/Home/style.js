import styled from 'styled-components';


export const MainHome = styled.main`
    width: 100%;
    height: 100vh;
    padding: 8rem;
    background-color: var(--color-primary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
MainHome.Icon = styled.img`
    width: 3rem;
    margin-right: 1rem;
`;
export const BlockContent = styled.section`
    width: 100%;
    padding: 0 0 5rem 0;
    @media(min-width: 768px) {
        & {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }        
        & > img {
            width: 70%;
            margin-left: 60px;
        }
    }
    @media(min-width: 1024px) {
        & > img {
            width: 50%;
        }
    }
`;
BlockContent.SubTitle = styled.h2`
    font-size: 2rem;
    text-align: center;
    width: 100%;
    padding: 1.2rem;
`;
BlockContent.Logo = styled.img`
    width: 100%;
`;
BlockContent.Footer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media(min-width: 768px) {
        & {
            flex-flow: row wrap;
            justify-content: center;
        }
    }
    @media(min-width: 1024px) {
        & { 
            flex-wrap: nowrap;
            justify-content: space-between;
        }
    }
`;
BlockContent.Content = styled.article`
    @media(min-width: 768px) {
        & {
            display: flex;
            flex-flow: column wrap;
            align-items: flex-start;
        }
    }
    
`;
BlockContent.Landing = styled.img`
    width: 100%;
`;
BlockContent.Buttons = styled.article`
    margin-bottom: 3rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;
BlockContent.Text = styled.p`
    font-size: 1.3rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    & img {
        margin-left: 0.5rem;
    }
`;