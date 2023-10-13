import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { createUser } from '../features/userDeatailsSlice';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [users, setUsers] = useState({
   
  });
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleChange = (e) => {
    // const { name, value } = e.target;
    setUsers({ ...users, [e.target.name]:e.target.value });
    console.log(users)
  };

  const handleSubmit = (e) => {
e.preventDefault()
    console.log("Users--",users)
 dispatch(createUser(users))
 navigate('/read')

  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">SECSTORE</h1>
          <p className="text-white mt-1">Here you come and store your data with security</p>
          <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white"  onSubmit={handleSubmit}>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              {/* ... */}
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="name"
              value={users.name}
              onChange={handleChange}
              placeholder="Full name"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {/* ... */}
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="email"
              value={users.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {/* ... */}
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="age"
              value={users.age}
              onChange={handleChange}
              placeholder="Age"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <label className="mr-2">Gender:</label>
            <input type="radio" id="male" name="gender" value="male" className="mr-1" onChange={handleChange} />
            <label htmlFor="male" className="mr-4">Male</label>
            <input type="radio" id="female" name="gender" value="female" className="mr-1" onChange={handleChange} />
            <label htmlFor="female">Female</label>
          </div>
          <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
