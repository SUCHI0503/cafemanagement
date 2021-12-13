import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import React, { useContext, useEffect, useState } from 'react';
import TemplateLayout from '../components/TemplateLayout';
import { Store } from '../utils/Store';
import useStyles from '../utils/styles';
import Cookies from 'js-cookie';
import { Controller, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const { redirect } = router.query; // login?redirect=/shipping
  const { state, dispatch } = useContext(Store);
  const { customerInfo } = state;
  useEffect(() => {
    if (customerInfo) {
      router.push('/');
    }
  }, []);

  const classes = useStyles();
  const submitHandler = async ({ email, password }) => {
    closeSnackbar();
    try {
      const { data } = await axios.post('/api/customers/login', {
        email,
        password,
      });
      dispatch({ type: 'CUSTOMER_LOGIN', payload: data });
      Cookies.set('customerInfo', data);
      router.push(redirect || '/');
    } catch (err) {
      enqueueSnackbar(
        err.response.data ? err.response.data.message : err.message,
        { variant: 'error' }
      );
    }
  };
  return (
    <TemplateLayout title="Login">

      <main>



        <Grid align="center" justify="center" container>

          <Grid item xs={12}>
            <Typography style={{ fontWeight: '700', margin: '4rem' }} component="h1" variant="h4">
              Login
            </Typography>
            <div className="col-lg-12">

              <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>

                <List>
                  <ListItem>
                    <Controller
                      name="email"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      }}
                      render={({ field }) => (
                        <TextField
                          variant="outlined"
                          fullWidth
                          id="email"
                          label="Email"
                          inputProps={{ type: 'email' }}
                          error={Boolean(errors.email)}
                          helperText={
                            errors.email
                              ? errors.email.type === 'pattern'
                                ? 'Email is not valid'
                                : 'Email is required'
                              : ''
                          }
                          {...field}
                        ></TextField>
                      )}
                    ></Controller>
                  </ListItem>
                  <ListItem>
                    <Controller
                      name="password"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                        minLength: 6,
                      }}
                      render={({ field }) => (
                        <TextField
                          variant="outlined"
                          fullWidth
                          id="password"
                          label="Password"
                          inputProps={{ type: 'password' }}
                          error={Boolean(errors.password)}
                          helperText={
                            errors.password
                              ? errors.password.type === 'minLength'
                                ? 'Password length is more than 5'
                                : 'Password is required'
                              : ''
                          }
                          {...field}
                        ></TextField>
                      )}
                    ></Controller>
                  </ListItem>
                  <ListItem>
                    <Button fullWidth type="submit" variant="outlined">Login</Button>

                  </ListItem>


                </List>
                <ListItem>
                  Don't have an account? &nbsp;
                  <Link href={`/register?redirect=${redirect || '/'}`} >
                    <a style={{ color: '#000' }}>Register</a>
                  </Link>
                </ListItem>
              </form>



            </div>



          </Grid>
        </Grid>

      </main>


    </TemplateLayout>
  );
}
