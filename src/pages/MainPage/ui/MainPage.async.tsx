import { lazy } from "react";

const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(() => resolve(import("./MainPage")), 1500);
    })
);

export default MainPageAsync;
