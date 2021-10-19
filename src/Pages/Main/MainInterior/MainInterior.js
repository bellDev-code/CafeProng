import React, { Component } from 'react';
import './MainInterior.scss';
import interior1 from '../../../_asset/images/main/interior-image-1.png';
import interior2 from '../../../_asset/images/main/interior-image-2.png';
import interior3 from '../../../_asset/images/main/interior-image-3.png';
import MoreViewBttn from '../../../Components/Buttons/MoreView';
import textimg from '../../../_asset/images/main/background-text-2.png';
import { NavLink } from "react-router-dom";

class MainInterior extends Component {
    render() {
        return (
            <div className = 'MainInteriorWarper'>
                <div className = 'MainInteriorContainer'>
                    <div className = 'MainInteriorBox'>
                        <div className = 'MainInteriorContentsBox'>
                            <div className = 'MainInteriorTextBox'>
                                <div className = 'MainInteriorBackText'>
                                    <img src={textimg} alt='이미지'></img>
                                </div>
                                <div lang='kr1' className = 'MainInteriorTitlleText'>
                                    With a Special <br></br>
                                    Interior
                                </div>
                                <div lang='kr1' className = 'MainInteriorSubTittleText'>
                                    Captivate a Customer
                                </div>
                                <div lang='kr' className = 'MainInteriorText'>
                                    프롱에 의뢰주신 분들의 매장위치 및 매장예정위치를 체크하고<br></br>
                                    건축 설계와 3D구현 프롱 인테리어 감리를 진행합니다. 
                                </div>
                                <NavLink to='/consulting'>
                                    <MoreViewBttn>

                                    </MoreViewBttn>
                                </NavLink>
                            </div>
                            <div className = 'MainInteriorImg3'>
                                <img src={interior3} alt='이미지'></img>
                            </div>                           
                        </div>
                        <div className = 'MainInteriorImgBox'>
                            <div className = 'MainInteriorImgFlexBox'>
                                <div className = 'MainInteriorImg1'>
                                    <img src={interior1} alt='이미지'></img>
                                </div>
                                <div className = 'MainInteriorImg2'>
                                    <img src={interior2} alt='이미지'></img>
                                </div>
                            </div>
                            <div className = 'MainInteriorBackImg2'>
                                <img src={textimg} alt='이미지'></img>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default MainInterior;