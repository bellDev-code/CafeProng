import React, { Component } from 'react';
import './MoreView.scss'
import { NavLink } from 'react-router-dom';

class MoreView extends Component {
    render() {
        return (
            <div className = 'MoreViewBttnContainer'>
                <NavLink to = {this.props.link}>
                    As a list
                </NavLink>
            </div>
            
        );
    }
}

export default MoreView;