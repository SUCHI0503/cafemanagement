import Link from 'next/link';
import Image from 'next/image'
import TemplateLayout from '../components/TemplateLayout';
import db from '../utils/db';
import Product from '../models/Product';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Store } from '../utils/Store';
export default function index(props) {
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const { products } = props;
    const addToCartHandler = async (product) => {
        const existItem = state.cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/products/${product._id}`);
        if (data.countInStock < quantity) {
            window.alert('Sorry. Product is out of stock');
            return;
        }
        dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    };
    return (
        <TemplateLayout>

            <main>
                <div>
                    {/* ******************************** Header *********************************** */}
                    <div id="aimg-div">
                        <h1 className="animate__animated animate__rollIn animate__slow">
                            <div>Enjoy the </div>
                            Real Taste
                        </h1>
                        <div className="text">
                            <div>
                                <h1 className="animate__animated animate__zoomIn animate__slow" style={{ fontSize: '2.2rem' }}>
                                    Food delivery within 5km of area</h1>
                                <h1 id="margin" className="name animate__animated animate__backInDown animate__slow" style={{ fontSize: '1.6rem' }}>
                                    Right at your place
                                </h1>
                            </div>
                        </div>
                    </div>
                    {/* **************************** MENU ***************************************** */}
                    <section className="order-food-categories-cont">
                        <h4 className="aheading animate__animated animate__backInDown animate__slow">Categories...</h4>

                        {/* ******************** Bites **************************** */}
                        <div id="order-bites" className="order-food-categories">
                            <h1>bites</h1>
                            <div className="order-food-card-cont">
                                {products.map(function (product) {
                                    if (!product.isDeleted) {
                                        return (
                                            <>
                                                <div id="garlic-bread" className="order-food-card">
                                                    <Link href={`/product/${product.slug}`} >
                                                        <a>
                                                            <Image
                                                                src={product.image[0].src}
                                                                alt={product.image[0].alt}
                                                                width={200}
                                                                height={200}
                                                            />

                                                            <h3 style={{color:'black'}} >  {product.title}</h3>
                                                            <p className="price">Rs. {product.pricing.price}</p>
                                                            <button onClick={() => addToCartHandler(product)} className="add-to-cart">Add to Cart</button>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        <hr />

                    </section>
                    <div className="confirm-order-cont">
                        <Link href='/cart'>
                        <a ><button className="confirm-order">Place Order</button></a>
                        </Link>
                    </div>
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
                </div>
            </main>

        </TemplateLayout>
    )
}
export async function getServerSideProps() {
    await db.connect();
    const products = await Product.find({}).lean();
    await db.disconnect();
    return {
        props: {
            products: products.map(db.convertDocToObj),
        },
    };
}