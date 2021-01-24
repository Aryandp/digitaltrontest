import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import GallaryImages from "./Gallary";
import { bookSlot, getSlots } from "./slot-action";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    heading: {
        display: 'flex',
        padding: '20px 0',
        color: theme.palette.text.primary
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        cursor:'pointer'
    },
}));

function Home() {
    const classes = useStyles();
    const dispatch=useDispatch()
    const store=useSelector(state=>state.slotReducer)
    const history=useHistory()
    useEffect(()=>{
        dispatch(getSlots()) 
    },[])
   const handleBookSlot=(item)=>{
       dispatch(bookSlot(item))
       history.push('/detail')
   }

    return (
        <div className={classes.root}>
            <div className={classes.heading}>
                <h2>Choose your suitable time slot</h2>
            </div>
            <Grid container spacing={3}>
                {store.slotList!==null||store.slotList.length!==0?store.slotList.map(item => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                                <Paper className={classes.paper} style={{backgroundColor:item.booked?"#aa2e25":"#4caf50"}} onClick={()=>handleBookSlot(item)}>
                                    {item.startTime} - {item.endTime}
                                    </Paper>
                        </Grid>
                    )
                }):"Slots are not available"}
            </Grid>
        </div>
    );
}

export default Home;
