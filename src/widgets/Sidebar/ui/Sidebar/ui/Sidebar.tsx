import { classNames } from "shared/lib/classNames";
import cls from "./Sidebar.module.scss";
import { FC, useState } from "react";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { LangSwitcher } from "features/LangSwitcher";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, [className], {
        [cls.collapsed]: collapsed,
      })}
    >
      <button onClick={onToggle}>TOGGLE</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;