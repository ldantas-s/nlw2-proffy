import styled from 'styled-components';
// Components
import ButtonProffy from '../ButtonProffy';
// Images
import whatsapp from '../../assets/images/icons/whatsapp.svg';

export const CardWrapper = styled.article`
    margin: 2.5rem 0;
    padding-top: 2rem;
    border-radius: .5rem;
    border: 1px solid var(--color-line-in-white);
    box-shadow: 2px 2px 5px rgba(0,0,0,.2);
`;
export const CardHeader = styled.header`
    padding: 0 2rem;
    display: flex;
    align-items: center;
`;
CardHeader.Content = styled.div`
`;
CardHeader.Avatar = styled.img`
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    margin-right: 2rem;
`;
CardHeader.TeacherName = styled.h2`
    font-size: 2.4rem;
    font-weight: 700;
`;
CardHeader.Subject = styled.p``;

export const CardMain = styled.main`
    padding: 3rem 2rem;
    font-size: 1.7rem;
`;
export const CardFooter = styled.footer`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-top: 1px solid var(--color-line-in-white);
    & > ${ButtonProffy} {
        padding: 2rem 3rem;
        background: var(--color-secundary);
    }
    & > ${ButtonProffy}:hover {
        background: var(--color-secundary-dark);
        transition: background 100ms linear;
    }
    @media(min-width: 768px) {
        & {
            justify-content: space-between;
            align-items: center;
        }
    }
`;
CardFooter.IconWpp = styled.img.attrs({ src: whatsapp, alt: 'Icon whatsapp' })`
    margin-right: 2rem;
`;
CardFooter.CostPerHour = styled.p``;
CardFooter.ColorMoney = styled.span`
    color: var(--color-primary);
    font-weight: 700;
`;
