import React from 'react';
// Components
import HeaderProffy from '../../components/HeaderProffy';
import FormFieldProffy from '../../components/FormFieldProffy';
import ButtonProffy from '../../components/ButtonProffy';
// Styles
import { TeacherMain, FormStyle, TeacherFooter } from './style';
import SelectProffy from '../../components/SelectProffy';
// Images
import warning from '../../assets/images/icons/warning.svg';


export default function TeacherForm() {

    const subjects = [
        { value: 'math', label: 'Math' },
        { value: 'portugese', label: 'Portugese' },
        { value: 'english', label: 'English' }
    ];
    const days = [
        { value: '0', label: 'Sunday' },
        { value: '1', label: 'Monday' },
        { value: '2', label: 'Tuesday' },
        { value: '3', label: 'Wednesday' },
        { value: '4', label: 'Thursday' },
        { value: '5', label: 'Friday' },
        { value: '6', label: 'Sartuday' },
    ];

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
                        <FormFieldProffy type="textarea" label="Biography" />

                    </FormStyle.Fieldset>

                    <FormStyle.Fieldset>
                        <FormStyle.Legend>About class</FormStyle.Legend>

                        <SelectProffy options={subjects} label="Subject" placeholder="Select which you want to teach" />
                        <FormFieldProffy label="Cost class per hour" />

                    </FormStyle.Fieldset>

                    <FormStyle.Fieldset>
                        <FormStyle.Legend>
                            <p>
                                Available times
                                <FormStyle.NewSchedule>+ New Schedule</FormStyle.NewSchedule>
                            </p>
                        </FormStyle.Legend>

                        <FormStyle.ScheduleItem>
                            <SelectProffy options={days} label="Week days" placeholder="Select day" />
                            <FormFieldProffy type="time" label="From" />
                            <FormFieldProffy type="time" label="To" />
                        </FormStyle.ScheduleItem>

                    </FormStyle.Fieldset>

                    <TeacherFooter>
                        <TeacherFooter.Warning>
                            <TeacherFooter.IconWarning src={warning} alt="Icon warning" />
                            <TeacherFooter.MessageWarning>
                                Important!<br/> Fill all of fields
                            </TeacherFooter.MessageWarning>
                        </TeacherFooter.Warning>
                        <ButtonProffy>Save Resgister</ButtonProffy>
                    </TeacherFooter>
                </FormStyle>


                
            </TeacherMain>
        </>
    );
}