import React from 'react';
import { Switch } from 'react-router-dom';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';
import Home from '../pages/Home';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Routes: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  return (
    <Switch>
      <ReactDOMRoute path="/" exact component={Home} />
    </Switch>
  );
};

export default Routes;
