import React, { Component } from 'react';
import './MainBottomBanner.scss';
import { NavLink } from "react-router-dom";
import MoreViewBttn from '../../../Components/Buttons/MoreView'

class MainBottomBanner extends Component {
    render() {
        return (
            <div className='MainBottomBannerContainer'>
                <div className='MainBottomBannerBox'>
                    <div className='MainBottomBannerTextBox'>
                        <div className='MainBottomBannerTopText'>
                            Prong consulting
                        </div>
                        <div className='MainBottomBannerMiddleText'>
                            New start, Now With Prong
                        </div>
                        <div className='MainBottomBannerBottomText'>
                            프롱에서 성공적인 컨설팅을 시작하세요
                        </div>
                        <div className='MainBottomBannerImgBox'>
                            <NavLink to='/consulting'>
                                <MoreViewBttn>

                                </MoreViewBttn>
                            </NavLink>


                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default MainBottomBanner;