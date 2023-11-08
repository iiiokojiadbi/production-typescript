import {classNames} from "@shared/lib/classNames";
import type {FC} from "react";
import {useTranslation} from "react-i18next";

import cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = props => {
  const {className} = props;
  const {t} = useTranslation();

  return (
    <div className={classNames(cls.NotFoundPage, [className])}>{t("NotFoundPage")}</div>
  );
};

export default NotFoundPage;
