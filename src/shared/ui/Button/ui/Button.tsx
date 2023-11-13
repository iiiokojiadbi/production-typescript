import {classNames} from "@shared/lib/classNames";
import type {ButtonHTMLAttributes, FC} from "react";

import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
}

const Button: FC<ButtonProps> = props => {
  const {children, className, theme, square, ...otherProps} = props;

  return (
    <button
      type="button"
      className={classNames(
        cls.Button,
        [className, theme != null ? cls[theme] : undefined],
        {
          [cls.square]: square,
        },
      )}
      {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
