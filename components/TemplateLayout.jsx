import React, { useContext } from 'react';
import Head from 'next/head';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image'
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import {
    Container,
    createMuiTheme,
    ThemeProvider,
    CssBaseline,
} from '@material-ui/core';
import useStyles from '../utils/styles';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useRouter } from 'next/router';



export default function TemplateLayout({ title, description, children }) {
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const { darkMode, cart, customerInfo } = state;
    const theme = createMuiTheme({
        typography: {
            h1: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
            h2: {
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
        },
        palette: {
            type: darkMode ? 'dark' : 'light',
            primary: {
                main: '#f0c000',
            },
            secondary: {
                main: '#208080',
            },
        },
    });
    const classes = useStyles();

    const logoutClickHandler = () => {
        setAnchorEl(null);
        dispatch({ type: 'USER_LOGOUT' });
        Cookies.remove('customerInfo');
        Cookies.remove('cartItems');
        router.push('/');
    };
    console.log(customerInfo)
    return (
        <div>
            <ThemeProvider>
                <nav>
                    <div className="img-div animate__animated animate__bounce ">
                        <img src="/images/logo-white.png" />
                    </div>
                    <div className="link">
                        <Link href="/">
                            <a >Home</a>
                        </Link>
                    </div>
                    <div className="link">
                        <Link href="/about">
                            <a >About us</a>
                        </Link>
                    </div>
                    <div className="link">
                        <Link href="/gallery">
                            <a >Gallery</a>
                        </Link>
                    </div>
                    <div className="link">
                        <Link href="/menu">
                            <a >Menu</a>
                        </Link>
                    </div>
                    <div className="link">
                        <Link href="/order">
                            <a >Products</a>
                        </Link>
                    </div>

                    {customerInfo ? (
                        <>
                            <div className="link">
                                <Link href="/cart">
                                    <Badge color="secondary" badgeContent={cart.cartItems.length}>
                                        <ShoppingCartIcon />
                                    </Badge>
                                </Link>
                            </div>
                            <div className="animate__animated animate__backInDown animate__slow">
                                <Link href="/profile"><a>

                                    <button className="loginBtn">Profile</button>
                                </a>
                                </Link>
                            </div>

                        </>
                    ) : (
                        <div className="animate__animated animate__backInDown animate__slow">
                              <Link href="/login"><a>

                            <button className="loginBtn">Login</button>
                            </a>
                                </Link>
                        </div>
                    )}


                    <div className="grow">
                        <p>Level 13,ELIZABETH st,</p>
                        <br />
                        <p>First Floor,New Delhi</p>
                    </div>
                </nav>

                {children}
            </ThemeProvider>
        </div>
    );
}
