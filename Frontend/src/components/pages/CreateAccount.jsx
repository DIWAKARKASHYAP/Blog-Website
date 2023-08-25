import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect , logout , isAuthenticated} = useAuth0();
  // const { logout } = useAuth0();

if(isAuthenticated){
  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
    <button onClick={() => logout({ returnTo: window.location.origin })} className="bg-red-500 text-white px-4 py-2 rounded">
      Log Out
    </button>
    </div>
    )
}else{

  return(
    <div className="flex justify-center items-center h-screen bg-slate-200">

    <button onClick={() => loginWithRedirect()} className="bg-blue-500 text-white px-4 py-2 rounded">
      Log In
    </button>
    </div>
  )
}

  // return (
  //   <div className="flex justify-center items-center h-screen">
  //   <button onClick={() => loginWithRedirect()} className="bg-blue-500 text-white px-4 py-2 rounded">
  //     Log In
  //   </button>

  //   <button onClick={() => logout({ returnTo: window.location.origin })} className="bg-red-500 text-white px-4 py-2 rounded">
  //     Log Out
  //   </button>
  //   </div>
  // );
};

export default Login;
