import React from 'react';
import {connect} from 'react-redux';

import {startLoading, stopLoading} from '../../store'

import style from './example.module.scss';

interface Example {
    startLoading: (data: boolean) => void;
    stopLoading: (data: boolean) => void;
    loading: boolean;
    user: {
        name: string;
        email: string;
    };
    value: string;
}

interface IState {
    exampleReducer: {
        loading: boolean;
        user: {
            name: string;
            email: string;
        };
        value: string;
    }
}

const Example = (props: Example) => {
    const start = () => {
        props.startLoading(true);
        setTimeout(() => {
            props.stopLoading(false);
        }, 3000);
    }



    const onSubmit = () => {
        console.log(11111)
    }
    
    const onchangeName = (e: any) => {
        console.log(e);
    }

    return (
        <div className={style.App}>
            <button onClick={start}>startLoading</button>
            {props.loading ? 'Loading...' : 'Start'}

            <input type = "text" value = {props.value} onChange = {onchangeName}
            />
            {/* <input type="email" onChange={onchangeEmail}/> */}
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
    }),
)(Example);
