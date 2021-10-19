import React, { Component } from "react";
import {
  PaginationWrapper,
  PageNumber,
  PreviousPageButtonContainer,
  NextPageButtonContainer,
  PageButtonIcon,
  PrePageButtonIcon,
  PreviousPageText,
  NextPageText
} from "./Pagination.style";
import nextButton from '../../_asset/images/common/nextIcon.svg';
import previousButton from '../../_asset/images/common/previousIcon.svg';
export class PaginationM extends Component {
  renderNumbers = (currentPage, pagesLength, onPageNumberClicked) => {
    var start,
    end,
    pagesCutOff = 10, 
    ceiling = Math.ceil(pagesCutOff / 2),
    floor = Math.floor(pagesCutOff / 2);
    if(  pagesLength < pagesCutOff) {
        start = 0;
        end = pagesLength;
    } else if(currentPage >= 0 && currentPage <= ceiling) {
        start = 0;
        end = pagesCutOff;
    } else if((currentPage + floor) >= pagesLength) {
        start = (pagesLength - pagesCutOff);
        end = pagesLength;
    } else {
        start = (currentPage - ceiling);
        end = (currentPage + floor);
    }
    const pageNumbers = [];
    for (let i = start; i < end; i++) {
      const number = (
        <PageNumber
          key={i}
          isCurrentPage={currentPage === i ? true : false}
          onClick={onPageNumberClicked(i)}
        >
          {i + 1}
        </PageNumber>
      );
     
      pageNumbers.push(number);
    
    }
    return pageNumbers;
  };
  
  render() {
    const {
      currentPageM,
      cardsPerPageM,
      itemCount,
      onPageNumberClicked,
      onPreviousPageClicked,
      onNextPageClicked
    } = this.props;
    const pagesLength = Math.ceil(itemCount / cardsPerPageM);
    
    return (
      <PaginationWrapper>
        <PreviousPageButtonContainer
          onClick={onPreviousPageClicked(currentPageM - 1)}
          isHidden={currentPageM === 0}
        >
          <PrePageButtonIcon src={previousButton} />
          <PreviousPageText></PreviousPageText>
        </PreviousPageButtonContainer>
        {/* {this.viewLimitNumber(currentPageM, pagesLength, onPageNumberClicked)} */}
        {this.renderNumbers(currentPageM, pagesLength, onPageNumberClicked)}
        
        <NextPageButtonContainer
          onClick={onNextPageClicked(currentPageM + 1)}
          isHidden={currentPageM + 1 === pagesLength || itemCount === 0}
        >
          
          <NextPageText></NextPageText>
          <PageButtonIcon src={nextButton} />
        </NextPageButtonContainer>
      </PaginationWrapper>
    );
  }
}
