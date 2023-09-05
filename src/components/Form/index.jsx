import React from "react";
import { useContext } from "react";
import { SettingsContext } from "../../Context/Settings/settings";
import Header from "../Header";
import { LoginContext } from "../../Context/Settings/context";
import { When } from "react-if";


export default function Form() {
  const state = useContext(SettingsContext);
  const Login=useContext(LoginContext)
  function HandleSubmit(e) {
    e.preventDefault();

    state.setItems(e.target.tasks.value);

    if (e.target.elements.complete.checked) {
      state.setCompleted(true);
    } else {
      state.setCompleted(false);
    }

    e.target.reset();
  }

  return (
    <>

      <Header />
      <When condition={Login.loggedIn}>
      <form onSubmit={HandleSubmit}>
        <label>Task per page</label>
        <input type="text" name="tasks" />
        <label>Show Completed</label>
        <input type="checkbox" name="complete" />
        <input type="submit" />
      </form>
      <h2>Updated Settings</h2>
      <p>complete:  {state.complete.toString()}</p>
      <p>items per page:  {state.items}</p>
      </When>
    </>

   
  );
}
