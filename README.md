# react-datatable-library-bg

A React library to display a table using 2 arrays of objects

## Installation

```
npm install react-datatable-library-bg
```
## Exemple of usage
import { DataTable } from "react-datatable-library-bg";

const App = () => {
	const columns = [
		{ title: "First Name", data: "firstName" },
		{ title: "Last Name", data: "lastName" },
		{ title: "City", data: "city" },
		{ title: "Birthday", data: "birthday" },
	];

	const data = [
		{ firstName: "Davonte", lastName: "Gerhold", city: "Bossier City", birthday: "1952-02-15" },
		{ firstName: "Narciso", lastName: "Goodwin", city: "South Bethel", birthday: "1994-07-16" },
		{ firstName: "Arely", lastName: "Rowe", city: "South Reese", birthday: "1970-01-16" },
		{ firstName: "Tyler", lastName: "Dare", city: "New Hoytburgh", birthday: "1964-03-17" },
	];

	return (
		<main>
			<DataTable columns={columns} data={data} />
		</main>
	);
};

## Columns array
This array is use to render the head columns
- title: the title of the column displayed in the table header
- data: the key of the column that we will use in the data array

## Data array
This array must contain the data of the table, every object will be a row.

The key must be the data of the column and the value will be the data in the row/column.
## Props list
|Name|Type|Required|Description|
|--- |--- |--- |--- |
|data|arrayOf|Yes|The data to be displayed in the table|
|columns|arrayOf|Yes|The columns to be displayed in the table|

## Author
**Bonnard Germain** : [**GitHub**](https://github.com/germain80420)