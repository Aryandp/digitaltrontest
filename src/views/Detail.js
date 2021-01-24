import { Paper, Grid, TextField, Divider, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import slotsData from '../data/slots.json'
import { saveDetail } from "./slot-action";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    formContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 0'
    },
    gridContainer: { justifyContent: 'center' },
    heading: {
        display: 'flex',
        padding: '20px 0',
        color: theme.palette.text.primary,
        justifyContent: 'center'
    },
    navlink: {
        textDecoration: 'none'
    },
    paper: {
        maxWidth: '500px',
        width: '100%',
        padding: theme.spacing(2),
        textAlign: 'left',
        color: 'black',
        cursor: 'pointer'
    },
    ButtonContainer: {
        width: '100%',
        display: "flex",
        justifyContent: 'space-between',
        padding: '20px 0 0 0',
        color:'white'
    },
    cancelBtn:{
        backgroundColor:'#aa2e25',
        color:'white',
        '&:hover':{
            backgroundColor:'#aa2e25',
            color:'white', 
        }
    },
    saveBtn:{
        backgroundColor:'#4caf50',
        color:'white',
        '&:hover':{
            backgroundColor:'#4caf50',
        color:'white',
        }
    },
}));

function Detail() {
    const classes = useStyles();
    const [slots, setSlots] = useState([])
    const [state, setState] = useState({
        userFname:"",
        userLname:"",
        userMobileNo:"",
    })
    const location = useLocation()
    const history=useHistory()
    const store=useSelector(state=>state.slotReducer)
    const dispatch =useDispatch()
    useEffect(() => {
         setState(store.bookSlot)
    }, [])
    const handleChange = (event) => {
        event.preventDefault();
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleOnSave = () => {
        let data = store.slotList
        let objIndex = data.findIndex((obj => obj.id == store.bookSlot.id));
        data[objIndex] = {...data[objIndex],...state,"booked":true,}
        dispatch(saveDetail(data))
        history.goBack()
        }
    return (
        <div className={classes.root}>
            <div className={classes.heading}>
                <h2>Please fill the form.</h2>
            </div>
            <div className={classes.formContainer}>
                <Grid container className={classes.gridContainer} spacing={3}>
                    <Paper className={classes.paper}>
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                            <p>Choosed slot: {store.bookSlot.startTime} - {store.bookSlot.endTime} </p>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                            <TextField
                                id="outlined-basic"
                                label="First name"
                                name="userFname"
                                value={state.userFname || ''}
                                margin="dense"
                                onChange={handleChange}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                            <TextField
                                id="outlined-basic"
                                label="Last name"
                                name="userLname"
                                value={state.userLname || ''}
                                onChange={handleChange}
                                margin="dense"
                                variant="outlined"
                                fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                            <TextField
                                id="outlined-basic"
                                label="Mobile No"
                                name='userMobileNo'
                                value={state.userMobileNo || ''}
                                onChange={handleChange}
                                margin="dense"
                                variant="outlined"
                                fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                            <div className={classes.ButtonContainer}>
                                <Button variant="contained" className={classes.cancelBtn} onClick={()=>{history.goBack()}}>
                                    Cancel
                            </Button>
                                <Button variant="contained" className={classes.saveBtn} onClick={handleOnSave}>
                                    Save
                            </Button>
                            </div>
                        </Grid>
                    </Paper>
                </Grid>
            </div>
        </div>
    );
}

export default Detail;
