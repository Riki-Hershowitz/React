import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function ContactUs(){
    const navigate= useNavigate();

    const goToThankYou= ()=>{
        navigate('/thank');
    }

    return(
        <>
            <button onClick={goToThankYou}>send</button>
        </>
    );
}