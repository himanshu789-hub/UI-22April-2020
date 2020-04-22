import * as React from "react";
import Form from "../Form/Form";
import Home from "../Home/Home";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import IBookingService, { BookingService } from "../../services/BookingService";
import { Provider } from "react-inversify";
import {container} from './../../ioc/ioc';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider container={container}>
          <Switch>
            <Route path='/home/:id' component={Home} />
            <Route
              path='/login'
              render={props => <Form {...props} IsLogIn={true} />}
            />
            <Route
              exact
              path={["/", "/profile/:id"]}
              render={props => <Form {...props} IsLogIn={false} />}
            />
          </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
