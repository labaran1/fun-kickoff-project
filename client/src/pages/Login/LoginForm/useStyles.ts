import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  formElement: {
    marginLeft: '20rem',
  },
  inputs: {
    marginTop: '.8rem',
    height: '1.5rem',
    padding: '4px',
    width: '20vw',
  },
  label: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 12,
    fontFamily: 'Roboto, Arial',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
    marginLeft: -70,
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 16,
    backgroundColor: '#f14140',
    fontWeight: 'bold',
    color: 'White',
  },
}));

export default useStyles;
