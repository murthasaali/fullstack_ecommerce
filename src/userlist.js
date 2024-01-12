import React, { useContext, useState } from 'react';
import { mycontext } from './home';
import { MDBIcon } from 'mdb-react-ui-kit';

function Userlist() {
  const [view, setView] = useState(false);
  const { prof } = useContext(mycontext);
  const [selectedUser, setSelectedUser] = useState({});
  const [details, setdetails] = useState(null);
 

  const toggleView = (id) => {
    const user = prof.find((value) => value.id === id);
    setSelectedUser(user);

    setView(true);
    const order=user.orders
    setdetails(order)
  };


  return (
    <div>
      {view &&  
        <div className='bg-purple-200 fixed z-2 w-3/4 h-5/6 mr-62 focus:outline-none mt-8 ml-5 flex-column flex  rounded'>
          <div className='bg-black h-1/2 w-full flex flex-column rounded gap-4 items-center justify-center'>
            <div className='bg-white h-52 w-52 rounded-full'>{/* Render user photo here */}</div>

            <p className='text-white text-3xl'>{selectedUser.email}</p>
          </div>
          <div className='bg-white h-1/2 w-full rounded'>
            <h2>Purchased Products:</h2>
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr>
                  <th className="border border-gray-400 p-2">Product Name</th>
                  <th className="border border-gray-400 p-2">Unit Price</th>
                  <th className="border border-gray-400 p-2">Quantity</th>
                  <th className="border border-gray-400 p-2">Total Price</th>
                </tr>
              </thead>
              <tbody>
                
      {
        details.map((value)=>
        <tr key={value.id}>
        <td className="border border-gray-400 p-2">{value.name}</td>
        <td className="border border-gray-400 p-2">{value.unitPrice}</td>
        <td className="border border-gray-400 p-2">{value.quantity}</td>
        <td className="border border-gray-400 p-2">{value.unitPrice* value.quantity}</td>
      </tr>
        
        )
      }
             
          
              
      
              </tbody>
            </table>
          </div>
        </div>
      }

      <div className="overflow-x-auto p-5 rounded flex flex-column gap-20 ">
            <div  className='flex justify-around items-center '>
              <p  className='text-5xl  text-bold '>User Details </p> 
              <MDBIcon fas icon='user' className='text-3xl'/>
            </div>
        <table className=" h-3/4 w-full rounded-lg">
          <thead className='min-w-full bg-cyan-800  rounded-lg  p-4 mt-12'>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Username</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className='bg-white rounded-lg divide-y divide-gray-200'>
            {prof.reverse().map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap" onClick={() => toggleView(item.id)}>
                  <MDBIcon fas icon='eye' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Userlist;
