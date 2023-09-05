import React, { useEffect } from "react";
import { useState } from "react";
import Auth from "../auth/auth";

const List = (props) => {

  return (
    <>
   

    <div>
      {props.items.map((item) => (
        <div className="list-item" key={item.id}>
          <p>{item.item}</p>
          <p>
            <small>Assigned to: {item.assignedTo}</small>
          </p>
          <p>
            <small>Difficulty: {item.difficulty}</small>
          </p>
          <Auth capability="update">
          <div
            className="complete"
            onClick={() => props.toggleComplete(item.id)}
          >
            Complete: {item.complete.toString()}
          </div>
          </Auth>
          <Auth capability="delete">
          <button onClick={()=>props.deleteItem(item.id)}>Delete Item</button>
          </Auth>
          <hr />
        </div>
      ))}
    </div>
    </>
  );
};
export default List;
