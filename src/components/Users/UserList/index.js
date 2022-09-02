import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import * as ActionsUserCreators from "../../../actions/userCreators";

const UserList = (props) => {
  const {users, isFetching, error, getUsersRequestDispatch} = props;
  const loadMore = ()=>getUsersRequestDispatch({offset:users.length});
  //useEffect(()=>{getUsersRequestDispatch({offset:users.length})}, [])
  useEffect(()=>{loadMore()}, [])
  return (
    <section>
      <h2>Users List</h2>
      <button onClick={loadMore}>Load more</button>
      {isFetching && <p>Loading...</p>}
      {error && <p>{error.message}</p>} 
      <ul style={{maxHeight:'60vh', overflow:'auto', border:'3px solid teal'}}>
        {
          users.map((user)=>(<li key={user.id}>{user.email}</li>))
        }
      </ul>
    </section>
  );
}

const mapStateToProps = ({usersState})=>usersState;
const mapDispatchToProps = (dispatch)=>({
  getUsersRequestDispatch: ({limit, offset}) => 
      dispatch(ActionsUserCreators.getUsersRequest({limit, offset}))
})
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
