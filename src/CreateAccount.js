import React from "react";

const CreateAccount = props => {
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [userMsg, setUserMsg] = React.useState("");

  const changeName = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  const changeUsername = e => {
    e.preventDefault();
    setUsername(e.target.value);
    // check username in database
    // if exist set false else true
  };

  const changePassword = e => {
    e.preventDefault();
    setUserPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name !== "" && username !== "" && userPassword !== "") {
      setUserMsg("Thank you for Signing Up");
      setTimeout(() => {
        setUserMsg("");
      }, 5000);
    }
    setName("");
    setUsername("");
    setUserPassword("");
  };

  const storeUserDetails = () => {
    props.onCreate({
      name: name,
      username: username,
      password: userPassword
    });
  };

  return (
    <div>
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <strong>Name</strong>
          </label>
        </div>
        <div>
          <input
            type="text"
            required
            value={name}
            onChange={changeName}
            placeholder="input name"
          ></input>
        </div>
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
        <button onClick={storeUserDetails}>Create an Account</button>
        <div>
          <strong>{userMsg}</strong>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
