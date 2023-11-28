import {LangSwitcher} from "@features/LangSwitcher";
import {ThemeSwitcher} from "@features/ThemeSwitcher";
import {classNames} from "@shared/lib/classNames";
import {Button, ButtonTheme} from "@shared/ui/Button";
import {Modal} from "@shared/ui/Modal";
import {type FC, useCallback, useState} from "react";
import {useTranslation} from "react-i18next";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({className}: NavbarProps) => {
  const {t} = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback((): void => {
    setIsAuthModal(prev => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
        {t("Login")}
      </Button>

      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        123
      </Modal>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
