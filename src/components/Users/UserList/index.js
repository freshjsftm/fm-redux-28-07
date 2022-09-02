import React, {useEffect} from 'react';
import { connect } from 'react-redux';

const UserList = (props) => {
  const {users, isFetching, error} = props;
  useEffect(()=>{}, [])
  return (
    <section>
      <h2>Users List</h2>
      {isFetching && <p>Loading...</p>}
      {error && <p>{error.message}</p>} 
      <ul>
        {
          users.map((user)=>(<li key={user.id}>{user.email}</li>))
        }
      </ul>
    </section>
  );
}

const mapStateToProps = ({usersState})=>usersState;
const mapDispatchToProps = (dispatch)=>({})

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
