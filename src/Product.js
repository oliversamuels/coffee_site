import React from 'react';
import './style.css';

import product_1 from './Images/product-1.png';
import product_2 from './Images/product-2.png';
import product_3 from './Images/product-3.png';

function Product() {
    return (
        <div>
            <section class="products" id="products">

                <h1 class="heading"> our <span>products</span> </h1>

                <div class="box-container">

                    <div class="box">
                        <div class="icons">
                            <a href="#" class="fas fa-shopping-cart"></a>
                            <a href="#" class="fas fa-heart"></a>
                            <a href="#" class="fas fa-eye"></a>
                        </div>
                        <div class="image">
                            <img src={product_1} alt=""/>
                        </div>
                        <div class="content">
                            <h3>fresh coffee</h3>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <div class="price">$15.99 <span>$20.99</span></div>
                        </div>
                    </div>

                    <div class="box">
                        <div class="icons">
                            <a href="#" class="fas fa-shopping-cart"></a>
                            <a href="#" class="fas fa-heart"></a>
                            <a href="#" class="fas fa-eye"></a>
                        </div>
                        <div class="image">
                            <img src={product_2} alt=""/>
                        </div>
                        <div class="content">
                            <h3>fresh coffee</h3>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <div class="price">$15.99 <span>$20.99</span></div>
                        </div>
                    </div>

                    <div class="box">
                        <div class="icons">
                            <a href="#" class="fas fa-shopping-cart"></a>
                            <a href="#" class="fas fa-heart"></a>
                            <a href="#" class="fas fa-eye"></a>
                        </div>
                        <div class="image">
                            <img src={product_3} alt=""/>
                        </div>
                        <div class="content">
                            <h3>fresh coffee</h3>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <div class="price">$15.99 <span>$20.99</span></div>
                        </div>
                    </div>

                </div>

                </section>
            
        </div>
    );
}

export default Product;