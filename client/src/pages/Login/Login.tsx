import { CssBaseline, Grid, Box, Typography, Card, CardContent } from '@material-ui/core';
import { FormikHelpers } from 'formik';
import useStyles from './useStyles';
import login from '../../helpers/APICalls/login';
import LoginForm from './LoginForm/LoginForm';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import LoginSignupHeader from '../../components/Login-SignUp-Header/LoginSignupHeader';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import { Link } from 'react-router-dom';

export default function Login(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { email, password }: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>,
  ) => {
    login(email, password).then((data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Grid container>
      <CssBaseline />
      <Grid>
        <LoginSignupHeader current={true} />
      </Grid>

      <Grid item xs={12} sm={8} md={7} className={classes.Card}>
        <Box width="100%" maxWidth={1050} p={4} alignSelf="center">
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" align="center" className={classes.headNote}>
                Welcome Back
              </Typography>
              <LoginForm handleSubmit={handleSubmit} />

              <Box alignSelf="center">
                <Typography align="center" className={classes.linkNextPageContainer}>
                  {" Don't have an account?"}{' '}
                  <Link to="/signup" className={classes.linkNextPage}>
                    Sign up
                  </Link>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}
