import {classNames} from "@shared/lib/classNames";
import {Loader} from "@shared/ui/Loader";
import type {FC} from "react";

import cls from "./PageLoader.module.scss";

interface PageLoaderProps {
  className?: string;
}

const PageLoader: FC<PageLoaderProps> = props => {
  const {className} = props;

  return (
    <div className={classNames(cls.PageLoader, [className])}>
      <Loader />
    </div>
  );
};

export default PageLoader;
