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
import purpleHeart from '../../assets/images/icons/purple-heart.svg';



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
            
            <BlockContent.Footer>
                <BlockContent.Buttons>
                    <ButtonProffy.Purple>
                        <MainHome.Icon src={study} atl="Icon Study" />Estudar
                    </ButtonProffy.Purple>
                    <ButtonProffy.Green>
                        <MainHome.Icon src={giveClasses} atl="Icon Give Classes" />Dar Aulas
                    </ButtonProffy.Green>
                </BlockContent.Buttons>

                <BlockContent.Text>
                    <span>
                        Total de 285 conexões já realizadas
                        <img src={purpleHeart} alt="Icon purple heart" />
                    </span>
                </BlockContent.Text>
            </BlockContent.Footer>

        </MainHome>
    );
}

export default Home;