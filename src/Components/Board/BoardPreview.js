import React, { Component } from 'react';
import './BoardPreview.scss';

class BoardPreview extends Component {
    render() {
        const { onPreviousClick, onNextClick, index, dataLength, previousTitle, nextTitle } = this.props
        return (
            <div className='BoardPreviewContainer'>

                <div>
                    {
                        index !== 0 &&
                        <div className='BoardPreviewBox'>
                            <div className='BoardPreviewContents' onClick={onPreviousClick}>
                                <div className='BoardPreviewBtn'>∧</div>
                                <div lang='kr1' className='BoardPreviewNext'>PREV</div>
                                <div className='BoardPreviewTitle'>{previousTitle}</div>
                            </div>
                        </div>
                    }

                    {
                        dataLength !== (index + 1) &&
                        <div className='BoardNextBox'>
                            <div className='BoardNextContents' onClick={onNextClick}>
                                <div className='BoardNextBtn'>∨</div>
                                <div lang='kr1' className='BoardNextNext'>NEXT</div>
                                <div className='BoardNextTitle'>{nextTitle}</div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default BoardPreview;