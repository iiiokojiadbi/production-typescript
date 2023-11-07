import {BugButton} from "@widgets/BugButton";
import type {FC} from "react";
import {useTranslation} from "react-i18next";

const MainPage: FC = () => {
  const {t} = useTranslation("main");

  return (
    <div>
      <BugButton />
      {t("MainPage")}
    </div>
  );
};

export default MainPage;
