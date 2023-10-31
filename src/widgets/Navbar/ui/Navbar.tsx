import { classNames } from "shared/lib/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { RoutePath } from "shared/config/routerConfig";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cls.mainLink}
          to={RoutePath.main}
        >
          {t("Main")}
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cls.mainLink}
          to={RoutePath.about}
        >
          {t("AboutUs")}
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
