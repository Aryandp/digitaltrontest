import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  navlink:{
    textDecoration:'none',
    color:'white'
  },
  gallaryBtn:{
    color:'white',
    borderColor:"white",
    '&:hover':{
    color:'white',
    }
  }
}));

function Header() {
  const classes = useStyles();
  const history=useHistory()

  return (
      <header className="App-header">
          <NavLink className={classes.navlink} to='/'>Time Slot Booking App</NavLink>
          <Button variant="outlined" className={classes.gallaryBtn} onClick={()=>{history.push('/gallary')}}>Go to Gallary</Button>
      </header>
  );
}

export default Header;
