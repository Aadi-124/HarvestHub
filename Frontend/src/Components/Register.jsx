

import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
export default function Register() {


    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


    return (
        <>
            <div className="register" style={{ width: "100%" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='register_container'>
                        <div className='register_sub_container' id='profile_pic_div'>
                        </div>

                        <div className="register_sub_container">

                            <div className='register_sub_inner_container'>

                                <TextField style={{ margin: "3px" }} id="input1" className="inputs"  {...register("fullname")} label="Full Name" variant="outlined" />
                                <TextField style={{ margin: "3px" }} id="input2" className="inputs"  {...register("username")} label="User Name" variant="outlined" />
                                <TextField style={{ margin: "3px" }} id="input3" className="inputs" {...register("email")} label="Email" type='email' variant="outlined" />
                                <TextField style={{ margin: "3px" }} id="input4" className="inputs" {...register("age")} label="Age" type='number' variant="outlined" />
                            </div>

                            <div className='register_sub_inner_container'>
                                <Select
                                    
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                                <TextField style={{ margin: "3px" }} className='inputs' {...register("PhoneNumber")} label="Phone Number" variant="outlined" />
                                <TextField style={{ margin: "3px" }} className='inputs' {...register("Address")} label="Address" type='text' variant="outlined" />
                            </div>

                        </div>
                        <div>
                            <Button variant="contained" type='submit'>Contained</Button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    );
}