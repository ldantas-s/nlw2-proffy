import React from 'react';
// Components
import HeaderProffy from '../../components/HeaderProffy';
import FormFieldProffy from '../../components/FormFieldProffy';
import CardProffy from '../../components/CardProffy';
import SelectProffy from '../../components/SelectProffy';
// Styles
import { SearchForm, MainList } from './style';


export default function TeacherList() {
    return (
        <>
            <HeaderProffy 
                title="Estes são os proffys disponíveis."
                // subTitle="O primeiro passo, é preencher esse formulário de inscrição."
                >
                <SearchForm>
                    <SelectProffy placeholder="" options="subjects" name="subject" label="Subject" />
                    <SelectProffy placeholder="" options="days" name="week_days" label="Week days" />
                    <FormFieldProffy type="time" name="schedule" label="Schedule" />
                </SearchForm>
            </HeaderProffy>

            <MainList>
                <CardProffy
                    teacherName="Luciano Dantas"
                    avatar="https://avatars3.githubusercontent.com/u/30561919?v=4"
                    whatsappNumber=""
                    bio="Full stack web developer and online instructor, specializiing in mostly JS, but also write Python, PHP and some other stuff."
                    subject="Programming"
                    costPerHour="80,00"
                ></CardProffy>

                <CardProffy
                    teacherName="Diego Oliveria"
                    avatar="https://pbs.twimg.com/profile_images/1270835693959417858/h8Ike1xO_400x400.jpg"
                    whatsappNumber=""
                    bio="Full stack web developer and online instructor, specializiing in mostly JS, but also write Python, PHP and some other stuff."
                    subject="Programming"
                    costPerHour="200,00"
                ></CardProffy>

                <CardProffy
                    teacherName="Beatriz Paes"
                    avatar="https://pbs.twimg.com/profile_images/1288826166409863174/LU1v0SuT_400x400.jpg"
                    whatsappNumber=""
                    bio="Full stack web developer and online instructor, specializiing in mostly JS, but also write Python, PHP and some other stuff."
                    subject="Programming"
                    costPerHour="200,00"
                ></CardProffy>
            </MainList>
        </>
    );
}