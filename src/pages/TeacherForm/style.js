import styled from 'styled-components';
// Components
import ButtonProffy from '../../components/ButtonProffy';
// Styçes
import { FormFieldWrapper } from '../../components/FormFieldProffy/style';


export const TeacherMain = styled.main`
    display: flex; 
    justify-content: center;
`;
export const FormStyle = styled.form`
    height: auto;
    padding-top: 2rem;
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
            width: 68rem;
        }
    }
`;
FormStyle.Fieldset = styled.fieldset`
    padding: 2rem 4rem 5rem;
    margin-bottom: 4rem;
    & input {
        box-shadow: none;
    }
`;
FormStyle.Legend = styled.legend`
    width: 100%;
    font-size: 1.8rem;

    padding: 2rem 0;
    border-bottom: 1px solid var(--color-line-in-white);
    & > p {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
FormStyle.NewSchedule = styled.button`
    border: none;
    background: none;
    padding: 1rem;
    color: var(--color-primary);
    font-weight: 700;
    cursor: pointer;
    &:hover {
        color: var(--color-primary-dark);
        transition: color 100ms linear;
    }
`;
FormStyle.ScheduleItem = styled.div`
    @media(min-width: 1024px) {
        & { 
            display: flex;
            justify-content: center
        }
        & > * {
            margin: .5rem;
        }
    & ${FormFieldWrapper}:first-child {
            flex: 5 0 300px;
        }
    }
`;

export const TeacherFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 2rem 4rem 5rem;
    border-radius: 0 0 .8rem .8rem;
    border-top: 1px solid var(--color-line-in-white);
    background: var(--color-input-background);
    & > ${ButtonProffy} {
        padding: 2rem 3rem;
        background: var(--color-secundary);
    }
    & > ${ButtonProffy}:hover {
        background: var(--color-secundary-dark);
        transition: background 100ms linear;
    }
`;
TeacherFooter.Warning = styled.div`
    display: flex;
    align-items: center;
`;
TeacherFooter.IconWarning = styled.img``;
TeacherFooter.MessageWarning = styled.p`
    color: var(--color-text-complement);
    padding-left: 2rem;
`;