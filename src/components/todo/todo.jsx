import React, { useEffect, useState, useContext } from "react";
import { SettingsContext } from "../../Context/Settings/settings";
import useForm from "../../hooks/form.jsx";
import List from "../List/index.jsx";
import Form from "../Form/index";
import { SuperAgent } from "superagent";
import Header from "../Header/index";
import { When } from "react-if";
import { LoginContext } from "../../Context/Settings/context";
import { v4 as uuid } from "uuid";
import axios from "axios";
import Auth from "../auth/auth";
import "./style.scss";

import { Pagination } from "@mantine/core";

const ToDo = () => {
  const settings = useContext(SettingsContext);
  const Login = useContext(LoginContext);

  const [defaultValues] = useState({
    difficulty: 4,
  });

  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  const [currentPage, setCurrentPage] = useState(1);
  

  // const [list, setList] = useState(() => {
  //   const storedItems = localStorage.getItem("items");
  //   return storedItems ? JSON.parse(storedItems) : [];
  // });
  const [list, setList] = useState([]);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    const updatedList = [...list, item];
    setList(updatedList);
    // localStorage.setItem("items", JSON.stringify(updatedList));
    Login.addItem(item);
  }
  useEffect( () => {
    const url = `https://auth-api-33k1.onrender.com/api/v1/todo`;
     axios.get(url)
     .then((res)=>{
// console.log(res.data)
      setList(res.data);
     })

  },[list] );

 async function deleteItem(id) {
     await axios.delete(`https://auth-api-33k1.onrender.com/api/v1/todo/${id}`)
     const res=await axios.get(`https://auth-api-33k1.onrender.com/api/v1/todo`)
    // const items = list.filter((item) => item.id !== id);
    setList(res.data);
    // localStorage.setItem("items", JSON.stringify(items));
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
    if (item.id == id) {
      item.complete = !item.complete;
    const url= `https://auth-api-33k1.onrender.com/api/v1/todo/${id}`
    axios.put(url,item).then((res)=>{
      //either:
      // const dataArray = Object.values(res.data);
      // console.log(dataArray)
      // const newList = [...list, ...dataArray];
      // console.log(newList)
      // setList(newList);
      //or:
      setList([res.data])
    })
    }
    return item;
  });
  // setList(items);
  // localStorage.setItem("items", JSON.stringify(items));
}

  const filteredList = !settings.complete
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
      <Header />
      <When condition={Login.loggedIn}>
        <div className="grid">
          <div className="item1">
            <h1 className="todo">To Do List: {incomplete} items pending</h1>
            <form onSubmit={handleSubmit}>
              <Auth capability="create">
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
                  <button type="submit" id="btn">
                    Add Item
                  </button>
                </label>
              </Auth>
            </form>
          </div>

          <List
            deleteItem={deleteItem}
            items={paginatedList}
            toggleComplete={toggleComplete}
          />

          <Pagination
            itemsPerPage={settings.items}
            total={filteredList.length / settings.items + 2}
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
