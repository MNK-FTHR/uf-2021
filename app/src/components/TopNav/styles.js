import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
      navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
      },
      navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
      },
      linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`
      }
}))