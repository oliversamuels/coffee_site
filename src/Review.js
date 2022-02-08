import React from 'react';
import './style.css';

import quote_img from './Images/quote-img.png';
import pic_1 from './Images/pic-1.png';
import pic_2 from './Images/pic-2.png';
import pic_3 from './Images/pic-3.png';

function Review() {
    return (
        <div>
            <section class="review" id="review">

                <h1 class="heading"> customer's <span>review</span> </h1>

                <div class="box-container">

                    <div class="box">
                        <img src={quote_img} alt="" class="quote"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                        <img src={pic_1} class="user" alt=""/>
                        <h3>john deo</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                    </div>

                    <div class="box">
                        <img src={quote_img} alt="" class="quote"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                        <img src={pic_2} class="user" alt=""/>
                        <h3>john deo</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                    
                    <div class="box">
                        <img src={quote_img} alt="" class="quote"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                        <img src={pic_3} class="user" alt=""/>
                        <h3>john deo</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                    </div>

                </div>

            </section>            
        </div>
    );
}

export default Review;