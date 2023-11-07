import {classNames} from "@shared/lib/classNames";
import {Button} from "@shared/ui/Button";
import type {FC} from "react";
import {useTranslation} from "react-i18next";

import cls from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

const PageError: FC<PageErrorProps> = props => {
  const {className} = props;

  const {t} = useTranslation();

  const reloadPage = (): void => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.PageError, [className])}>
      <p>{t("UnexpectedError")}</p>

      <Button onClick={reloadPage}>{t("RefreshPage")}</Button>
    </div>
  );
};

export default PageError;
