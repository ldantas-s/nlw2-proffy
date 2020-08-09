import styled from 'styled-components';
// Components-Style
import { FormFieldWrapper } from '../../components/FormFieldProffy/style';


export const SearchForm = styled.form`
    @media(min-width: 1024px) {
        & {
            display: flex;
        }
        & > ${FormFieldWrapper} {
            margin: 2rem .4rem -5rem;  
        }
    }
`;

export const MainList = styled.main`
    /* border: 1px solid red; */
    padding: 2rem 5%;
    height: 100vh;
    @media(min-width: 1024px) {
        & {
            padding: 2rem 15%;
        }
    }
`;