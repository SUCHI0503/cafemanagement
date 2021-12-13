import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import TemplateLayout from '../components/TemplateLayout';
import { Store } from '../utils/Store';
import NextLink from 'next/link';
import Image from 'next/image';
import {
    Grid,
    TableContainer,
    Table,
    Typography,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Link,
    Select,
    MenuItem,
    Button,
    Card,
    List,
    ListItem,
} from '@material-ui/core';
import axios from 'axios';
import { useRouter } from 'next/router';

function CartScreen() {
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;
    const updateCartHandler = async (item, quantity) => {
        const { data } = await axios.get(`/api/products/${item._id}`);
        if (data.countInStock < quantity) {
            window.alert('Sorry. Product is out of stock');
            return;
        }
        dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
    };
    const removeItemHandler = (item) => {
        dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
    };
    const checkoutHandler = () => {
        router.push('/shipping');
    };
    return (
        <TemplateLayout title="Shopping Cart">
            <main>
                <Grid align="center" justify="center" container >
                    <Grid item xs={12}>
                        <Typography style={{ fontWeight: '700', margin: '2rem' }} component="h1" variant="h4">
                            Cart
                        </Typography>
                    </Grid></Grid>
                {cartItems.length === 0 ? (
                    <>
                        <Grid align="center" justify="center" container >
                            <Grid item xs={12}>
                                <div>
                                    Cart is empty.{' '}
                                    <NextLink href="/order" passHref>
                                        <Link>Go shopping</Link>
                                    </NextLink>

                                </div>
                                <Image
                                    src='/images/cart.png'
                                    width={500}
                                    height={500}
                                ></Image>
                            </Grid></Grid>
                    </>
                ) : (
                    <Grid container >
                        <Grid item xs={12}>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Image</TableCell>
                                            <TableCell>Name</TableCell>
                                            <TableCell align="right">Quantity</TableCell>
                                            <TableCell align="right">Price</TableCell>
                                            <TableCell align="right">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {cartItems.map((item) => (
                                            <TableRow key={item._id}>
                                                <TableCell>
                                                    <NextLink href={`/product/${item.slug}`} passHref>
                                                        <Link>
                                                            <Image
                                                                src={item.image[0].src}
                                                                alt={item.title}
                                                                width={50}
                                                                height={50}
                                                            ></Image>
                                                        </Link>
                                                    </NextLink>
                                                </TableCell>

                                                <TableCell>
                                                    <NextLink href={`/product/${item.slug}`} passHref>
                                                        <Link>
                                                            <Typography>{item.title}</Typography>
                                                        </Link>
                                                    </NextLink>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Select
                                                        value={item.quantity}
                                                        onChange={(e) =>
                                                            updateCartHandler(item, e.target.value)
                                                        }
                                                    >
                                                        {[...Array(item.countInStock).keys()].map((x) => (
                                                            <MenuItem key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </TableCell>
                                                <TableCell align="right">${item.pricing.price}</TableCell>
                                                <TableCell align="right">
                                                    <Button
                                                        variant="contained"
                                                        color="secondary"
                                                        onClick={() => removeItemHandler(item)}
                                                    >
                                                        x
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid style={{ marginTop: '4rem' }} item xs={6}>
                            <List>
                                <ListItem>
                                    <Typography variant="h6">
                                        Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                                        items) : Rs.
                                        {cartItems.reduce((a, c) => a + c.quantity * c.pricing.price, 0)}
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Button
                                        onClick={checkoutHandler}
                                        variant="contained"
                                        color="primary"
                                    >
                                        Check Out
                                    </Button>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                )}


            </main>

        </TemplateLayout>
    );
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
