import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link';
export default function ProductView({product}) {
    const router = useRouter();
    return (
        <>
            {/* <!-- MODAL AREA START (Quick View Modal) --> */}
            <div className="ltn__modal-area ltn__quick-view-modal-area">
                <div className="modal fade" id="quick_view_modal" tabindex="-1">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="ltn__quick-view-modal-inner">
                                    <div className="modal-product-item">
                                        <div className="row">
                                            <div className="col-lg-6 col-12">
                                                <div className="modal-product-img">
                                                <Image
                                                        src={product.image[0].src}
                                                        alt={product.image[0].alt}
                                                        width={500}
                                                        height={500}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="modal-product-info">
                                                    <div className="product-ratting">
                                                        <ul>
                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                            <li><a href="#"><i className="far fa-star"></i></a></li>
                                                            <li className="review-total"> <a href="#"> ( {product.numReviews} Reviews )</a></li>
                                                        </ul>
                                                    </div>
                                                    <h3> {product.title}</h3>
                                                    <div className="product-price">
                                                    <span>{product.pricing.currency} {product.pricing.price}</span>
                                                        <del>{product.pricing.currency}{product.pricing.comparePrice}</del>
                                                    </div>

                                                    {product.categories.length!==0?(
                                                           <div className="modal-product-meta ltn__product-details-menu-1">
                                                           <ul>
                                                               <li>
                                                                   <strong>Categories:</strong>
                                                                   <span>
                                                                       {product.categories.map(function (product) {
                                                                            return (
                                                                                <a href="#">{product.toUpperCase()}</a>
                                                                            )
                                                                       })}
                                                                      
                                                                   </span>
                                                               </li>
                                                           </ul>
                                                       </div>
                                                    ):(<></>)}
                                                 
                                                    <div className="ltn__product-details-menu-2">
                                                        <ul>
                                                            <li>
                                                                <div className="cart-plus-minus">
                                                                    <input type="text" value="02" name="qtybutton" className="cart-plus-minus-box" />
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <a href="" className="theme-btn-1 btn btn-effect-1" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                                    <i className="fas fa-shopping-cart"></i>
                                                                    <span>ADD TO CART</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="ltn__product-details-menu-3">
                                                        <ul>
                                                            <li>
                                                            <Link href='/wishlist' >
                                                                <a className="" title="Wishlist" data-toggle="modal" data-target="#liton_wishlist_modal">
                                                                    <i className="far fa-heart"></i>
                                                                    <span>Add to Wishlist</span>
                                                                </a>
                                                                </Link>
                                                            </li>
                                                           
                                                        </ul>
                                                    </div>
                                                    <hr />
                                                    <div className="ltn__social-media">
                                                        <ul>
                                                            <li>Share:</li>
                                                            <li><a href="" title="Whatsapp"><i class="fab fa-whatsapp"></i></a></li>
                                                            <li><a href="" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                                            <li><a href="" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                                            <li><a href="" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                                                            <li><a href="" title="Instagram"><i className="fab fa-instagram"></i></a></li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- MODAL AREA END --> */}


        </>
    );
}

