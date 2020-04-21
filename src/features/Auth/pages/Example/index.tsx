import React, {useState} from 'react';
import {connect} from 'react-redux';

import {startLoading, stopLoading, updateUser} from '../../store'

import style from './example.module.scss';


const[valueName,setValueName] = useState("");
const[valueEmail,setValueEmail] = useState("");
const[object,setObject] = useState({});
interface Example {
    startLoading: (data: boolean) => void;
    stopLoading: (data: boolean) => void;
    loading: boolean;
    user: {
        name: string;
        email: string;
    };
}

interface IState {
    exampleReducer: {
        loading: boolean;
        user: {
            name: string;
            email: string;
        };
    }
}

const Example = (props: Example) => {
    const start = () => {
        props.startLoading(true);
        setTimeout(() => {
            props.stopLoading(false);
        }, 3000);
    }



    const buttonClick = (setValueName,setValueEmail) => {
        const newObject = {
            name:setValueName,
            email:setValueEmail
        }
        
    }
    
    function onchangeName(e: any){
        setValueName(e.target.value);
    }
    function onchangeEmail(e: any){
        setValueEmail(e.target.value);
    }

    return (
        <div className={style.App}>
            <button onClick={start}>startLoading</button>
            {props.loading ? 'Loading...' : 'Start'}

            <input type = "text" value={valueName} onChange={onchangeName}/>
            <input type = "email" value={valueEmail} onChange={onchangeEmail}/>
            <button onClick={buttonClick}>click</button>
        </div>
    );
}

export default connect(
    (state: IState) => {
        console.log(state);
        return {
            loading: state.exampleReducer.loading,
            user: state.exampleReducer.user,
        }
    },
    (dispatch) => ({
        startLoading: (data: boolean) => dispatch(startLoading(data)),
        stopLoading: (data: boolean) => dispatch(stopLoading(data)),
        updateUser: (data: string) => dispatch(stopLoading(data)),
    }),
)(Example);
