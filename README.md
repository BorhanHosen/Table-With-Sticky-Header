# Table with Sticky Header in React

## Problem:

When dealing with large datasets in tables, it becomes difficult for users to track which columns the data belongs to as they scroll down. This is especially troublesome when the table has multiple rows and no clear indication of the column headers when the user scrolls through the content.

In many applications, column headers need to remain visible while scrolling through the data in the table. This is called a **sticky header**. However, implementing a sticky header can be tricky, especially when using libraries or frameworks such as React, without writing complex styles and JavaScript.

## Solution:

In this project, I implemented a **sticky header** for a table in a React application. The header stays at the top of the table even when the user scrolls down through the rows, providing a better user experience.

### Approach:

- I used CSS to achieve the sticky header effect. Specifically, I utilized the `position: sticky;` CSS property to keep the header at the top of the table while allowing the content to scroll underneath it.
- The sticky effect is applied to the `thead` element of the table.
- I used **Tailwind CSS** for styling to make the table visually appealing and responsive, with alternate row coloring for readability.

### Key Features:

- **Sticky Header**: The table's column headers remain fixed at the top as users scroll through the rows.
- **Responsive Table**: The table adapts to different screen sizes and is scrollable when the content exceeds the available space.
- **Clean Styling**: Using Tailwind CSS for styling, the table has a simple, clear design with alternating row colors and a highlighted header.

### Code Example:

The following code demonstrates the implementation of the sticky header feature using React and Tailwind CSS:

```jsx
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
    // ...other users
  ];

  return (
    <div className="w-full h-screen flex justify-center items-center relative bg-slate-800">
      <div className="w-3/4">
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
```
