import { FormikHelpers } from 'formik';

import { Card, Typography, Grid, CssBaseline, CardContent, Box, Paper, CardActions } from '@material-ui/core';
import useStyles from './useStyles';
import register from '../../helpers/APICalls/register';
import SignUpForm from './SignUpForm/SignUpForm';
import LoginSignupHeader from '../../components/Login-SignUp-Header/LoginSignupHeader';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import { Link } from 'react-router-dom';

export default function Register(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { username, email, password }: { email: string; password: string; username: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string; username: string }>,
  ) => {
    register(username, email, password).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
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
        <LoginSignupHeader current={false} />
      </Grid>

      <Grid item xs={12} sm={8} md={7} className={classes.Card}>
        <Box width="100%" maxWidth={1050} p={3} alignSelf="center">
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h1" align="center" className={classes.headNote}>
                Sign up
              </Typography>
              <SignUpForm handleSubmit={handleSubmit} />

              <Box alignSelf="center">
                <Typography align="center" className={classes.linkNextPageContainer}>
                  Already a member?{' '}
                  <Link to="/login" className={classes.linkNextPage}>
                    Login
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
