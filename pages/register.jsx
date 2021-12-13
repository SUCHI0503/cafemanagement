import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import TemplateLayout from '../components/TemplateLayout';
import { Store } from '../utils/Store';
import useStyles from '../utils/styles';
import Cookies from 'js-cookie';
import { Controller, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';

export default function Register() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const { redirect } = router.query;
  const { state, dispatch } = useContext(Store);
  const { customerInfo } = state;
  useEffect(() => {
    if (customerInfo) {
      router.push('/');
    }
  }, []);

  const classes = useStyles();
  const submitHandler = async ({ name, email, password, confirmPassword }) => {
    closeSnackbar();
    if (password !== confirmPassword) {
      enqueueSnackbar("Passwords don't match", { variant: 'error' });
      return;
    }
    try {
      const { data } = await axios.post('/api/customers/register', {
        name,
        email,
        password,
      });
      dispatch({ type: 'CUSTOMER_LOGIN', payload: data });
      Cookies.set('customerInfo', data);
      router.push(redirect || '/');
    } catch (err) {
      console.log(err)
      enqueueSnackbar(
        err.response.data ? err.response.data.message : err.message,
        { variant: 'error' }
      );
    }
  };
  return (
    <TemplateLayout title="Register">

      <main>



        <Grid align="center" justify="center" container>

          <Grid item xs={12}>
            <Typography style={{ fontWeight: '700', margin: '2rem' }} component="h1" variant="h4">
              Register
            </Typography>

            <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>

              <List>
                <ListItem>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: true,
                      minLength: 2,
                    }}
                    render={({ field }) => (
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="name"
                        label="Name"
                        inputProps={{ type: 'name' }}
                        error={Boolean(errors.name)}
                        helperText={
                          errors.name
                            ? errors.name.type === 'minLength'
                              ? 'Name length is more than 1'
                              : 'Name is required'
                            : ''
                        }
                        {...field}
                      ></TextField>
                    )}
                  ></Controller>
                </ListItem>
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
                  <Controller
                    name="confirmPassword"
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
                        id="confirmPassword"
                        label="Confirm Password"
                        inputProps={{ type: 'password' }}
                        error={Boolean(errors.confirmPassword)}
                        helperText={
                          errors.confirmPassword
                            ? errors.confirmPassword.type === 'minLength'
                              ? 'Confirm Password length is more than 5'
                              : 'Confirm  Password is required'
                            : ''
                        }
                        {...field}
                      ></TextField>
                    )}
                  ></Controller>
                </ListItem>
                <ListItem>
                <Button fullWidth type="submit" variant="outlined">Register</Button>


                </ListItem>
                <ListItem>
                  Already have an account? &nbsp;
              
                  <Link href={`/login?redirect=${redirect || '/'}`} >
                    <a style={{ color: '#000' }}>Login</a>
                  </Link>
                </ListItem>
              </List>
            </form>





          </Grid>
        </Grid>

      </main>
    </TemplateLayout>
  );
}
