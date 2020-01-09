import React from "react";
import ToDoListFunctional from "./ToDoListFunctional";
import UserLogin from "./UserLogin";
import CreateAccount from "./CreateAccount";

const Main = () => {
  const [page, setPage] = React.useState("register");
  const [loginStatus, setLoginStatus] = React.useState(false);
  const [userDatabase, setUserDatabase] = React.useState([]);
  const [username, setUsername] = React.useState("");

  const changePage = i => {
    return () => {
      setPage(i);
    };
  };

  const displayPage = () => {
    if (page === "ToDoList") {
      return (
        <div>
          <ToDoListFunctional
            showUser={() => {
              return username;
            }}
          />
        </div>
      );
    } else if (page === "login") {
      return (
        <div>
          <UserLogin
            users={() => {
              return userDatabase;
            }}
            onSuccess={user => {
              setUsername(user);
              setLoginStatus(true);
              setPage("ToDoList");
            }}
          />
        </div>
      );
    } else if (page === "register") {
      return (
        <div>
          <CreateAccount
            onCreate={user => {
              setUserDatabase(userDatabase.concat(user));
            }}
          />
        </div>
      );
    }
  };

  const logout = () => {
    setLoginStatus(false);
    setPage("login");
  };

  return (
    <div>
      <h1>To Do List Program</h1>
      {/* {loginStatus && (
        <button onClick={changePage("ToDoList")}>To Do List</button>
      )} */}
      {!loginStatus && (
        <button onClick={changePage("register")}>Register</button>
      )}
      {!loginStatus && <button onClick={changePage("login")}>Login</button>}
      {loginStatus && <button onClick={logout}>Log Out</button>}
      <div>{displayPage()}</div>
    </div>
  );
};

export default Main;
