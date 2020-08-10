import styled from 'styled-components';
import { FormFieldWrapper } from '../../components/FormFieldProffy/style';


export const TeacherMain = styled.main`
    display: flex; 
    justify-content: center;
`;
export const FormStyle = styled.form`
    height: auto;
    padding: 2rem 4rem 5rem;
    margin-top: -3rem;
    border-radius: 0.8rem;
    background-color: var(--color-box-base);
    & textarea {
        resize: none;
        min-height: 15rem;
    }
    & ${FormFieldWrapper}:nth-child(5):focus-within::after {
        bottom: 3px;
    }
    @media(min-width: 768px) {
        & {
            margin-bottom: 4rem;
        }
    }
    @media(min-width: 1024px) {
        & {
            width: 65rem;
        }
    }
`;
FormStyle.Fieldset = styled.fieldset`
    & input {
        box-shadow: none;
    }
`;
FormStyle.Legend = styled.legend`
    width: 100%;
    font-size: 1.8rem;
    padding: 2rem 0;
    border-bottom: 1px solid var(--color-line-in-white);
`;
