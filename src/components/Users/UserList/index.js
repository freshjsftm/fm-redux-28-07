import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import * as ActionsUserCreators from "../../../actions/userCreators";

const UserList = (props) => {
  const { users, isFetching, error } = useSelector(
    ({ usersState }) => usersState
  );
  const { getUsersRequest, clearUserError } = bindActionCreators(
    ActionsUserCreators,
    useDispatch()
  );
  const loadMore = () => getUsersRequest({ offset: users.length });
  useEffect(() => {
    loadMore();
  }, []);
  return (
    <section>
      <h2>Users List</h2>
      <button onClick={loadMore}>Load more</button>
      {isFetching && <p>Loading...</p>}
      {error && (
        <div style={{ color: "red", backgroundColor: "#ff000033" }}>
          <p>{error.message}</p>
          <button onClick={clearUserError}>X</button>
        </div>
      )}
      <ul
        style={{
          maxHeight: "60vh",
          overflow: "auto",
          border: "3px solid teal",
        }}
      >
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </section>
  );
};
export default UserList;
