import React, { useContext, useEffect } from "react";
import { useState } from "react";


export const SettingsContext = React.createContext();
export default function Settings(props) {
  const [items, setItems] = useState(3);
  const [completed, setCompleted] = useState(true);
  
  const state = {
    items: items,
    complete: completed,
    difficulty: "difficulty",
    setItems: setItems,
    setCompleted: setCompleted,
    

  };
   useEffect(()=>{
  localStorage.setItem("preferences", JSON.stringify(state));

})


 

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}
