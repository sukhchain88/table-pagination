import React from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'
// import { data } from './assets/data.json'

const data = [
  {
    id: 1,
    name: 'Sukh',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 2,
    name: 'Navjot',
    gender: 'Female',
    salary: 133000
  },
  {
    id: 3,
    name: 'Ram',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 4,
    name: 'Sham',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 5,
    name: 'preet',
    gender: 'Female',
    salary: 133000
  },
  {
    id: 6,
    name: 'Sandeep',
    gender: 'Female',
    salary: 133000
  },
  {
    id: 7,
    name: 'Raman',
    gender: 'Female',
    salary: 133000
  },
  {
    id: 8,
    name: 'Noor',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 9,
    name: 'Jot',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 10,
    name: 'Sukhchain',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 11,
    name: 'Sukh',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 12,
    name: 'Navjot',
    gender: 'Female',
    salary: 133000
  },
  {
    id: 13,
    name: 'Ram',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 14,
    name: 'Sham',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 15,
    name: 'preet',
    gender: 'Female',
    salary: 133000
  },
  {
    id: 6,
    name: 'Sandeep',
    gender: 'Female',
    salary: 133000
  },
  {
    id: 17,
    name: 'Raman',
    gender: 'Female',
    salary: 133000
  },
  {
    id: 18,
    name: 'Noor',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 19,
    name: 'Jot',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 20,
    name: 'Sukhchain',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 21,
    name: 'Sukh',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 22,
    name: 'Navjot',
    gender: 'Female',
    salary: 133000
  },
  {
    id: 23,
    name: 'Ram',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 24,
    name: 'Sham',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 25,
    name: 'preet',
    gender: 'Female',
    salary: 133000
  },
  {
    id: 26,
    name: 'Sandeep',
    gender: 'Female',
    salary: 133000
  },
  {
    id: 27,
    name: 'Raman',
    gender: 'Female',
    salary: 133000
  },
  {
    id: 28,
    name: 'Noor',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 29,
    name: 'Jot',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 30,
    name: 'Sukhchain',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 31,
    name: 'Sukh',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 32,
    name: 'Navjot',
    gender: 'Female',
    salary: 133000
  },
  {
    id: 33,
    name: 'Ram',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 34,
    name: 'Sham',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 35,
    name: 'preet',
    gender: 'Female',
    salary: 133000
  },
  {
    id: 36,
    name: 'Sandeep',
    gender: 'Female',
    salary: 133000
  },
  {
    id: 37,
    name: 'Raman',
    gender: 'Female',
    salary: 133000
  },
  {
    id: 38,
    name: 'Noor',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 39,
    name: 'Jot',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 40,
    name: 'Sukhchain',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 41,
    name: 'Sukh',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 42,
    name: 'Navjot',
    gender: 'Female',
    salary: 133000
  },
  {
    id: 43,
    name: 'Ram',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 44,
    name: 'Sham',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 45,
    name: 'preet',
    gender: 'Female',
    salary: 133000
  },
  {
    id: 46,
    name: 'Sandeep',
    gender: 'Female',
    salary: 133000
  },
  {
    id: 47,
    name: 'Raman',
    gender: 'Female',
    salary: 133000
  },
  {
    id: 48,
    name: 'Noor',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 49,
    name: 'Jot',
    gender: 'Male',
    salary: 133000
  },
  {
    id: 50,
    name: 'Sukhchain',
    gender: 'Male',
    salary: 133000
  },
]
const columns = [
  {
    Header: "ID",
    accessor: "id"
  },
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Gender",
    accessor: "gender"
  },
  {
    Header: "Salary",
    accessor: "salary"
  },
]

function App() {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNaxtPage
  } = useTable({
    columns,
    data,
  },
    useSortBy,
    usePagination
  )

  return (
    <div className='container'>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.isSorted && (
                    <span>{column.isSortedDesc ? ' A ' : ' V '}</span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            page.map(row => {
              prepareRow(row)
              return <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            })
          }
        </tbody>
      </table>
      <div className='btn-container'>
        <button disabled={!canPreviousPage} onClick={previousPage}>Prev</button>
        <button disabled={!canNaxtPage} onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

export default App;
