import { Route, Routes } from "react-router-dom";
import AddTodo from "../components/page/AddTodo";
import ListTodo from "../components/page/ListTodo";

const MainRoutes = () => {
  const routes = [
    {
      link: "/add",
      element: <AddTodo />,
      id: 1,
    },
    {
      link: "/list",
      element: <ListTodo />,
      id: 2,
    },
  ];
  return (
    <Routes>
      {routes.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
