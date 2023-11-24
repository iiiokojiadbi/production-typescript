import {classNames} from "@shared/lib/classNames";
import {Button, ButtonTheme} from "@shared/ui/Button";
import type {FC} from "react";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = props => {
  const {className} = props;

  const {t, i18n} = useTranslation();

  const onToggle = (): void => {
    void i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      theme={ButtonTheme.BACKGROUND_INVERTED}
      className={classNames("", [className])}
      square
      onClick={onToggle}
    >
      {t("Language")}
    </Button>
  );
};

export default LangSwitcher;
