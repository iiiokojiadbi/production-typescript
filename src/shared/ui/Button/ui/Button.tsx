import {classNames, type TAdditional, type TMods} from "@shared/lib/classNames";
import type {ButtonHTMLAttributes, FC} from "react";

import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

const Button: FC<ButtonProps> = props => {
  const {
    children,
    className,
    theme = "",
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const additional: TAdditional = [className, cls[size], cls[theme]];
  const mods: TMods = {
    [cls.square]: square,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, additional, mods)}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
