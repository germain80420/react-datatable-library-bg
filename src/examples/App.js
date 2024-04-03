import React from "react";
import { DataTable } from "../lib";

const App = () => {
  const columns = [
    { title: "First Name", data: "firstName"},
    { title: "Last Name", data: "lastName" },
    { title: "City", data: "city"},
    { title: "Birthday", data: "birthday"},
  ];
  
  const data = [
    { firstName: "Davonte", lastName: "Gerhold", city: "Bossier City", birthday: "1952-02-15" },
		{ firstName: "Narciso", lastName: "Goodwin", city: "South Bethel", birthday: "1994-07-16" },
		{ firstName: "Arely", lastName: "Rowe", city: "South Reese", birthday: "1970-01-16" },
		{ firstName: "Tyler", lastName: "Dare", city: "New Hoytburgh", birthday: "1964-03-17" },

  ]
  return(
  <main>
			<DataTable columns={columns} data={data} />
	</main>

  )
}
  

export default App;
