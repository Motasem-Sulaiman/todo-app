import React from 'react';
import {When} from 'react-if';

import {LoginContext} from '../../Context/Settings/context.jsx';
import { useContext } from 'react';



function Auth(props) {
  const Login=useContext(LoginContext)

 

    const isLoggedIn = Login.loggedIn;
    const canDo = props.capability ? Login.can(props.capability) : true;
    const okToRender = isLoggedIn && canDo;

    return (
      <When condition={okToRender}>
        {props.children}
      </When>
    );
 
}

export default Auth;