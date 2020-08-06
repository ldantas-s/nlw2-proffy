import styled from 'styled-components';


const ButtonProffy = styled.button`
    border: 0;
    border-radius: 8px;
    padding: 32px 64px;
    display: flex;
    align-items: center;
    font-weight: 700;
    color: var(--color-button-text);
    background-color: var(--color-primary-lighter);
    cursor: pointer;
    transition: background-color 100ms linear;
`;
ButtonProffy.Purple = styled(ButtonProffy)`
    &:hover {
        background-color: var(--color-primary-light);
        transition: background-color 100ms linear;
    }
`;
ButtonProffy.Green = styled(ButtonProffy)`
    background-color: var(--color-secundary);
    &:hover {
        background-color: var(--color-secundary-dark);
        transition: background-color 100ms linear;
    }
`;

export default ButtonProffy;