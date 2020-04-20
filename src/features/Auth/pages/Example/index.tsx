import React from 'react';
import {connect} from 'react-redux';

import {startLoading, stopLoading} from '../../store'

import style from './example.module.scss';

interface Example {
    startLoading: (data: boolean) => void;
    stopLoading: (data: boolean) => void;
    loading: boolean;
}

interface IState {
    exampleReducer: {
        loading: boolean;
    }
}

const Example = (props: Example) => {
    // const startComponent = () => {
    //     props.startLoading(true);
    //     setTimeout(() => {
    //         props.stopLoading(false);
    //     }, 3000);
    // }
    return (
        <div className={style.App}>
            {props.loading ? 'Loading...' : 'Start'}
        </div>
    );
}
export default connect(
    (state: IState) => ({
        loading: state.exampleReducer.loading,
    }),
    (dispatch) => ({
        startLoading: (data: boolean) => dispatch(startLoading(data)),
        stopLoading: (data: boolean) => dispatch(stopLoading(data)),
    }),
)(Example);
