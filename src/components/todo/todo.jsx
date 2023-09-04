import React, { useEffect, useState, useContext } from "react";
import { SettingsContext } from "../../Context/Settings/settings";
import useForm from "../../hooks/form.jsx";
import List from "../List/index.jsx";
import Form from "../Form/index";
import Header from "../Header/index";
import { When } from "react-if";
import {LoginContext} from '../../Context/Settings/context';
import { v4 as uuid } from "uuid";
import './style.scss'

import { Pagination } from "@mantine/core";

const ToDo = () => {
  const settings = useContext(SettingsContext);
  const Login=useContext(LoginContext)

  const [defaultValues] = useState({
    difficulty: 4,
  });

  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  const [currentPage, setCurrentPage] = useState(1);


  const [list, setList] = useState(() => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    const updatedList = [...list, item];
    setList(updatedList);
    localStorage.setItem("items", JSON.stringify(updatedList));
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
    localStorage.setItem("items", JSON.stringify(items));
  }

  const filteredList = settings.complete
    ? list.filter((item) => !item.complete)
    : list;

  const paginatedList = filteredList.slice(
    (currentPage - 1) * settings.items,
    currentPage * settings.items
  );
  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (

    
    <>
    <Header/>
    <When condition={Login.loggedIn}>
      <div className="grid">
     
        
      
        <div className="item1">
          
        <h1 className="todo">To Do List: {incomplete} items pending</h1>
        <form onSubmit={handleSubmit} >
          <h2>Add To Do Item</h2>

          <label>
            <span>To Do Item</span>
            <br />
            <input
              onChange={handleChange}
              name="text"
              type="text"
              placeholder="Item Details"
            />
          </label>
        <br />
          <label>
            <span>Assigned To</span>
            <br />
            <input
              onChange={handleChange}
              name="assignee"
              type="text"
              placeholder="Assignee Name"
            />
          </label>
<br />
          <label>
            <span>Difficulty</span>
            <br />
            
            <input
              onChange={handleChange}
              defaultValue={defaultValues.difficulty}
              type="range"
              min={1}
              max={5}
              name="difficulty"
            />
          </label>
          <br />
          <label>
           
            <button type="submit" id="btn">Add Item</button>
          </label>
        </form>
      
        </div>

        <List items={paginatedList} toggleComplete={toggleComplete} />

        <Pagination
          itemsPerPage={settings.items}
          total={10}
          page={currentPage}
          onChange={(newPage) => setCurrentPage(newPage)}
          withPagesCount
        />
        
      </div>
      </When>
    </>
  );
};

export default ToDo;