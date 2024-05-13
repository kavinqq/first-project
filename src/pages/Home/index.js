import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "../../global/constants"
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

// Promise 是一種對象，代表一個將來會完成的異步操作，並且這個操作的結果可能是成功的，也可能是失敗的。
// Promise會有三種狀態: pending(進行中), fulfilled(成功), rejected(失敗)
async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  // 大括號是解構賦值, 如果沒有用大括號, 會是一個物件, 內容是{"id": "1", data: Array(0)}
  // 用大括號, 只取data的部分
  const { data } = await res.json();
  setData(data)
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({data}),
  });
}


const Home = () => {
  // useState: 用來掌控元件的狀態
  const [data, setData] = useState([]);
  // useRef: 這個變數永遠會維持最新的值, 不管渲染幾次都是最新的值, 除非手動更改
  const submittingStatus = useRef(false);

  useEffect(() => {
    if (!submittingStatus.current){
      return
    }
    fetchSetData(data)
      .then(() => submittingStatus.current = false)
  }, [data])

  // useEffect: 當元件有變動時，觸發的函式(假設是show新增成功的訊息)
  // 我去觀察data的變動，當data有變動時，我就要觸發這個函式(綁定一個依賴關係一個State, 綁定data)
  // 在渲染(白色的頁面是畫布, 把畫面畫出來或擦掉再次畫出來)的時候會執行第一次
  // 如果綁定空陣列, 只會執行一次(只有在第一次渲染的時候執行)
  useEffect(() => {
    fetchData(setData)
  }, [])

  return (
    <div className="app">
      <Edit add={setData} submittingStatus={submittingStatus} />
      <List listData={data} removeItem={setData} submittingStatus={submittingStatus} />
    </div>
  );
};

export default Home;
