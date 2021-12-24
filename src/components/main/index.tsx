import { Book, BooksContainer, LeftContainer, RightContainer, Wrapper} from './styles'
import React from 'react'

type Props = {
  
}

export const Main: React.FC<Props> = (props) => {
 return (
  <Wrapper>
    <LeftContainer>
      
    </LeftContainer>
    <RightContainer>
      <BooksContainer>
        <Book>
          <div className="book__top">
            <a className="book__top-link" href="/" >
              <img className="book__top-img" src="https://alexandriniorom.github.io/You-Tube_lesson1/img/top-pic%202.jpg" alt="book"/>
            </a>
            <div className="book__top-panel">
              <p className="book__top-price">1234</p>
              <button className="book__top-favorites">favorites</button>
            </div>
          </div>
          <div className="book__desc">
            <a href="/" className='book__desc-link'>Author</a>
            <p className='book__desc-title'>Book Name</p>
          </div>
          <button className="book__btn">Add</button>
        </Book>
        <Book>
          <div className="book__top">
            <a className="book__top-link" href="/" >
              <img className="book__top-img" src="https://alexandriniorom.github.io/You-Tube_lesson1/img/top-pic%202.jpg" alt="book"/>
            </a>
            <div className="book__top-panel">
              <p className="book__top-price">1234</p>
              <button className="book__top-favorites">favorites</button>
            </div>
          </div>
          <div className="book__desc">
            <a href="/" className='book__desc-link'>Author</a>
            <p className='book__desc-title'>Book Name</p>
          </div>
          <button className="book__btn">Add</button>
        </Book>
        <Book>
          <div className="book__top">
            <a className="book__top-link" href="/" >
              <img className="book__top-img" src="https://alexandriniorom.github.io/You-Tube_lesson1/img/top-pic%202.jpg" alt="book"/>
            </a>
            <div className="book__top-panel">
              <p className="book__top-price">1234</p>
              <button className="book__top-favorites">favorites</button>
            </div>
          </div>
          <div className="book__desc">
            <a href="/" className='book__desc-link'>Author</a>
            <p className='book__desc-title'>Book Name</p>
          </div>
          <button className="book__btn">Add</button>
        </Book>
        <Book>
          <div className="book__top">
            <a className="book__top-link" href="/" >
              <img className="book__top-img" src="https://alexandriniorom.github.io/You-Tube_lesson1/img/top-pic%202.jpg" alt="book"/>
            </a>
            <div className="book__top-panel">
              <p className="book__top-price">1234</p>
              <button className="book__top-favorites">favorites</button>
            </div>
          </div>
          <div className="book__desc">
            <a href="/" className='book__desc-link'>Author</a>
            <p className='book__desc-title'>Book Name</p>
          </div>
          <button className="book__btn">Add</button>
        </Book>
        <Book>
          <div className="book__top">
            <a className="book__top-link" href="/" >
              <img className="book__top-img" src="https://alexandriniorom.github.io/You-Tube_lesson1/img/top-pic%202.jpg" alt="book"/>
            </a>
            <div className="book__top-panel">
              <p className="book__top-price">1234</p>
              <button className="book__top-favorites">favorites</button>
            </div>
          </div>
          <div className="book__desc">
            <a href="/" className='book__desc-link'>Author</a>
            <p className='book__desc-title'>Book Name</p>
          </div>
          <button className="book__btn">Add</button>
        </Book>
        <Book>
          <div className="book__top">
            <a className="book__top-link" href="/" >
              <img className="book__top-img" src="https://alexandriniorom.github.io/You-Tube_lesson1/img/top-pic%202.jpg" alt="book"/>
            </a>
            <div className="book__top-panel">
              <p className="book__top-price">1234</p>
              <button className="book__top-favorites">favorites</button>
            </div>
          </div>
          <div className="book__desc">
            <a href="/" className='book__desc-link'>Author</a>
            <p className='book__desc-title'>Book Name</p>
          </div>
          <button className="book__btn">Add</button>
        </Book>
        <Book>
          <div className="book__top">
            <a className="book__top-link" href="/" >
              <img className="book__top-img" src="https://alexandriniorom.github.io/You-Tube_lesson1/img/top-pic%202.jpg" alt="book"/>
            </a>
            <div className="book__top-panel">
              <p className="book__top-price">1234</p>
              <button className="book__top-favorites">favorites</button>
            </div>
          </div>
          <div className="book__desc">
            <a href="/" className='book__desc-link'>Author</a>
            <p className='book__desc-title'>Book Name</p>
          </div>
          <button className="book__btn">Add</button>
        </Book>
      </BooksContainer>
    </RightContainer>
   </Wrapper>
 );
}

