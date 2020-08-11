import React, { useState } from 'react';
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

    const [ scheduleItens, setScheduleItens ] = useState([
        { week_day: null, from: '', to: '' }
    ]);


    function newSchedule(event) {
        event.preventDefault();
        setScheduleItens([
            ...scheduleItens,
            { week_day: null, from: '', to: '' }
        ]);
    }

    

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

                        <SelectProffy options={'subjects'} label="Subject" placeholder="Select which you want to teach" />
                        <FormFieldProffy label="Cost class per hour" />

                    </FormStyle.Fieldset>

                    <FormStyle.Fieldset>
                        <FormStyle.Legend>
                            <p>
                                Available times
                                <FormStyle.NewSchedule onClick={newSchedule}>+ New Schedule</FormStyle.NewSchedule>
                            </p>
                        </FormStyle.Legend>

                        {scheduleItens.map((scheduleItem, index) => {
                            return (
                                <FormStyle.ScheduleItem key={scheduleItem.week_day+''+index}>
                                    <SelectProffy options={'days'} label="Week days" placeholder="Select day" />
                                    <FormFieldProffy type="time" label="From" />
                                    <FormFieldProffy type="time" label="To" />
                                </FormStyle.ScheduleItem>
                            );
                        })}

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