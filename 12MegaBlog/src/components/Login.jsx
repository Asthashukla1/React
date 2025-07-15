import React from "react";
import {Link, useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button, Logo, Input} from './index'
import { useDispatch } from "react-redux";
import authService from '../appwrite/auth'
import {useForm} from 'react-router-dom'

function Login(){
    return(
        <div>Login</div>
    )
}

export default Login