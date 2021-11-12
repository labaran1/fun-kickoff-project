import { makeStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  nav: {
    display: 'flex',
    width: '100vw',
    background: '#fff',
    padding: '20px',
    justifyContent: 'space-between',
  },
  link: { textDecoration: 'none' },

  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  sitterLink: {
    margin: 'auto',
    color: '#000',
  },
  selected: {
    color: '#fff',
    background: '#f14140',
    border: 'none',
    marginLeft: '10px',
    width: '120px',
    padding: '10px',
    '&:hover': {
      background: 'red',
    },
  },
  unselected: {
    color: 'red',
    background: '#fff',
    borderColor: 'red',
    marginLeft: '10px',
    width: '120px',
    padding: '10px',

    '&:hover': {
      background: '#fff',
    },
  },
}));

export default useStyles;
