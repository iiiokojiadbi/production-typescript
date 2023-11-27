import "@app/styles/index.scss";

import {AppRouter} from "@app/providers/router";
import {useTheme} from "@app/providers/ThemeProvider";
import {classNames} from "@shared/lib/classNames";
import {Modal} from "@shared/ui/Modal";
import {Navbar} from "@widgets/Navbar";
import {Sidebar} from "@widgets/Sidebar";
import type {FC} from "react";
import {Suspense, useState} from "react";

const App: FC = () => {
  const {theme} = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames("app", [theme])}>
      <Suspense fallback="">
        <Navbar />
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          toggle
        </button>
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit nulla
          praesentium accusamus, id omnis nemo beatae eius fugit assumenda eum ab
          excepturi quibusdam dicta. Odit facere voluptas quam optio! Rem placeat totam
          deserunt veritatis, nisi unde cupiditate dolorum consectetur incidunt accusamus,
          optio voluptas eaque sunt, ratione autem quas animi fugit eveniet aut officia
          eum delectus repellendus? Quas, neque soluta? Velit obcaecati quasi deleniti
          quidem repellendus aut, perferendis doloremque, quisquam, similique quaerat
        </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export {App};
