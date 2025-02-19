import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import React from 'react';
import { fetchUsers } from '../Redux/counterSlice';

const LazyComponent = () => {
  const dispatch=useDispatch()
  const users = useSelector((state) => state.counterReducer.users);
  return (
    <div>
      <h2>This is the lazy-loaded component!</h2>
      <button onClick={()=>dispatch(fetchUsers())}>Fetch Users Data</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LazyComponent;
