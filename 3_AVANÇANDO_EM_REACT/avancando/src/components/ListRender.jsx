import React, { useState } from "react";

const ListRender = () => {
  const [list] = useState(["matheus, daniel, jessica, junio, diego"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Daniel", age: 34 },
    { id: 2, name: "Jessica", age: 30 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}- {user.age}
          </li>
        ))}
      </ul>

      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
