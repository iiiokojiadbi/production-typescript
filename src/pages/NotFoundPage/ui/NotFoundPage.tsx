import type {FC} from "react";
import cls from "./NotFoundPage.module.scss";
import {useTranslation} from "react-i18next";
import {classNames} from "@shared/lib/classNames";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = props => {
  const {className} = props;
  const {t} = useTranslation("not-found");

  return (
    <div className={classNames(cls.NotFoundPage, [className])}>
      {t("NotFoundPage")}
    </div>
  );
};

export default NotFoundPage;
