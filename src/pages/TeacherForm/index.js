import React from 'react';
// Components
import HeaderProffy from '../../components/HeaderProffy';
import FormFieldProffy from '../../components/FormFieldProffy';
// Styles
import { TeacherMain, FormStyle } from './style';
import SelectProffy from '../../components/SelectProffy';

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
                        <FormStyle.Legend>Yours data</FormStyle.Legend>

                        <FormFieldProffy label="Full Name" />
                        <FormFieldProffy label="Avatar url" />
                        <FormFieldProffy label="Whatsapp" />
                        <FormFieldProffy type="textarea" label="biography" />

                    </FormStyle.Fieldset>

                    <FormStyle.Fieldset>
                        <FormStyle.Legend>About class</FormStyle.Legend>

                        <SelectProffy label="Subject" />
                        <FormFieldProffy label="Cost class per hour" />

                    </FormStyle.Fieldset>
                </FormStyle>
                
            </TeacherMain>
        </>
    );
}