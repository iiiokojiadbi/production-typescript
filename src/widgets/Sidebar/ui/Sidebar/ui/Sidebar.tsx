import {LangSwitcher} from "@features/LangSwitcher";
import {ThemeSwitcher} from "@features/ThemeSwitcher";
import {classNames} from "@shared/lib/classNames";
import {Button} from "@shared/ui/Button";
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
      data-testid="sidebar"
      className={classNames(cls.Sidebar, [className], {
        [cls.collapsed]: collapsed,
      })}>
      <Button data-testid="sidebar-toggle" onClick={onToggle}>
        TOGGLE
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
