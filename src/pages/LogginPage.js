import { getAllUsers, getAllQuestions } from "../DATA";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, loadQuestions } from "../actions";
import { Link } from "react-router-dom";
import { useState } from "react";

function LogginPage() {

  const [value, setValue] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const users = useSelector((state) => state.users);
  console.log(users, "users");
  const dispatch = useDispatch();

  getAllUsers().then((res) => {
    dispatch(loadUsers(res));
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true); 
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  // getAllQuestions().then((res)=>{dispatch(loadQuestions(res))})
  return (
    <div>
     <form onSubmit={handleSubmit}>
      <p>Choose your Account:</p>
       <select value={value} onChange={handleChange}>
        {Object.values(users).map((user, i) => {
          console.log(user, "the USER");
          return (
            <option key={i} value={user}>
              {user}
            </option>
          );
        })}
      </select>
      <button onClick={handleSubmit}>Submit</button>
      {submitting && <Link to="/Home"></Link>}
      </form>
    </div>
  );

    }
export default LogginPage;
