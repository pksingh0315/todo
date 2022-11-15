import { useState } from "react";
import Display from "./Display";
import Button from "./UI/Button";
import styles from "./Todo.module.css";
const Todo = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState([]);
  const [noData, setNoData] = useState(true);
  const [searchSuccess, setSearchSuccess] = useState(false);

  const clickHandler = (e) => {
    //console.log(e)
    if (task === "" || date === "") {
      setNoData(false);
      return;
    }
    const itemObj = {
      taskName: task,
      taskDate: date,
    };
    let itemList = [itemObj, ...data];
    setData(itemList);
    setNoData(true);
    setTask("");
    setDate("");
  };
  //**********for Edit data *******************/
  const editHandler = (item, index) => {
    setTask(item.taskName);
    setDate(item.taskDate);

    const newdata = data.filter((d, i) => {
      return index !== i;
    });
    setData(newdata);
  };
  //*******************************search***************** */
  //console.log(data)
  const searchHandler = (event) => {
    //console.log(event.target.value)

    let result = data.filter((ele) => {
      if (event.keyCode === 13) {
        if (ele.taskName === event.target.value) {
          return ele;
        }
      }
  });

    if(result.length === 1){
      setSearchSuccess(true)
    }else{
      setSearchSuccess(false)
    }
  };

  return (
    <>
      {noData === false ? (
        <h2 style={{ color: "red", textAlign: "center" }}>
          Please Fill All Input Box!
        </h2>
      ) : (
        ""
      )}
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <input
          type="date"
          placeholder="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <Button onClick={clickHandler}>Submit</Button>
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="Search" onKeyUp={searchHandler}></input>
      </div>

      <Display
        item={data}
        item2={setData}
        item3={editHandler}
        value={searchSuccess}
      />
    </>
  );
};
export default Todo;
