import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/todos",
    children: [
      {
        path: "create",
        element: <TodoCreate />,
      },
      {
        path: "edit/:todoId",
        element: <TodoList />,
      }
    ],
  },
  {
    path: "*",
    element: <TodoCreate />
  },
]);
