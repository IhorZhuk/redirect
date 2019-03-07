import React from "react";
import { Switch, Route} from 'react-router-dom';
import BoxShadow from 'Pages/box-shadow';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={BoxShadow}/>
        </Switch>
      </div>
    )
  }
}