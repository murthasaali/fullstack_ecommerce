import React from 'react'
import { MDBIcon } from 'mdb-react-ui-kit';
function Dashboard() {
    const users = [
        { id: 1, username: 'murthasa', email: 'user1@example.com' },
        { id: 2, username: 'shifu', email: 'user2@example.com' },
        { id: 3, username: 'ponnu', email: 'user3@example.com' },
        { id: 4, username: 'ayshu', email: 'user3@example.com' },
        { id: 6, username: 'richu', email: 'user3@example.com' },
        { id: 7, username: 'richu', email: 'user3@example.com' },
        { id: 8, username: 'richu', email: 'user3@example.com' },
        { id: 9, username: 'richu', email: 'user3@example.com' },

        // Add more user data as needed
    ];

    return (
        <div className=' w-full h-full  mr-4 ' >
            <div className=' w-full h-20 flex items-center justify-around'>
                <h2>Murthasa</h2>
                <input className='h-12 w-96 rounded-full bg-blue-200 p-2 text-8' placeholder='search' />
                <p>logout <MDBIcon fas icon="sign-out-alt" /></p>
            </div>
            <div className='w-full h-11/12  mt-2'>

                <div class="grid grid-cols-3 gap-4  h-1/2 p-3 place-items-center  w-full rounded">
                    <div className='w-full h-52 rounded  bg-cyan-800 p-4'>
                        <p className='text-white text-2xl'> users</p>
                        <p className='text-6xl text-green-500'>500</p>
                        <p className='text-xl text-gray-200'> 45% increased</p>

                    </div>
                    <div className='w-full h-52 rounded p-4 bg-cyan-800'>
                        <p className='text-white text-2xl'> orders</p>
                        <p className='text-6xl text-green-500'>1240</p>
                        <p className='text-xl text-gray-200'> 60% increased</p>

                    </div>
                    <div className='w-full h-52 rounded p-4 bg-cyan-800'>
                        <p className='text-white text-2xl'> products</p>
                        <p className='text-6xl text-green-400'>18</p>
                        <p className='text-xl text-gray-200'> this month 2 products added</p>
                    </div>
                </div>
                <div className="grid grid-cols-4 h-96   gap-4 p-3 place-items-center mt-0 w-full rounded">

                    <div className='w-full  h-80 col-start-1 col-end-3 rounded text-white bg-cyan-800 overflow-auto'>
                        <div className="container mx-auto p-4 ">
                            <table className="min-w-full border-collapse block md:table ">
                                <thead className=" ">
                                    <tr>
                                        <th className="text-left p-2">Username</th>
                                        <th className="text-left p-2">ID</th>
                                        <th className="text-left p-2">Email</th>
                                    </tr>
                                </thead>
                                <tbody className="text-green-900 ">
                                    {users.map((user) => (
                                        <tr key={user.id} className="md:table-row  text-gray-200">
                                            <td className="p-2 md:table-cell">{user.username}</td>
                                            <td className="p-2 md:table-cell">{user.id}</td>
                                            <td className="p-2 md:table-cell">{user.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className='w-full  h-80 p-6 flex flex-column transition hover:-translate-y-1 hover:scale-96 duration-300  bg-contain justify-end col-start-3 opacity-75 col-end-5 rounded bg-[url("https://t4.ftcdn.net/jpg/06/30/38/81/240_F_630388183_oqW9fiHeISVJ20hy03s9WA4UamoQygVg.jpg")]  bg-cyan-800'>

                        <p className='text-white text-2xl '> Sales</p>
                        <p className='text-6xl text-green-500'>80%</p>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard