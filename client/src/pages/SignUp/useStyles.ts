import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  headNote: {
    fontWeight: 'bold',
    marginBottom: '40px',
    fontSize: '30px',
    fontFamily: 'Roboto, Arial',
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: 23,
  },
  linkNextPage: {
    color: '#f14140',
    fontWeight: 'bold',
    fontFamily: 'Roboto, Arial',
  },
  linkNextPageContainer: {
    fontWeight: 'bold',
    fontFamily: 'Roboto, Arial',
  },
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 700,
    fontFamily: "'Open Sans'",
  },
  Card: {
    margin: 'auto',
    marginTop: '50px',
  },
}));

export default useStyles;
