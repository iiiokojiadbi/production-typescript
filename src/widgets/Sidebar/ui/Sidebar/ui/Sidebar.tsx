import {LangSwitcher} from "@features/LangSwitcher";
import {ThemeSwitcher} from "@features/ThemeSwitcher";
import {classNames} from "@shared/lib/classNames";
import type {FC} from "react";
import {useState} from "react";

import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = props => {
  const {className} = props;

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = (): void => {
    setCollapsed(prev => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, [className], {
        [cls.collapsed]: collapsed,
      })}>
      <button onClick={onToggle}>TOGGLE</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
