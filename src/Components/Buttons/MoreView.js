import React, { Component } from 'react';
import './MoreView.scss'

class MoreView extends Component {
    render() {
        return (
            <div className = 'MoreViewBttnContainer' onClick={this.props.onClick ? this.props.onClick : null}>
                more view
            </div>
        );
    }
}

export default MoreView;