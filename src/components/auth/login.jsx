import React, { useContext,useState } from 'react';
import {When} from 'react-if';

import { LoginContext } from '../../Context/Settings/context.jsx';

// function Login () {
 
//   const Login=useContext(LoginContext)
//   const [username,setUsername]=useState("")
//   const [password,setPassword]=useState("")


//  let handleUserName = e => {
//    setUsername(e.target.value)
//   };
//  let handlePassword = e => {
//    setPassword(e.target.value)
//   };

//   let handleSubmit = e => {
//     e.preventDefault();
//     Login.login(username, password);
//   };

 
//     return (
//       <>
//         <When condition={Login.loggedIn}>
//           <button onClick={Login.logout}>Log Out</button>
//         </When>

//         <When condition={!Login.loggedIn}>
//           <form onSubmit={handleSubmit}>
//             <input
//               placeholder="UserName"
//               name="username"
//               onChange={handleUserName}
//             />
//             <input
//               placeholder="password"
//               name="password"
//               onChange={handlePassword}
//             />
//             <button>Login</button>
//           </form>
//         </When>
//       </>
//     );

// }

// export default Login;

export default function Login(props){
  const login = useContext( LoginContext)

   const [username, setUsername]= useState("")
   const [password, setPassword]= useState("")

    let handleUsername = (e) => {
  setUsername(e.target.value )
 };
    let handlePassword = (e) => {
     setPassword(e.target.value )
 };

     let  handleSubmit = (e) => {
   e.preventDefault();
   login.login(username, password);
 };
 return(
   <>
   <When condition={login.loggedIn}>
     <button onClick={login.logout}>Log Out</button>
   </When>

   <When condition={!login.loggedIn}>
     <form onSubmit={handleSubmit}>
       <input
         placeholder="UserName"
         name="username"
         onChange={handleUsername}
       />
       <input
         placeholder="password"
         name="password"
         onChange={handlePassword}
       />
       {/* <button>Login</button> */}
       <input type="submit"  />
     </form>
   </When>
 </>
 )
}