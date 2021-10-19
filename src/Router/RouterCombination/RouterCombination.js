import React, { Component } from 'react'
import Magazine from '../../Pages/Magazine/Magazine';

import { RoutesString } from '../../constants/routesString';
import ConsultingPage from '../../Pages/Consulting/ConsultingPage';
import CurriculumPage from '../../Pages/Curriculum/CurriculumPage';
import EquipmentPage from '../../Pages/Eqipment/EquipmentPage';
import MainPage from '../../Pages/Main/MainPage';
import OurStoryPage from '../../Pages/OurStory/OurStoryPage'
import IngredientsPage from '../../Pages/Ingredients/IngredientsPage';

export default class RouterCombination extends Component {
    componentDidMount = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
    renderComponent = (pathName) => {
        switch (pathName) {
            case RoutesString.Consulting:
                return <ConsultingPage
                    {...this.props}
                />
            case RoutesString.Curriculum:
                return <CurriculumPage {...this.props} />
            case RoutesString.Equipment:
                return <EquipmentPage
                    {...this.props}
                />
            case RoutesString.Magazine:
                return <Magazine {...this.props} />

            case RoutesString.Home:
                return <MainPage {...this.props} />
            case RoutesString.OurStory:
                return <OurStoryPage {...this.props} />
            case RoutesString.Ingredients:
                return <IngredientsPage {...this.props} />
            default:
                return <div>404 Not Found !</div>
        }
    }
    render() {
        return (
            <div style={{ paddingTop: "100px" }}>
                {this.renderComponent(this.props.location.pathname)}
            </div>
        )
    }
}
