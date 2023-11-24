import AboutSvg from "@shared/assets/icons/about.svg";
import HomeSvg from "@shared/assets/icons/home.svg";
import {RoutePath} from "@shared/config/routerConfig";
import {classNames} from "@shared/lib/classNames";
import {AppLink, AppLinkTheme} from "@shared/ui/AppLink";
import {Button, ButtonTheme} from "@shared/ui/Button";
import {ButtonSize} from "@shared/ui/Button/ui/Button";
import type {FC} from "react";
import {useState} from "react";
import {useTranslation} from "react-i18next";

import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = props => {
  const {t} = useTranslation();

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
      })}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.XL}
        square
        className={classNames(cls.collapseBtn)}
      >
        {collapsed ? ">" : "<"}
      </Button>

      <div className={cls.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          title={t("Main")}
          className={cls.link}
          to={RoutePath.main}
        >
          <HomeSvg className={cls.icon} />
          <span className={cls.text}>{t("Main")}</span>
        </AppLink>

        <AppLink
          theme={AppLinkTheme.SECONDARY}
          title={t("Main")}
          className={cls.link}
          to={RoutePath.about}
        >
          <AboutSvg className={cls.icon} />
          <span className={cls.text}>{t("AboutUs")}</span>
        </AppLink>
      </div>
    </div>
  );
};

export default Sidebar;
