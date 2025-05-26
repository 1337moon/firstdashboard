'use client'
import React, { useEffect, useState } from 'react';

const Table = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="w-full p-4">
      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="text-gray-950">
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={`https://i.pravatar.cc/150?u=${user.id}`}
                            alt={user.name}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm opacity-50">{user.username}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    {user.company.name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {user.company.bs}
                    </span>
                  </td>
                  <td>{user.address.city}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>City</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;