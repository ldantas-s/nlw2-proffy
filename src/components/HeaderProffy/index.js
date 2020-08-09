import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { HeaderStyle } from "./style";
// Images 
import backIcon from '../../assets/images/icons/back.svg';

export default function HeaderProffy({ title, subTitle, children }) {
    return (
        <HeaderStyle>
            <HeaderStyle.Nav>
                <HeaderStyle.Back as={Link} to="/">
                    <img src={backIcon} alt="Icon Back Home" />
                </HeaderStyle.Back>
                <HeaderStyle.Logo />
            </HeaderStyle.Nav>

            <HeaderStyle.Wrapper>
                <HeaderStyle.Title>
                    { title }
                </HeaderStyle.Title>

                { subTitle && 
                    <HeaderStyle.SubTitle>
                        { subTitle }
                    </HeaderStyle.SubTitle>
                }
                
                { children }
            </HeaderStyle.Wrapper>


        </HeaderStyle>
    );
}