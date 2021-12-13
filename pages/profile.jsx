import axios from 'axios';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import NextLink from 'next/link';
import React, { useEffect, useContext, useReducer } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  List,
  Tooltip,
  ListItem,
  Typography,
  Card,
  Button,
  ListItemText,
  TextField,
} from '@material-ui/core';
import { Store } from '../utils/Store';
import TemplateLayout from '../components/TemplateLayout';
import useStyles from '../utils/styles';
import { Controller, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import Cookies from 'js-cookie';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, orders: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}

function Profile() {
  const { state } = useContext(Store);
  const [tabvalue, setTabValue] = React.useState('1');




  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const classes = useStyles();
  const { customerInfo } = state;
  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    orders: [],
    error: '',
  });



  useEffect(() => {
    if (!customerInfo) {
      return router.push('/login');
    }
    
    const fetchOrders = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/orders/history`, {
          headers: { authorization: `Bearer ${customerInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err });
      }
    };
    fetchOrders();
    setValue('name', customerInfo.name);
    setValue('email', customerInfo.email);
  }, []);
  const submitHandler = async ({ name, email, password, confirmPassword }) => {
    closeSnackbar();
    if (password !== confirmPassword) {
      enqueueSnackbar("Passwords don't match", { variant: 'error' });
      return;
    }
    try {
      const { data } = await axios.put(
        '/api/users/profile',
        {
          name,
          email,
          password,
        },
        { headers: { authorization: `Bearer ${customerInfo.token}` } }
      );
      dispatch({ type: 'USER_LOGIN', payload: data });
      Cookies.set('customerInfo', data);

      enqueueSnackbar('Profile updated successfully', { variant: 'success' });
    } catch (err) {
      enqueueSnackbar(err, { variant: 'error' });
    }
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('customerInfo');
    Cookies.remove('cartItems');
    Cookies.remove('shippinhAddress');
    Cookies.remove('paymentMethod');
    router.push('/');
    location.reload();
  };
  return (
    <TemplateLayout title="Profile">
      <main>
        <Grid container>

          <Grid item xs={12}>
            <Card className={classes.section}>



              <Stack direction="row" spacing={2}>
                <Typography style={{ fontWeight: '700' }} component="h1" variant="h4">
                  Profile
                </Typography>
                <Tooltip title='Logout'>
                  <Button onClick={logoutClickHandler}>
                    <LogoutIcon />
                  </Button>
                </Tooltip>
              </Stack>







              <TabContext value={tabvalue}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                    <Tab label="Order History" value="1" />
                    <Tab label="Information" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                <Card className={classes.section}>
            <List>
              <ListItem>
              <Typography style={{ fontWeight: '700' }} component="h1" variant="h4">
                  Order History
                </Typography>
              </ListItem>
              <ListItem>
                {loading ? (
                  <CircularProgress />
                ) : error ? (
                  <Typography className={classes.error}>{error}</Typography>
                ) : (
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>ID</TableCell>
                          <TableCell>DATE</TableCell>
                          <TableCell>TOTAL</TableCell>
                          <TableCell>PAID</TableCell>
                          <TableCell>DELIVERED</TableCell>
                          <TableCell>ACTION</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {orders.map((order) => (
                          <TableRow key={order._id}>
                            <TableCell>{order._id.substring(20, 24)}</TableCell>
                            <TableCell>{order.createdAt}</TableCell>
                            <TableCell>${order.totalPrice}</TableCell>
                            <TableCell>
                              {order.isPaid
                                ? `paid at ${order.paidAt}`
                                : 'not paid'}
                            </TableCell>
                            <TableCell>
                              {order.isDelivered
                                ? `delivered at ${order.deliveredAt}`
                                : 'not delivered'}
                            </TableCell>
                            <TableCell>
                              <NextLink href={`/order/${order._id}`} passHref>
                                <Button variant="contained">Details</Button>
                              </NextLink>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </ListItem>
            </List>
          </Card>
                </TabPanel>
                <TabPanel value="2">
                  <List>
                    <ListItem>
                      <form
                        onSubmit={handleSubmit(submitHandler)}
                        className={classes.form}
                      >
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
                                validate: (value) =>
                                  value === '' ||
                                  value.length > 5 ||
                                  'Password length is more than 5',
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
                                      ? 'Password length is more than 5'
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
                                validate: (value) =>
                                  value === '' ||
                                  value.length > 5 ||
                                  'Confirm Password length is more than 5',
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
                                    errors.password
                                      ? 'Confirm Password length is more than 5'
                                      : ''
                                  }
                                  {...field}
                                ></TextField>
                              )}
                            ></Controller>
                          </ListItem>
                          <ListItem>
                            <Button
                              variant="contained"
                              type="submit"
                              fullWidth
                              color="primary"
                            >
                              Update
                            </Button>
                          </ListItem>
                        </List>
                      </form>
                    </ListItem>
                  </List>
                </TabPanel>
              </TabContext>

















            </Card>
          </Grid>
        </Grid>
      </main>
    </TemplateLayout>
  );
}

export default dynamic(() => Promise.resolve(Profile), { ssr: false });
