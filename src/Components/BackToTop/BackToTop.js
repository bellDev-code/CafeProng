import React, { Component } from 'react';
import './BackToTop.scss'
import BackToTop from 'react-back-to-top';


class BackToTopComponent extends Component {
    render() {
        return (
            <BackToTop
                mainStyle={{
                    width: '100%',
                    height: '100%',
                    background: 'url(...)'
                }}
                percentStyle={{
                    width: '100%',
                    height: '100%',
                }}
                animate='fade'
                offsetTop={20}
                step={50}
                isPercent={false}
                visiblePercent={10}
            />
        );
    }
}

export default BackToTopComponent;


