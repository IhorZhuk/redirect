import React from "react";
import { Switch, Route, Redirect} from 'react-router-dom';
import Header from 'Components/header/header';
import BoxShadow from 'Pages/box-shadow';
import BoxRadius from 'Pages/box-radius';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={BoxShadow}/>
          <Route path='/border-radius' component={BoxRadius}/>
          <Redirect to="/"/>
        </Switch>
      </div>
    )
  }
}