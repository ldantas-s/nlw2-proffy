import React from 'react';
// Components
import HeaderProffy from '../../components/HeaderProffy';
import FormFieldProffy from '../../components/FormFieldProffy';
// Styles
import { TeacherMain, FormStyle } from './style';

export default function TeacherForm() {
    return (
        <>
            <HeaderProffy
                title="Que incrível que você quer dar aulas"
                subTitle="O primeir passo, é preencher esse formulário de inscrição"
            >
            </HeaderProffy>

            <TeacherMain>

                <FormStyle>
                    <FormStyle.Fieldset>
                        <FormStyle.Legend>Your Datas</FormStyle.Legend>

                        <FormFieldProffy label="Full Name" />
                        <FormFieldProffy label="Avatar url" />
                        <FormFieldProffy label="Whatsapp" />
                        <FormFieldProffy label="biography" />

                    </FormStyle.Fieldset>
                </FormStyle>
                
            </TeacherMain>
        </>
    );
}