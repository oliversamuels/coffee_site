import React from 'react';
import './style.css';
import blog_1 from './Images/blog-1.jpeg';
import blog_2 from './Images/blog-2.jpeg';
import blog_3 from './Images/blog-3.jpeg';

function Blog() {
    return (
        <div>
            <section class="blogs" id="blogs">

                <h1 class="heading"> our <span>blogs</span> </h1>

                <div class="box-container">

                    <div class="box">
                        <div class="image">
                            <img src={blog_1} alt=""/>
                        </div>
                        <div class="content">
                            <a href="#" class="title">tasty and refreshing coffee</a>
                            <span>by admin / 21st may, 2021</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                            <a href="#" class="btn">read more</a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={blog_2} alt=""/>
                        </div>
                        <div class="content">
                            <a href="#" class="title">tasty and refreshing coffee</a>
                            <span>by admin / 21st may, 2021</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                            <a href="#" class="btn">read more</a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="image">
                            <img src={blog_3} alt=""/>
                        </div>
                        <div class="content">
                            <a href="#" class="title">tasty and refreshing coffee</a>
                            <span>by admin / 21st may, 2021</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                            <a href="#" class="btn">read more</a>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
}

export default Blog;