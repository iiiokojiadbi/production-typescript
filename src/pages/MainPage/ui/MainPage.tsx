import {Counter} from "@entities/Counter";
import {BugButton} from "@widgets/BugButton";
import type {FC} from "react";
import {useTranslation} from "react-i18next";

const MainPage: FC = () => {
  const {t} = useTranslation("main");

  return (
    <div>
      <BugButton />
      {t("MainPage")}
      <Counter />
    </div>
  );
};

export default MainPage;
