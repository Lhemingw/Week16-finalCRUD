import React from "react";

export default function Table({users, handleDelete, handleUpdate, handleUpdatePayHours}){
    return (
        <div className="mt-4">
        <h3 className="header">Prior Pay Periods</h3> 
        {/* I want to put the css header */}
        <table className="table table-borderless">
            {/* This is bootstrap */}
            
        <thead>
        
            <tr>
                <th>Paycheck</th>
                <th>Tax</th>
                <th>Total Tax</th>
                <th>Total Saving</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>    
        </thead>
         <tbody>
            {users.map((user,index) =>( //I could not get the users defined so I had to put it in({users})
            //up in the function Table, it was not the empty array I entered on App.js on line 27
            // {users.lengeth > 0 ? users.map((user,index) => )}
             <tr key={index}>
             <td>{user.payCheck}</td>
             <td>{user.tax}</td>
             <td>{user.totalTax}</td>
             <td>{user.totalSaving}</td>

         
                <td>
                <button onClick={(e) => handleDelete(e)}>Delete</button>
                </td>
                <td>
                <button onClick={(e) => handleUpdate(e)}>Update</button>   
                </td>
                <td>
                {/* <button onClick={(e) => handleUpdatePayHours(e)}>Update</button>    */}
                </td>
          

             
             {/* <button onClick={() => handleDelete()}>Delete</button> */}

            {/* <td><button onClick={() => handleUpdate()}>Update</button></td> */}

             </tr>   
            ))}
            </tbody>
        </table>
        </div>
    )
}