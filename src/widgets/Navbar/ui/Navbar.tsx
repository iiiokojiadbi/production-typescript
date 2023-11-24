import {LangSwitcher} from "@features/LangSwitcher";
import {ThemeSwitcher} from "@features/ThemeSwitcher";
import {classNames} from "@shared/lib/classNames";
import type {FC} from "react";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({className}: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, [className])}>
      {/* <div className={cls.links}>/</div> */}
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
