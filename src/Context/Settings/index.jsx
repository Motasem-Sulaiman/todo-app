import React from "react";
export const SettingsContext = React.createContext();
export default function Settings(props) {
  const state = {
    // items: [
    //   {
    //     ToDo: "Css tutorial",
    //     id: "2554461e-bbfb-490c-b2d3-8bc6b3cfd426",
    //     complete: false,
    //     AssignedTo: "Motasem",
    //     Difficulty:"4"
    //   },
    //   {
    //     ToDo: "HomeWork",
    //     id: "27de7fd6-37c6-43ec-b6b2-9298c8a4d76c",
    //     complete: false,
    //     AssignedTo: "gaith",
    //     Difficulty:"2"
    //   },
    //   {
    //     ToDo: "watch a video",
    //     id: "397266ea-bcb8-44f1-a7dc-cb65244b7c8f",
    //     complete: false,
    //     AssignedTo: "ahmad",
    //     Difficulty:"1"
    //   },
    // ],
    // completeItems: false,
    items:3,
    completed:false,
    difficulty:'difficulty'



  };
  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}
