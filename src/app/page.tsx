"use client"
import { Provider } from "react-redux";
import store from "./redux/store";
import Questions from "./components/Questions";

export default function Home() {
  return (
    <Provider store={store}>
      <div className=" border-gray-800">
      {<Questions/>}
      </div>
      </Provider>
  );
}
