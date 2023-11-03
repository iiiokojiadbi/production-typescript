import type {FC} from "react";
import cls from "./Loader.module.scss";
import {classNames} from "@shared/lib/classNames";

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = props => {
  const {className} = props;

  return (
    <div className={classNames(cls.Loader, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Loader;
