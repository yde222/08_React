"uee client";
import {createContext, useState} from "react";

const UserContext = createContext();

function ContextGrandparent(){
   const[user,setUser] =  uesState("Alice");

   const hadleNameChange = (e) => {
    setUser(e.target.value);
   };

   return (
    <div>
        <UserContext.props>

        <ContextParent />
    </div>
   )



}

export  default ContextGrandparent;