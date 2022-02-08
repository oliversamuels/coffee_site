import React from 'react';
import './style.css';
import logo from './Images/logo.png';
import ci1 from './Images/cart-item-1.png';
import ci2 from './Images/cart-item-2.png';
import ci3 from './Images/cart-item-3.png';
import ci4 from './Images/cart-item-4.png';

function Header() {
    return (
        <div>
            <header class="header">

                <a href="#" class="logo">
                    <img src={logo} alt=""/>
                </a>

                <nav class="navbar">
                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#menu">menu</a>
                    <a href="#products">products</a>
                    <a href="#review">review</a>
                    <a href="#contact">contact</a>
                    <a href="#blogs">blogs</a>
                </nav>

                <div class="icons">
                    <div class="fas fa-search" id="search-btn"></div>
                    <div class="fas fa-shopping-cart" id="cart-btn"></div>
                    <div class="fas fa-bars" id="menu-btn"></div>
                </div>

                <div class="search-form">
                    <input type="search" id="search-box" placeholder="search here..."/>
                    <label for="search-box" class="fas fa-search"></label>
                </div>

                <div class="cart-items-container">
                    <div class="cart-item">
                        <span class="fas fa-times"></span>
                        <img src={ci1} alt=""/>
                        <div class="content">
                            <h3>cart item 01</h3>
                            <div class="price">$15.99/-</div>
                        </div>
                    </div>
                    <div class="cart-item">
                        <span class="fas fa-times"></span>
                        <img src={ci2} alt=""/>
                        <div class="content">
                            <h3>cart item 02</h3>
                            <div class="price">$15.99/-</div>
                        </div>
                    </div>
                    <div class="cart-item">
                        <span class="fas fa-times"></span>
                        <img src={ci3} alt=""/>
                        <div class="content">
                            <h3>cart item 03</h3>
                            <div class="price">$15.99/-</div>
                        </div>
                    </div>
                    <div class="cart-item">
                        <span class="fas fa-times"></span>
                        <img src={ci4} alt=""/>
                        <div class="content">
                            <h3>cart item 04</h3>
                            <div class="price">$15.99/-</div>
                        </div>
                    </div>
                    <a href="#" class="btn">checkout now</a>
                </div>

                </header>
            
        </div>
    );
}

export default Header;