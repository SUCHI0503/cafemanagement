import {
    Grid,
} from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image'
import TemplateLayout from '../components/TemplateLayout';
import db from '../utils/db';
import Product from '../models/Product';
import User from '../models/User';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import AddToCart from '../components/modals/AddToCart'
import ProductView from '../components/modals/ProductView'
import Wishlist from '../components/modals/Wishlist'

export default function Home(props) {
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const { products, user } = props;
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
        <TemplateLayout user={user}>
            <div className="ltn__product-area ltn__product-gutter pt-115 pb-70">
                <div className="container">

                    {/* <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ltn__section-title-2 text-center">
                                <h5 className="section-title">Featured Products</h5>
                            </div>
                        </div>
                    </div> */}



                    {/* Product Grid Sytart */}
                    <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
                        <Grid container spacing={3}>

                            {products.map(function (product) {
                                if (!product.isDeleted) {
                                    return (
                                        <Grid item md={4} key={product.slug}>

                                            {/* <!-- Item 1 --> */}
                                            <div className="ltn__product-item ltn__product-item-3 text-left">
                                                <div className="product-img">
                                                    <Image
                                                        src={product.image[0].src}
                                                        alt={product.image[0].alt}
                                                        width={500}
                                                        height={500}
                                                    />

                                                    {product.isFeatured ? (
                                                        <div className="product-badge">
                                                            <ul>
                                                                <li className="sale-badge">New</li>
                                                            </ul>
                                                        </div>
                                                    ) : (<></>)}


                                                    <div className="product-hover-action">
                                                        <ul>
                                                            <li>

                                                                <a href="#" title="Quick View" data-toggle="modal" data-target="#quick_view_modal">
                                                                    <i className="far fa-eye"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                    <i  onClick={() => addToCartHandler(product)} className="fas fa-shopping-cart"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                    <i className="far fa-heart"></i></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-info">
                                                    <div className="product-ratting">
                                                        <ul>
                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                            <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <h2 className="product-title">
                                                        <Link href={`/product/${product.slug}`} >
                                                            <a>
                                                            {product.title}
                                                            </a>
                                                        </Link>

                                                    </h2>
                                                    <p className="product-title">{product.description}</p>
                                                    <div className="product-price">
                                                        <span>{product.pricing.currency} {product.pricing.price}</span>
                                                        <del>{product.pricing.currency}{product.pricing.comparePrice}</del>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Item End --> */}
                                            <AddToCart product={product} />
                                            <ProductView product={product} />
                                            <Wishlist product={product} />
                                        </Grid>
                                    )
                                }
                            })}

                        </Grid>

                    </div>



                </div>
            </div>

        </TemplateLayout>
    );
}

export async function getServerSideProps() {
    await db.connect();
    const products = await Product.find({}).lean();
    const user = await User.find({}).lean();
    await db.disconnect();
    return {
        props: {
            products: products.map(db.convertDocToObj),
            user: user.map(db.convertDocToObj),
        },
    };
}
