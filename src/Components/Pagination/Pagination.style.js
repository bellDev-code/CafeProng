import styled from 'styled-components';

export const PaginationWrapper = styled.div`

    justify-content: center;
    display: flex;
    margin-top: 50px;
    margin-bottom: 80px;
    margin : auto;
`;

export const PageNumber = styled.div`
    /* border: 1px solid black; */
    margin-top : 28px;
    width: 26px;
    height: 26px;
    /* margin-right: 5px;
    margin-left: 5px; */
    /* background-color: ${props =>
        props.isCurrentPage === true ? '#444444' : 'inherit'}; */
    /* color: ${props => (props.isCurrentPage === true ? '#fff' : 'inherit')}; */
    /* font-weight: ${props => (props.isCurrentPage === true ? 'bold' : 'inherit')}; */
    text-decoration: ${props => (props.isCurrentPage === true ? 'line-through' : 'inherit')};
    /* padding: 2px; */
    
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const PageButtonContainer = styled.div`
    margin-top : 30px;
    display: flex;
    align-items: center;
    width: 26px;
    height: 26px;
    /* padding: 2px; */
    background-color: #fff;
    visibility: ${props => (props.isHidden ? 'hidden' : 'visible')};
    cursor: pointer;
    /* border: 1px solid black; */
`;

export const PreviousPageButtonContainer = styled(PageButtonContainer)`
    margin-right: 5px;
`;

export const NextPageButtonContainer = styled(PageButtonContainer)`
    margin-left: 5px;
`;
export const PrePageButtonIcon = styled.img`
    
    height: 7px;
    /* transform: rotate(180deg); */
    position: relative;
    top : -2px;
`;
export const PageButtonIcon = styled.img`
    
    height: 7px;
    position: relative;
    top : -2px;
`;

export const PreviousPageText = styled.div`
    color: white;
    /* margin-left: 8px; */
    width: 24px;
`;
export const NextPageText = styled.div`
    color: white;
    /* margin-left: 8px; */
    width: 24px;
`;
