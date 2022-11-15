import React from "react";
import styles from "./Display.module.css";
import Button from "./UI/Button";

const Display = (props) => {
  console.log(props.value);

  const deleteHandle = (index) => {
    let data2 = [...props.item];
    data2.splice(index, 1);

    props.item2(data2);
  };

  return (
    <ul className={styles.container}>
      {props.item.map((ele, index) => {
        return (
          <div key={index} className={styles.listbox}>
            <p className={props.value === true ? "active" : ""}>
              {ele.taskName}
            </p>
            <p>{ele.taskDate}</p>
            {/* <h3 >{ele.taskName} {ele.taskDate}</h3> */}
            <Button onClick={() => props.item3(ele, index)}>Edit</Button>
            <Button onClick={() => deleteHandle(index)}>Delete</Button>
          </div>
        );
      })}
    </ul>
  );
};
export default Display;
