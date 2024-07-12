"use client"
import { Provider } from "react-redux";
import store from "./redux/store";
import Questions from "./components/Questions";

export default function Home() {
  return (
    <Provider store={store}>
      {<Questions/>}
      </Provider>
  );
}
