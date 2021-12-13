
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import Image from 'next/image'
import { Store } from '../../utils/Store';
export default function Wishlist({ product }) {
    const router = useRouter();
    return (
        <>
            {/* <!-- MODAL AREA START (Wishlist Modal) --> */}
            <div className="ltn__modal-area ltn__add-to-cart-modal-area">
                <div className="modal fade" id="liton_wishlist_modal" tabindex="-1">
                    <div className="modal-dialog modal-md" role="document">
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
                                            <div className="col-12">
                                                <div className="modal-product-img">
                                                    <Image
                                                        src={product.image[0].src}
                                                        alt={product.image[0].alt}
                                                        width={500}
                                                        height={500}
                                                    />
                                                </div>
                                                <div className="modal-product-info">
                                                    <h5>  <Link href='/product-detail' >
                                                        <a > {product.title}</a>
                                                    </Link></h5>
                                                    <p className="added-cart"><i className="fa fa-check-circle"></i>  Successfully added to your Wishlist</p>
                                                    <div className="btn-wrapper">
                                                        <Link href='/wishlist' >
                                                            <a className="theme-btn-1 btn btn-effect-1">View Wishlist</a>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* <!-- additional-info --> */}
                                                <div className="additional-info d-none">
                                                    <p>We want to give you <b>10% discount</b> for your first order,  <br />   Use discount code at checkout</p>
                                                    <div className="payment-method">
                                                        <img src="img/icons/payment.png" alt="#" />
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
