import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Typography, Button, TextField, Box, CircularProgress, InputLabel } from '@material-ui/core';
import useStyles from './useStyles';

interface Props {
  handleSubmit: (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
    }>,
  ) => void;
}

export default function Login({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().required('Email is required').email('Email is not valid'),
        password: Yup.string()
          .required('Password is required')
          .max(100, 'Password is too long')
          .min(6, 'Password too short'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Box className={classes.formElement}>
            <InputLabel htmlFor="email" className={classes.label}>
              Email
            </InputLabel>
            <TextField
              id="email"
              variant="outlined"
              margin="normal"
              InputProps={{
                classes: { input: classes.inputs },
              }}
              name="email"
              autoComplete="email"
              autoFocus
              helperText={touched.email ? errors.email : ''}
              error={touched.email && Boolean(errors.email)}
              value={values.email}
              onChange={handleChange}
              placeholder="Your email"
            />
          </Box>
          <Box className={classes.formElement}>
            <InputLabel htmlFor="password" className={classes.label}>
              Password
            </InputLabel>
            <TextField
              id="password"
              margin="normal"
              variant="outlined"
              name="password"
              placeholder="Your password"
              InputProps={{
                classes: { input: classes.inputs },
                endAdornment: <Typography className={classes.forgot}>Forgot?</Typography>,
              }}
              type="password"
              autoComplete="current-password"
              helperText={touched.password ? errors.password : ''}
              error={touched.password && Boolean(errors.password)}
              value={values.password}
              onChange={handleChange}
            />
          </Box>
          <Box textAlign="center">
            <Button type="submit" size="large" variant="contained" className={classes.submit}>
              {isSubmitting ? <CircularProgress /> : 'Login'}
            </Button>
          </Box>
          <div style={{ height: 45 }} />
        </form>
      )}
    </Formik>
  );
}
