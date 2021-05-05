import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    root: {
        justifyContent: 'space-around',
        overflow: 'hidden',
        flexGrow: 1,
      },
      grid:{
        paddingLeft: 10
      },
      gridList: {
        height: 450,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },

}))