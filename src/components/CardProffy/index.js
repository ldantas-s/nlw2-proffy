import React from 'react';

// Styles
import { CardWrapper, CardHeader, CardMain, CardFooter } from './style';
// Components
import ButtonProffy from '../../components/ButtonProffy';


export default function CardProffy({
    teacherName,
    avatar,
    whatsappNumber,
    bio,
    subject,
    costPerHour
}) {
    return (
        <CardWrapper>

            <CardHeader>
                <CardHeader.Avatar src={avatar} alt="Profile Photo" />
                <CardHeader.Content>
                    <CardHeader.TeacherName>{ teacherName }</CardHeader.TeacherName>
                    <CardHeader.Subject>{ subject }</CardHeader.Subject>
                </CardHeader.Content>
            </CardHeader>

            <CardMain>
                { bio }
            </CardMain>

            <CardFooter>
                <CardFooter.CostPerHour>Price/Hour:  <CardFooter.ColorMoney>R$ { costPerHour }</CardFooter.ColorMoney></CardFooter.CostPerHour>
                <ButtonProffy>
                    <CardFooter.IconWpp />
                    Entre em contato
                </ButtonProffy>
            </CardFooter>
            
        </CardWrapper>
    );
}