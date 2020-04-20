import * as React from "react";
import {Route} from "react-router-dom";
import Example from './features/Auth/pages/Example'
import ExampleRoute from './features/Auth/pages/ExampleRoute'

const Routing = (): JSX.Element => {
    return (
        <div>
            <Route exact={true} path="/" component={Example}/>
            <Route exact={true} path="/example" component={ExampleRoute}/>
        </div>
    );
};
export default Routing;
