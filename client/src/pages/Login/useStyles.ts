import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: 23,
  },
  headNote: {
    fontWeight: 'bolder',
    marginBottom: '40px',
  },
  linkNextPage: {
    color: '#f14140',
    fontWeight: 'bold',
  },
  linkNextPageContainer: {
    fontWeight: 'bold',
  },
  Card: {
    margin: 'auto',
    marginTop: '50px',
  },
}));

export default useStyles;
