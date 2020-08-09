import styled from 'styled-components';

// Images
import logoProffy from '../../assets/images/logo.svg'


export const HeaderStyle = styled.header`
    width: 100%;
    height: auto;
    min-height: 30vh;
    background-color: var(--color-primary);
`;
HeaderStyle.Nav = styled.nav`
    padding: 2vh 10vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
HeaderStyle.Logo = styled.img.attrs({ src: logoProffy, alt: 'Logo Proffy'})`
    width: 6rem;
`;
HeaderStyle.Back = styled.a``;

HeaderStyle.Wrapper = styled.div`
    padding: 2rem 11%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    @media(min-width: 768px) {
        & {
            padding: 2rem 20%;
        }
        & > h1,
        & > p {
            width: 30rem;
        }
    }
`;
HeaderStyle.Title = styled.h1`
    margin: 1.5rem 0;
    font-size: 3rem;
    font-weight: 700;
    line-height: 4rem;
`;
HeaderStyle.SubTitle = styled.p`
    margin: 1.5rem 0;
    font-size: 1.5rem;
`;
