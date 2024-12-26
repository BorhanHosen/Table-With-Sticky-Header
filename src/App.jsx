import React from "react";

const App = () => {
  // Modified dummy data array with user information
  const users = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      age: 30,
      country: "USA",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      age: 25,
      country: "UK",
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      age: 35,
      country: "Canada",
    },
    {
      name: "Bob Brown",
      email: "bob.brown@example.com",
      age: 40,
      country: "Australia",
    },
    {
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
      age: 28,
      country: "New Zealand",
    },
    {
      name: "David Wilson",
      email: "david.wilson@example.com",
      age: 45,
      country: "USA",
    },
    {
      name: "Eva Miller",
      email: "eva.miller@example.com",
      age: 22,
      country: "Germany",
    },
    {
      name: "Frank White",
      email: "frank.white@example.com",
      age: 38,
      country: "UK",
    },
    {
      name: "Grace Lee",
      email: "grace.lee@example.com",
      age: 29,
      country: "France",
    },
    {
      name: "Henry King",
      email: "henry.king@example.com",
      age: 33,
      country: "USA",
    },
    {
      name: "Ivy Harris",
      email: "ivy.harris@example.com",
      age: 27,
      country: "Canada",
    },
    {
      name: "Jack Carter",
      email: "jack.carter@example.com",
      age: 50,
      country: "Australia",
    },
    {
      name: "Kelly Scott",
      email: "kelly.scott@example.com",
      age: 31,
      country: "New Zealand",
    },
    {
      name: "Liam Young",
      email: "liam.young@example.com",
      age: 34,
      country: "UK",
    },
    {
      name: "Monica Green",
      email: "monica.green@example.com",
      age: 26,
      country: "USA",
    },
    {
      name: "Nathan Adams",
      email: "nathan.adams@example.com",
      age: 40,
      country: "Germany",
    },
    {
      name: "Olivia Walker",
      email: "olivia.walker@example.com",
      age: 22,
      country: "France",
    },
    {
      name: "Paul Harris",
      email: "paul.harris@example.com",
      age: 29,
      country: "Canada",
    },
    {
      name: "Quinn Evans",
      email: "quinn.evans@example.com",
      age: 37,
      country: "USA",
    },
  ];

  return (
    <div className="w-full h-screen flex justify-center items-center relative bg-slate-800">
      <div className="w-3/4">
        {/* Adding the heading */}
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Table With Sticky Header
        </h1>
        <div className="p-5 bg-white">
          <div className="p-5 bg-white shadow-[0_0_5px_gray] rounded">
            <div className="h-52 w-full overflow-auto border-4 border-slate-300">
              <table className="h-32 bg-slate-400 p-5 sticky top-0 text-center w-full">
                <thead className="sticky top-0">
                  <tr>
                    <th className="bg-teal-500 border-x-2">Name</th>
                    <th className="bg-teal-500 border-x-2">Email</th>
                    <th className="bg-teal-500 border-x-2">Age</th>
                    <th className="bg-teal-500 border-x-2">Country</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr
                      key={index}
                      className={`even:bg-blue-300 font-[500] ${
                        index % 2 === 0 ? "bg-blue-200" : ""
                      }`}
                    >
                      <td className="border-x-2 border-slate-300">
                        {user.name}
                      </td>
                      <td className="border-x-2 border-slate-300">
                        {user.email}
                      </td>
                      <td className="border-x-2 border-slate-300">
                        {user.age}
                      </td>
                      <td className="border-x-2 border-slate-300">
                        {user.country}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
