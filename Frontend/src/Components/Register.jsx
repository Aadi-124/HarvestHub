

import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { apiTesting } from '../Api/ApiService';


export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm();

    const onSubmit = (data) => {
        apiTesting().then((res)=>{
            console.log(res.data);
        }).catch((err)=>{   
            console.log(err);
        })
        console.log(data);
    }

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const uploadImage = () => {
        console.log("Image Upload");
    }

    const test = () =>{
        
    }
  
  

    return (
        <>
            <div className="register" style={{ width: "100%" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='register_container'>
                        {/* <div className='register_sub_container' onClick={()=>{uploadImage()}} id='profile_pic_div'> */}
                        <input type="file" id='profile_pic_div' />
                        {/* <EditIcon style={{ fontSize: "30px" }} /> */}
                        {/* </div> */}

                        <div className="register_sub_container">

                            <div className='register_sub_inner_container'>

                                <TextField style={{ margin: "10px" }} id="input1" className="inputs"  {...register("fullname")} label="Full Name" variant="outlined" />
                                <TextField style={{ margin: "10px" }} id="input2" className="inputs"  {...register("username")} label="User Name" variant="outlined" />
                                <TextField style={{ margin: "10px" }} id="input3" className="inputs" {...register("email")} label="Email" type='email' variant="outlined" />
                                <TextField style={{ margin: "10px" }} id="input4" className="inputs" {...register("age")} label="Age" type='number' variant="outlined" />
                            </div>

                            <div className='register_sub_inner_container'>

                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth >
                                        <InputLabel style={{ margin: "10px" }} id="demo-simple-select-label">Age</InputLabel>
                                        <Select
                                            {...register("Gender")}
                                            style={{width:"90%",margin:"10px"}}
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}
                                            
                                        >
                                            <MenuItem value={"Male"}>Male</MenuItem>
                                            <MenuItem value={"Female"}>Female</MenuItem>
                                            <MenuItem value={"Other"}>Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                {/* <TextField style={{ margin: "10px" }} className='inputs' {...register("Gender")} label="Gender" variant="outlined" /> */}
                                <TextField style={{ margin: "10px" }} className='inputs' {...register("PhoneNumber")} label="Phone Number" variant="outlined" />
                                <TextField style={{ margin: "10px" }} className='inputs' {...register("Address")} label="Address" type='text' variant="outlined" />
                                <TextField style={{ margin: "10px" }} className='inputs' {...register("Address")} label="Address" type='text' variant="outlined" />
                            </div>

                        </div>
                        <div>
                            <Button variant="contained" type='submit'>Register</Button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    );
}