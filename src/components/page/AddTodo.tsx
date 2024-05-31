import { useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { postReq } from "../../redux/feature/TodoSlices";

const AddTodo = () => {
  const [inputValues, setInputValues] = useState({
    title: "",
    image: "",
  });

  const dispatch = useAppDispatch();

  function handleAddTodo() {
    dispatch(postReq(inputValues));
  }

  return (
    <div>
      <input
        onChange={(e) =>
          setInputValues({ ...inputValues, title: e.target.value })
        }
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(e) =>
          setInputValues({ ...inputValues, image: e.target.value })
        }
        type="text"
        placeholder="Iamge"
      />
      <button onClick={handleAddTodo}>create</button>
    </div>
  );
};

export default AddTodo;
