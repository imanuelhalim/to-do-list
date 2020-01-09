import React from "react";

const UserLogin = props => {
  const [username, setUsername] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [loginStatus, setLoginStatus] = React.useState(false);
  const [userAttempt, setUserAttempt] = React.useState("");
  const [users, setUsers] = React.useState([]);

  const changeUsername = e => {
    e.preventDefault();
    setUsername(e.target.value);
    setUsers(props.users());
  };

  const changePassword = e => {
    e.preventDefault();
    setUserPassword(e.target.value);
    // setUsers(props.users());
  };

  const displayResult = (loginStatus, userAttempt) => {
    if (!loginStatus && userAttempt === "user attempt") {
      return <div>Incorrect Username and Password</div>;
    }
  };

  const inputDetails = input =>
    input.username === username && input.password === userPassword;

  const verifyData = () => {
    setLoginStatus(users.some(inputDetails));
  };

  const handleSubmit = e => {
    e.preventDefault();
    loginStatus ? props.onSuccess(username) : setUserAttempt("user attempt");
  };

  return (
    <div>
      <h1>User Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <strong>Username</strong>
          </label>
        </div>
        <div>
          <input
            type="text"
            required
            value={username}
            onChange={changeUsername}
            placeholder="input username"
          ></input>
        </div>
        <div>
          <label>
            <strong>Password</strong>
          </label>
        </div>
        <div>
          <input
            type="text"
            required
            value={userPassword}
            onChange={changePassword}
            placeholder="input password"
          ></input>
        </div>
        <button onClick={verifyData}>Login</button>
        <div>{displayResult(loginStatus, userAttempt)}</div>
      </form>
    </div>
  );
};

export default UserLogin;
