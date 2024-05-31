import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { deleteReq, getReq } from "../../redux/feature/TodoSlices";

const ListTodo = () => {
  const { todo } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getReq());
  }, []);

  return (
    <div>
      {todo.map((el, index) => (
        <div key={index}>
          <h4>{el.title}</h4>
          <img src={el.image} alt="img" />
          <button onClick={() => dispatch(deleteReq(el._id))}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
