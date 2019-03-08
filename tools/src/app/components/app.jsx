import React from "react";
import { Switch, Route, Redirect} from 'react-router-dom';
import Header from 'Components/header/header';
import BoxShadow from 'Pages/box-shadow';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={BoxShadow}/>
          <Redirect to="/"/>
        </Switch>
      </div>
    )
  }
}