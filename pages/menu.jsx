import React from 'react'
import TemplateLayout from '../components/TemplateLayout';
export default function index() {
    return (
        <TemplateLayout>
            
            <main>
                {/* ******************************** Header *********************************** */}
                <div id="aimg-div">
                    <h1 className="animate__animated animate__rollIn animate__slow">
                        <div>The Secret Ingredient </div>
                        is Love
                    </h1>
                    <div className="text">
                        <div>
                            <h1 className="animate__animated animate__zoomIn animate__slow">
                                WE are open everyday</h1>
                            <h1 id="margin" className="name animate__animated animate__backInDown animate__slow">
                                8am -9pm
                            </h1>
                        </div>
                    </div>
                </div>
                {/* **************************** MENU ***************************************** */}
                <section className="cafe-menu">
                    <div className="menu-img-cont">
                        <img src="/images/menu/Garlic-Bread_4.jpg" />
                    </div>
                    <div className="menu-img-desc-cont">
                        <p className="menu-item-no  aheading animate__animated animate__backInDown animate__slow">01-</p>
                        <h2 className="menu-item-heading">Bites</h2>
                        <ul className="menu-item-list">
                            <li>Garlic Bread</li>
                            <li>Vege Sandwhich</li>
                            <li>French Toast</li>
                            <li>White/Red Sauce Pasta</li>
                            <li>Naked Tacos</li>
                        </ul>
                    </div>
                </section>
                <section className="cafe-menu">
                    <div className="menu-img-desc-cont">
                        <p className="menu-item-no aheading animate__animated animate__backInDown animate__slow">02-</p>
                        <h2 className="menu-item-heading">Pizza &amp; Burger</h2>
                        <ul className="menu-item-list">
                            <li>French Fries</li>
                            <li>classic hamburger</li>
                            <li>cheese burger</li>
                            <li>subway</li>
                            <li>pepperoni pizza</li>
                            <li>smooky grilled pizza</li>
                        </ul>
                    </div>
                    <div className="menu-img-cont">
                        <img src="/images/menu/burger.jpg" />
                    </div>
                </section>
                <section className="cafe-menu">
                    <div className="menu-img-cont">
                        <img src="/images/menu/coffee.jfif" style={{ height: 470, width: 480 }} />
                    </div>
                    <div className="menu-img-desc-cont">
                        <p className="menu-item-no  aheading animate__animated animate__backInDown animate__slow">03-</p>
                        <h2 className="menu-item-heading">Coffee</h2>
                        <ul className="menu-item-list">
                            <li>coffee with cream</li>
                            <li>iced coffee</li>
                            <li>cappucino</li>
                            <li>caffe latte</li>
                            <li>espresso</li>
                            <li>americano</li>
                            <li>macchiato</li>
                            <li>house blend</li>
                        </ul>
                    </div>
                </section>
                <section className="cafe-menu">
                    <div className="menu-img-desc-cont">
                        <p className="menu-item-no  aheading animate__animated animate__backInDown animate__slow">04-</p>
                        <h2 className="menu-item-heading">Smoothies</h2>
                        <ul className="menu-item-list">
                            <li>banana bliss</li>
                            <li>strawberry smoothie</li>
                            <li>blueberry bomber</li>
                            <li>apple crush</li>
                            <li>tropical fruit</li>
                            <li>almond smoothie</li>
                        </ul>
                    </div>
                    <div className="menu-img-cont">
                        <img src="/images/menu/smoothie-bananashake.jpg" />
                    </div>
                </section>
                <section className="cafe-menu">
                    <div className="menu-img-cont">
                        <img src="/images/menu/caramel-cake.jpg" />
                        {/* <img src="/images/menu-chococake.jpg"> */}
                    </div>
                    <div className="menu-img-desc-cont">
                        <p className="menu-item-no  aheading animate__animated animate__backInDown animate__slow">05-</p>
                        <h2 className="menu-item-heading">Deserts</h2>
                        <ul className="menu-item-list">
                            <li>pudding</li>
                            <li>creme doughtnut</li>
                            <li>pastries</li>
                            <li>cupcake</li>
                            <li>caramel cake</li>
                            <li>fudge brownies</li>
                            <li>chocolate cheesecake</li>
                        </ul>
                    </div>
                </section>
                <section className="cafe-menu">
                    <div className="menu-img-desc-cont">
                        <p className="menu-item-no  aheading animate__animated animate__backInDown animate__slow">06-</p>
                        <h2 className="menu-item-heading">Beverages</h2>
                        <ul className="menu-item-list">
                            <li>orange juice</li>
                            <li>watermelon juice</li>
                            <li>lemon-mint iced tea</li>
                            <li>pepsi</li>
                            <li>coke</li>
                            <li>bottled water</li>
                        </ul>
                    </div>
                    <div className="menu-img-cont">
                        <img src="/images/menu/bevrages.jpg" />
                    </div>
                </section>
                {/* ******************************* Footer **************************************** */}
                <div className="footer">
                    <div className="contact">
                        <div className="left">
                            <p className="brown">Do you have any questions?</p>
                            <p>hotshot@gmail.com</p>
                        </div>
                        <div className="mid">
                            <p>Shop no 13, </p>
                            <p>Kashmere, Gate</p>
                            <p>Delhi</p>
                            <div className="social">
                                <div className="c-link"> <i className="fab fa-linkedin fa-2x" /></div>
                                <div className="c-link"> <i className="fab fa-facebook fa-2x" /></div>
                                <div className="c-link"> <i className="fab fa-twitter-square fa-2x" /></div>
                            </div>
                        </div>
                        <div className="right">
                            <p className="brown">Book a table</p>
                            <p>+(91)6789543288</p>
                        </div>
                    </div>
                    <div className="down">
                    © 2021 Demo Coffee Wesite | All Rights Reserved | Powered by Hotshot
                    </div>
                </div>
            </main>




        </TemplateLayout>
    )
}
