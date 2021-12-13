import React from 'react'
import TemplateLayout from '../components/TemplateLayout';
export default function index() {
    return (
        <TemplateLayout>


            <main>

                <div id="aimg-div">
                    <h1 class="animate__animated animate__rollIn animate__slow">
                        <div>A few words </div>
                        about us
                    </h1>
                    <div class="text">
                        <div>
                            <h1 class="animate__animated animate__zoomIn animate__slow">
                                WE are open everyday</h1>
                            <h1 id="margin" class="name animate__animated animate__backInDown animate__slow">
                                8am -9pm
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="left ">
                        <p class="aheading animate__animated animate__backInDown animate__slow">DAPIBUS RISUS ANTE —</p>
                        <h1>Orci varius natoque</h1>
                        <h1>parturient tortor</h1>
                        <p>Hotshot Cafe, is India's favourite for coffee and other snacks items. Present near kashmere gate
                            delhi.</p>
                        <ul>
                            <li>All our souces asnd ingredients are made in home.</li>
                            <li>Many of our users have shon their love through social media handles</li>
                            <li>We look forward for serving u with the taste</li>
                        </ul>
                    </div>
                    <div class="right">
                        <p>
                            For over 20 years, Hotshot Cafe has been catering memorable coffee in Delhi. From humble beginnings
                            as a homegrown restaurant in the heart of the city, our exceptional service and attention to detail
                            has allowed us to steadily grow to become one of Delhi's largest and most recognized catering
                            companies
                        </p>
                        <p>
                            Whether it’s a corporate function, upscale event, or a family gathering, Cafe Hotshot provides
                            delicious food that fit your vision and your budget. Our dedicated and experienced team will
                            cheerfully give your event the care and attention it deserves.
                        </p>
                        <p>
                            As such, we also strive to continuously improve our menu to satisfy your varying needs.
                            And because we also pride ourselves on contributing to our community, we are committed to using
                            as much local produce as possible.


                        </p>
                        <p>
                            And because we also pride ourselves on contributing to our community, we are committed to using as much local produce as possible.


                        </p>
                    </div>
                </div>
                <div class="img-a">
                <div className="c-img">
                        <img src="/images/left.jpg" />
                        <img src="/images/right.jpg" />
                    </div>
                            <div class="f-ic">
                                <div>
                                    <i class="fas fa-mug-hot fa-5x"></i>
                                    <p>Coffee everyone's favourite</p>
                                </div>
                                <div>
                                    <i class="fas fa-cookie fa-5x"></i>
                                    <p>Home made Cookies</p>
                                </div>
                                <div>
                                    <i class="fas fa-hamburger fa-5x"></i>
                                    <p>Variety of burger are available </p>
                                </div>
                                <div>
                                    <i class="fas fa-birthday-cake fa-5x"></i>
                                    <p>Cakes of different styles</p>
                                </div>
                            </div>
                    </div>
                    
                    <div class="testimonial">
                        <div class="brown heading-t">
                            TESTIMONIALS
                        </div>

                        <div class="person" id="p1">
                            <div class="img-person">
                            <img src="/images/person1.jpg" />
                            </div>
                            <div class="about-person">
                                We stumbled across this place and so glad we did. Really buzzing
                                vibe with quirky interior. More importantly the coffee is superb so much so we brought some home.
                                Varied menu and staff are great!.
                            </div>
                            <div class="name-t">Rahul Soni </div>
                        </div>
                        <div class="person" id="p2">
                            <div class="img-person">
                            <img src="/images/person2.jpg" />
                            </div>
                            <div class="about-person">
                                WOW! Just Stopped here for a cup of coffee and I was extremely surprised of the enviornment! Very
                                good place, good coffee and good food.
                            </div>
                            <div class="name-t">Shivam </div>
                        </div>
                        <div class="person" id="p3">
                            <div class="img-person">
                                <img src="/images/person3.png"/>
                            </div>
                            <div class="about-person">
                                The coffee here is as good as the best coffee I have had in Melbourne, and the smoothie bowls are
                                really yummy too❤❤❤❤
                            </div>
                            <div class="name-t">Uvan</div>
                        </div>
                        <div class="change-icon">
                            <div id="f"></div>
                            <div id="m"></div>
                            <div id="l"></div>
                        </div>
                    </div>
                    <div class="footer">
                        <div class="contact">
                            <div class="left">
                                <p class="brown">Do you have any questions?</p>
                                <p>hotshot@gmail.com</p>
                            </div>
                            <div class="mid">
                                <p>Shop no,13</p>
                                <p>Kashmere Gate,</p>
                                <p>Delhi</p>
                                <div class="social">

                                    <div class="c-link"> <i class="fab fa-linkedin fa-2x"></i></div>
                                    <div class="c-link"> <i class="fab fa-facebook fa-2x"></i></div>
                                    <div class="c-link"> <i class="fab fa-twitter-square fa-2x"></i></div>

                                </div>
                            </div>
                            <div class="right">
                                <p class="brown">Book a table</p>
                                <p>+(91)6789543288</p>
                            </div>


                        </div>
                        <div class="down">
                            © 2021 Demo Coffee Wesite | All Rights Reserved | Powered by Hotshot
                        </div>
                    </div>
            </main>





        </TemplateLayout>
    )
}
