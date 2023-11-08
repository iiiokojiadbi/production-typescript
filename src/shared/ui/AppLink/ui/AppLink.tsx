import {classNames} from "@shared/lib/classNames";
import type {FC} from "react";
import type {LinkProps} from "react-router-dom";
import {Link} from "react-router-dom";

import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = props => {
  const {to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps} = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, [className, cls[theme]])}
      {...otherProps}>
      {children}
    </Link>
  );
};

export default AppLink;
