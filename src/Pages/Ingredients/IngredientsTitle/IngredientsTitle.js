import React, { Component } from 'react';
import './IngredientsTitle.scss'

class IngredientsTitle extends Component {
    render() {
        return (
            <div className ='IngredientsTitleContainer'>
                <div className='IngredientsTitleBox'>
                    <div className ='IngredientsTitleLeft'>
                        INGREDIENTS
                    </div>
                    <div className ='IngredientsTitleRight'>
                        공간이라는 내부의 개념을 넘어 전체적인 구조적 체계를 통해 <br></br>
                        견고하고 안전한 설계와 시공을 진행합니다.
                    </div>
                </div>
            </div>
        );
    }
}

export default IngredientsTitle;