import {classNames} from "@shared/lib/classNames";
import {type FC, type MouseEvent, useCallback, useEffect, useRef, useState} from "react";

import cls from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = props => {
  const {className, children, isOpen, onClose} = props;

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onCloseHandler = useCallback((): void => {
    if (onClose != null) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onClickContentHandler = (e: MouseEvent): void => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === "Escape") onCloseHandler();
    },
    [onCloseHandler],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      if (timerRef.current != null) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  return (
    <div className={classNames(cls.Modal, [className], mods)}>
      <div className={cls.overlay} onClick={onCloseHandler}>
        <div className={cls.content} onClick={onClickContentHandler}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
