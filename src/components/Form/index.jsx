import React from "react";
import { useContext } from "react";
import { SettingsContext } from "../../Context/Settings/index";
import Header from "../Header";

export default function Form() {
  const state = useContext(SettingsContext);

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
      <form onSubmit={HandleSubmit}>
        <label>Task per page</label>
        <input type="text" name="tasks" />
        <label>Show Completed</label>
        <input type="checkbox" name="complete" />
        <input type="submit" />
      </form>
    </>
  );
}
