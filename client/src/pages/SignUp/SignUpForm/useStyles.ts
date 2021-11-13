import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  formElement: {
    marginLeft: '20rem',
  },
  label: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 12,
    textTransform: 'uppercase',
    fontFamily: 'Roboto, Arial',
  },
  inputs: {
    marginTop: '.8rem',
    height: '2rem',
    padding: '5px',
    width: '20vw',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
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
    color: 'White',

    fontWeight: 'bold',
  },
}));

export default useStyles;
