import { lazy } from 'react';

const MainPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setTimeout(() => { resolve(import('./MainPage')); }, 1500);
    })
);

export default MainPageAsync;
