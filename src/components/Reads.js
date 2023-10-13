import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUser } from '../features/userDeatailsSlice'; // Make sure to use the correct import path

const Reads = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app); // Assuming your Redux store is properly set up

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (loading) {
    return <h2>ALL DATA</h2>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {users &&
        users.map((ele) => (
          <div className="w-64 h-80 bg-white border border-white shadow-xl backdrop-blur-lg rounded-lg text-center cursor-pointer transition-transform transform hover:scale-105 active:scale-95 rotate-1" key={ele.id}>
            <div className="flex flex-col h-full justify-center">
              <p className="font-bold italic text-black">Name: {ele.name}</p>
              <p className="font-bold italic text-black">Email: {ele.email}</p>
              <p className="font-bold italic text-black">Age: {ele.age}</p>
              <p className="font-bold italic text-black">Gender: {ele.gender}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Reads;
