import React from 'react'
import Link from 'next/link'
import TemplateLayout from '../components/TemplateLayout';
export default function index() {
    return (
        <TemplateLayout>

            <main>
                <div id="home">
                    {/* ********************************Aside****************************** */}
                    <aside>
                        <div className="welcome">
                            <p className="name animate__animated animate__backInDown animate__slow">HotShot-</p>
                            <h1 className="animate__animated animate__zoomIn animate__slow">WELCOME TO</h1>
                            <h1 className="animate__animated animate__zoomIn animate__slow">OUR CAFE</h1>
                            <p>
                                We offer a variety of things including coffee, tea , pizza, buger , cake , lemon juice and various other items with a good customer satisfaction.
                            </p>
                        </div>
                        <div className="timing">
                            <div>
                                <p /> WE are open<p /><p>7days a week</p>
                            </div>
                            <div>
                                <h1 className="animate__animated animate__rollIn animate__slow ">8AM-7PM</h1>
                            </div>
                        </div>
                    </aside>
                </div>
                <div id="about">
                </div>
                <div id="ourTeam">
                </div>
                {/* about */}
                <div className="content big">
                    <div className="left ">
                        <p className="aheading animate__animated animate__backInDown animate__slow">About us —</p>
                        <h1>A few words</h1>
                        <h1>about our cafe</h1>
                        <p>We offer a variety of thing with a greate taste </p>
                        <ul>
                            <li>All our sauces are home made</li>
                            <li>We have eveything from classical coffee to bevrages.</li>
                            <li>We ensure a good taste and health</li>
                        </ul>
                        <div className>
                            <Link href='/about'>
                                <a >
                                    <button className="a-button">More about us</button></a>
                            </Link>
                        </div>
                    </div>
                    <div className="right a-home">
                        <div className="first">
                        <p>
                            </p><h1>30+</h1>
                            Items
                            <p />
                            <p>
                            </p><h1>230+</h1>
                            orders
                            <p />
                            <p>
                            </p><h1>900+</h1>
                             Singup
                            <p />
                        </div>
                        <div>
                            <img src="/images/gallery/c5.jpg" />
                        </div>
                    </div>
                </div>
                {/* menu */}
                <div id="menu">
                    <p>our menu</p>
                    <div className="menu-cards-cont">
                        <div className="menu-card">
                            <img src="/images/menu/Menu1.png" />
                        </div>
                        <div className="menu-card">
                            <img src="/images/menu/Menu1.png" />
                        </div>
                    </div>
                    <div className="menu-button-cont">
                        <Link href='/menu'>
                            <a ><button className="menu-button">see full menu</button></a>
                        </Link>
                    </div>
                </div>
                <div id="photoGallery">
                    {/* ************* the brown div ************ */}
                    <div className="icon-gallery-cont">
                        {/* ************** icons ********* */}
                        <div className="icons-cont">
                            <section class="home-icon">
                                <img src="/images/cafe3-home-icon1.png" />
                                <div class="home-icon-desc">
                                    <h4>Coffee Bean</h4>
                                    Beans of good quality used.
                                </div>
                            </section>
                            <section class="home-icon">
                                <img src="/images/cafe3-home-icon2.png" />
                                <div class="home-icon-desc">
                                    <h4>Tea</h4>
                                    Tea of various kinds, from classical to green tea.
                                </div>
                            </section>
                            <section class="home-icon">
                                <img src="/images/cafe3-home-icon3.png" />
                                <div class="home-icon-desc">
                                    <h4>Coffee Machine</h4>
                                    It keeps it hot for a lot of time and made it delicious.
                                </div>
                            </section>
                            <section class="home-icon">
                                <img src="images/cafe3-home-icon4.png" />
                                <div class="home-icon-desc">
                                    <h4>Coffee</h4>
                                    Goog food,good mood.
                                </div>
                            </section>
                        </div>
                        {/* ********* our gallery ********* */}
                        <div className="gallery-cont">
                            <section className="gallery-left-img">
                                <img src="/images/right.jpg" />
                                <img src="/images/left.jpg" />
                            </section>
                            <section className="gallery-img-text-cont">
                                <div className="home-gallery-img-text">
                                    <h1>Photo gallery</h1>
                                    <p>Just have a look at the delicious food made by our experts.</p>
                                    <Link href='/gallery'>
                                        <a ><button className="home-to-gallery-button">view more</button></a>
                                    </Link>
                                </div>
                            </section>
                            <section className="gallery-right-img">
                                <img src="/images/coffee-home-photo-right.jpeg" />
                            </section>
                        </div>
                    </div>
                    {/* *******the extra pics -- outside brown div ******** */}
                    <img className="home-gallery-extra-first-img" src="/images/menu/cake.jpg" />
                    <img className="home-gallery-extra-second-img" src="/images/cafe3-home-pic2.jpg" />
                </div>
                {/* *****************************************testimonials*******************************/}
                <div className="testimonial">
                    <div className="brown heading-t">
                        TESTIMONIALS
                    </div>
                    <div className="person" id="p1">
                        <div className="img-person">
                            <img src="/images/person1.jpg" />
                        </div>
                        <div className="about-person">
                            We stumbled across this place and so glad we did. Really buzzing
                            vibe with quirky interior. More importantly the coffee is superb so much so we brought some home.
                            Varied menu and staff are great!.
                        </div>
                        <div className="name-t">Rahul Soni </div>
                    </div>
                    <div className="person" id="p2">
                        <div className="img-person">
                            <img src="/images/person2.png" />
                        </div>
                        <div className="about-person">
                            WOW! Just Stopped here for a cup of coffee and I was extremely surprised of the enviornment! Very
                            good place, good coffee and good food.
                        </div>
                        <div className="name-t">Utkarsh Gupta </div>
                    </div>
                    <div className="person" id="p3">
                        <div className="img-person">
                            <img src="/images/person3.png" />
                        </div>
                        <div className="about-person">
                            The coffee here is as good as the best coffee I have had in Melbourne, and the smoothie bowls are
                            really yummy too❤❤❤❤
                        </div>
                        <div className="name-t">Uvan bansal </div>
                    </div>
                    <div className="change-icon">
                        <div id="f" />
                        <div id="m" />
                        <div id="l" />
                    </div>
                </div>
                {/* ***************************************** footer -- contact info ********************************************* */}
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
