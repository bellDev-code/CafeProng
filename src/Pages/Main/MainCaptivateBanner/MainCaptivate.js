import React, { Component } from 'react';
import './MainCaptivate.scss';
import arrowicon from '../../../_asset/images/common/more-icon.png'
import { NavLink } from "react-router-dom";

class MainCaptivate extends Component {
    render() {
        return (
            <div className='MainCaptivateContainer'>
                <div className='MainCaptivateBox'>
                    <div className='MainCaptivateTitleBox'>
                        <div className='MainCaptivateAboutText'>
                            About prong
                            </div>
                        <div className='MainCaptivateTheText'>
                            receive consulting<br></br>
                            Start-up Procedure

                        </div>
                    </div>
                    <div className='MainCaptivateTextBox'>
                        <div className='MainCaptivateOneText'>
                            <div className='MainCaptivateOneTextTitle'>
                                PRONG CONSULTING
                        </div>
                            <div lang="kr" className='MainCaptivateOneTextBox'>
                                프롱에서 자신만의 브랜딩에<br></br>성공한 분들을 만나보세요
                        </div>
                            <NavLink to='/consulting'>
                                <div className='MainCaptivateOneTextMoreBox'>
                                    M O R E <img src={arrowicon} alt='화살표 아이콘'></img>
                                </div>
                            </NavLink>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default MainCaptivate;