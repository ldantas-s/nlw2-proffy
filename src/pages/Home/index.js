import React from 'react';

// Components
import ButtonProffy from '../../components/ButtonProffy';
// Styles
import { MainHome, BlockContent } from './style';
// Images
import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';
import study from '../../assets/images/icons/study.svg';
import giveClasses from '../../assets/images/icons/give-classes.svg';



function Home() {
    return (
        <MainHome>
            <BlockContent>
                <BlockContent.Content>
                    <BlockContent.Logo src={logo} alt="Proffy Logo"  />
                    <BlockContent.SubTitle>Sua plataforma de estudos online</BlockContent.SubTitle>
                </BlockContent.Content>

                <BlockContent.Landing src={landing} alt="Landing Image" />
            </BlockContent>
            

            <ButtonProffy.Purple>
                <MainHome.Icon src={study} atl="Icon Study" />Estudar
            </ButtonProffy.Purple>
            <ButtonProffy.Green>
                <MainHome.Icon src={giveClasses} atl="Icon Give Classes" />Dar Aulas
            </ButtonProffy.Green>
        </MainHome>
    );
}

export default Home;