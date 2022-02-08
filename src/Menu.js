import React from 'react';
import './style.css';
import menu_1 from './Images/menu-1.png';
import menu_2 from './Images/menu-2.png';
import menu_3 from './Images/menu-3.png';
import menu_4 from './Images/menu-4.png';
import menu_5 from './Images/menu-5.png';
import menu_6 from './Images/menu-6.png';

function Menu() {
    return (
        <div>
             <section class="menu" id="menu">

                <h1 class="heading"> our <span>menu</span> </h1>

                <div class="box-container">

                    <div class="box">
                        <img src={menu_1} alt=""/>
                        <h3>tasty and healty</h3>
                        <div class="price">$15.99 <span>20.99</span></div>
                        <a href="#" class="btn">add to cart</a>
                    </div>

                    <div class="box">
                        <img src={menu_2} alt=""/>
                        <h3>tasty and healty</h3>
                        <div class="price">$15.99 <span>20.99</span></div>
                        <a href="#" class="btn">add to cart</a>
                    </div>

                    <div class="box">
                        <img src={menu_3} alt=""/>
                        <h3>tasty and healty</h3>
                        <div class="price">$15.99 <span>20.99</span></div>
                        <a href="#" class="btn">add to cart</a>
                    </div>

                    <div class="box">
                        <img src={menu_4} alt=""/>
                        <h3>tasty and healty</h3>
                        <div class="price">$15.99 <span>20.99</span></div>
                        <a href="#" class="btn">add to cart</a>
                    </div>

                    <div class="box">
                        <img src={menu_5} alt=""/>
                        <h3>tasty and healty</h3>
                        <div class="price">$15.99 <span>20.99</span></div>
                        <a href="#" class="btn">add to cart</a>
                    </div>

                    <div class="box">
                        <img src={menu_6} alt=""/>
                        <h3>tasty and healty</h3>
                        <div class="price">$15.99 <span>20.99</span></div>
                        <a href="#" class="btn">add to cart</a>
                    </div>

                </div>

            </section>            
        </div>
    );
}

export default Menu;