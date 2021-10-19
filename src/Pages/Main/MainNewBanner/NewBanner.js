import React, { Component } from 'react';
import './NewBanner.scss'
import arrowIcon from '../../../_asset/images/main/arrow-icon.png'
import { Link } from "react-router-dom"
class NewBanner extends Component {
    render() {
        return (
            <div className="newBanner">
                <div className='NewBannerContainer'>
                    <div className='NewBannerBox'>
                        <div className='NewTitle'>
                            New start, Now With Prong
                    </div>
                        <div className='NewText'>
                            A few cafes a day.<br></br>
                        Start successful consulting at Prong.
                    </div>
                        <div className='MoreButtonBox'>

                            <div className='MoreButtonImg'><img src={arrowIcon} alt='Icon'></img></div>
                            <Link to="/consulting">
                                <div className='MoreButtonText'>
                                    More View
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default NewBanner;

