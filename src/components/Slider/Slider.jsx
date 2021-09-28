import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import './slider.scss'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Carousel() {
   const {books} = useSelector(state => state.books)
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoPlay: true
   };

   return (
      <div className='container'>
         <Slider {...settings}>
            {
               books.length > 1 && (
                  books.map(book => (
                     <div key={book.id} className='carousel-item'>
                        <Link to={`books/${book.name}`}>
                           <img src={book.imgUrl} alt={book.title} />
                        </Link>
                     </div>
                  ))
               )
            }
         </Slider>
         <p>Hello my friend! You are welcome to my project and I'm glad to see you!
            <br/>
            It is simple slider. If you logged you can see books by clicking to slide =)
         </p>
      </div>
   )
}
