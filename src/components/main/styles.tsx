import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: 1 0;
  display: flex;
  min-height: calc(100vh - 100px);
  background-color: #87a1c0;
`
export const LeftContainer = styled.div`
  width: 18rem;
  border-right: 1px solid black;
`
export const RightContainer = styled.div`
  flex: 1;
  max-width: 1440px;
  margin: 0 auto;
  padding: 15px 15px;
`
export const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 57px;
  grid-column-gap: 57px;
`
export const Book = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 2;

  .book__top {
    position: relative;
    margin-bottom: 20px;
    
    &-img {
      width: 100%;
      height: auto;
      vertical-align: middle;
    }
    
    &-panel {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: rgba(21, 24, 36, 0.6);
      padding: 16px 25px;
    }
    &-price {
      color: white;
    }

    &-favorites {
    }
  }

  .book__desc {
    margin-bottom: 20px;
    &-link {
      color: black;
      font-size: 14px;
    }
    &-title {
      color: #963ab3;
      font-size: 18px;
      margin-top: 10px;
    }
  }

  .book__btn {
    margin: auto 0 0 0;
    padding: 5px 0;
    width: 120px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    color: white;
    background-color: #5c41a5;
    &:hover {
      transition: 0.3s ease-out;
      background-color: #6346b3;
    }
    &:active {
      transition: 0.3s ease-out;
      background-color: #412e75;
    }
  }
`
