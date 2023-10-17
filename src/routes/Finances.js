import React from "react";
import { useState, useEffect } from "react";
import AboutFinance from "../Components/AboutFinance";
import TableFinance from "../Components/TableFinance";
import Home from "./Home";

//import { Route, Routes, useState } from 'react-router-dom';
//imported state and effect and the components stuff.

export default function Finances() {
  const [users, setUsers] = useState([]);
  const [newPayCheck, setNewPayCheck] = useState("");
  const [newTotalTax, setNewTotalTax] = useState("");
  const [newTotalSaving, setNewTotalSaving] = useState("");

  const [updatedPayCheck, setUpdatedPayCheck] = useState("");
  const [updatedTotalTax, setUpdatedTotalTax] = useState("");
  const [updatedTotalSaving, setUpdatedTotalSaving] = useState("");

  //logged areas using the const with the named updated, and newpaycheck stuffs

  const [newUser, setNewUser] = useState([
    {
      payCheck: "",
      id: "",
      tax: "",
      totalSaving: "",
      totalTax: "",
    },
    //used a blank area on lines 21-25.
  ]);
  function handleDelete(userId) {
    console.log("deleting items..", userId);
   
      // what ever the user id is pass it as pram of mock api

   
    deleteUser(userId)
    console.log("items have deleted....", newUser);
  }
  function handleUpdate(userId, user) {
    console.log("Up dating", userId,user);
    updateUser (user)
    // setNewUser({
    //   ...newUser,
    //   updatedPayCheckValue: updatedPayCheck,
    //   updatedTax: updatedTaxValue,
    //   updatedTotalSaving: updatedTotalSavingValue   These did not work, but kept it.
    // did a console.log to post that I am up dating the handle update.
    // });
  }
//   These are the handleDelete and handleUpdate to run the delete and update
  // Setting the post up, use an empty string

  //Make sure you set up a API that you can CRUD to, such as mockAPI or use a JSON server like in the week 11/12 labs.
  const MOCK_API_URL = "https://64e55febc55563802914592e.mockapi.io/Finances";

  //Create 4 functions, getUsers(){}, deleteUser(){}, updateUser(){}, and postNewUser(){}.

  function getUsers() {
    fetch(MOCK_API_URL)    
      .then((data) => data.json())
      .then((data) => {
        console.log(data);       
        setUsers(data);
      });
  }
 //1) Use fetch(URL) to get from the API 2) Convert the data to JSON  setUSers() to result of that data


  useEffect(() => {
    getUsers();
  }, []);
  function deleteUser(id)  {
    console.log("Deleting user", id);
    fetch(`${MOCK_API_URL}/${id}`, {
      method: "DELETE",
    }).then(() => getUsers());
  }  
  //passed it in a user.id line 32 tablefinance.js.

  function postNewUser(e) {
    e.preventDefault();
    fetch(MOCK_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        payCheck: newPayCheck,
        tax: newTotalTax,
        totalSaving: newTotalSaving,
      }),
    }).then(() => getUsers());
  }
//This is the post for a new user using fetch, using .then for error catch
  function updateUser(e, userObject) {
    console.log("Updating user...", userObject);
    e.preventDefault();
    let updatedUserObject = {
      ...userObject,
      payCheck: updatedPayCheck,
      tax: updatedTotalTax,
      totalSaving: updatedTotalSaving,
    };
    fetch(`${MOCK_API_URL}/${userObject.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedUserObject),
      headers: { "Content-Type": "application/json" },
    }).then(() => getUsers());
  }
//Added the console log to update it along with user in the hadleUpdate on Table Finance
//   I have the CRUD here, using fetch, with an e.preventDefault to prevent refresh.

console.log("new User", newUser);
  return (
   
    <div>
      {/* Had className ="App", took out */}
      <h4>Hi, welcome to the finances page</h4>
      <AboutFinance />
      <TableFinance
        users={users}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
      {/* put in AboutFinance and TableFinance to get the buttons and objects to work */}
      {/* <Home handleupdatePayHours={handleUpdate} />  this did not work the way I wanted*/}
      {/* <TableFinance handleDelete={handleDelete}/> These 2 were not the right way to put it in.*/}
      {/* <TableFinance handleUpdate={handleUpdate}/>  */}
      {/* Is this the right way of handling these delete/update */}
      <form>
        <div className=" row text-center">
          <h3 className="header ">POST new Pay Check</h3>
          {/* <div className="col-md-6 ">
            
            </div> */}
          <div className="col-med-6">
            <label className="mb-3 button2"> Total Paycheck</label>
            {/* Label is on top, input is bottom that has the e.target.value to get it initiated */}

            <input
              type="text"
              className="col-sm-1 button2"
              name="submit"
              value={newPayCheck}
              onChange={(e) => setNewPayCheck(e.target.value)}
            />

            <label className="mb-3 button2">Total Tax</label>
            <input
              type="text"
              className="col-sm-1 button2"
              name="submit"
              value={newTotalTax}
              onChange={(e) => setNewTotalTax(e.target.value)}
            />
           
            <label className="mb-3 form-group button2">Total Saving</label>
            <input
              type="text"
              className="mb-5 col-sm-1 button2"
              name="submit"
              value={newTotalSaving}
              onChange={(e) => setNewTotalSaving(e.target.value)}
            />
            
            <button className="button" onClick={(e) => postNewUser(e)}>
              Submit
            </button>
          </div>
        </div>
      </form>
      {/* <h2>Add Claculator Add a 2nd one here</h2> */}
      {users.map((user, index) => (
        <div className="userContainer" key={index}>
          <div>
            payCheck: {user.payCheck}
            totalTax: {user.tax}
            totalSaving: {user.totalSaving}
            <button className="button" onClick={(e) => deleteUser(user.id)}>
              Delete
            </button>
          </div>

          <form>
            <h3>Update This Paycheck</h3>
            <label className="container">Updated Pay Check</label>
            <input
              type="text"
              name="submit"
              value={updatedPayCheck}
              onChange={(e) => setUpdatedPayCheck(e.target.value)}
            />
            {/* <input type="text" onChange={(e)=> setUpdatedPayCheck(e.target.value)}></input> */}

            <label className="container">Update Pay Check-after tax</label>
            <input
              type="text"
              name="submit"
              value={updatedTotalTax}
              onChange={(e) => setUpdatedTotalTax(e.target.value)}
            />

            <label className="container">Updated Total Saving</label>
            <input
              type="text"
              name="submit"
              value={updatedTotalSaving}
              onChange={(e) => setUpdatedTotalSaving(e.target.value)}
            />
            {/* <input type="text" onChange={(e) => setUpdatedTotalSaving(e.target.value)}></input> */}
            <button className="button" onClick={(e) => updateUser(e, user)}>
              Update
            </button>
          </form>
        </div>
      ))}
    </div>
    // CRUD-opperationCreateItem,ReadItem,UpdateItem,DeleteItem
  );
}
