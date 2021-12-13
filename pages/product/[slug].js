import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Typography,
} from '@material-ui/core';
import {
  Grid,
  Button,
} from '@material-ui/core';
import TemplateLayout from '../../components/TemplateLayout';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import useStyles from '../../utils/styles';
import Product from '../../models/Product';
import db from '../../utils/db';
import axios from 'axios';
import { Store } from '../../utils/Store';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

export default function ProductScreen(props) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { customerInfo } = state;
  const { product } = props;
  const classes = useStyles();


  const { enqueueSnackbar } = useSnackbar();

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);


  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        `/api/products/${product._id}/reviews`,
        {
          rating,
          comment,
        },
        {
          headers: { authorization: `Bearer ${customerInfo.token}` },
        }
      );
      setLoading(false);
      enqueueSnackbar('Review submitted successfully', { variant: 'success' });
      fetchReviews();
    } catch (err) {
      setLoading(false);
      enqueueSnackbar(err, { variant: 'error' });
    }
  };

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get(`/api/products/${product._id}/reviews`);
      setReviews(data);
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);



  if (!product) {
    return <div>Product Not Found</div>;
  }
  const addToCartHandler = async () => {
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
    <TemplateLayout title={product.title} description={product.description}>
      <main>

        <Grid  style={{ marginTop: '3rem' }} align="center" justify='center' container>
          
          <Grid item xs={4}>
            <Link href={`/product/${product.slug}`}>
              <a>
                <Image
                  src={product.image[0].src}
                  alt={product.image[0].alt}
                  width={500}
                  height={500}
                ></Image>
              </a>
            </Link>
          </Grid>
          <Grid item xs={7}>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography style={{ marginTop: '3rem' }} variant="h6" color="text.secondary">
              Rs. {product.pricing.price}
            </Typography>
            <Button style={{ marginTop: '3rem' }} onClick={addToCartHandler} variant="outlined">Add To Cart</Button>
          </Grid>


        <Link href='/shipping' >
        <a>
        <Button startIcon={<ShoppingCartCheckoutIcon />} style={{ marginTop: '3rem' }}variant="outlined">Checkout</Button>
        </a>
        </Link>
        </Grid>
      </main>
    </TemplateLayout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }, '-reviews').lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };
}
