import {Button} from "@shared/ui/Button";
import {type FC, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

const BugButton: FC = () => {
  const {t} = useTranslation();

  const [error, setError] = useState(false);

  const onThrow = (): void => {
    setError(true);
  };

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return <Button onClick={onThrow}>{t("ShowError")}</Button>;
};

export default BugButton;
