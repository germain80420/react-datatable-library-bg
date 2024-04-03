import Column from './Column'
import './DataTable.css'
import React, { useState } from 'react'

function DataTable({ data, columns }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentSort, setCurrentSort] = useState({
    key: null,
    direction: null
  })
  const [nbResultByPage, setNbResultByPage] = useState(10)
  const [pageActive, setPageActive] = useState(1)

  const changeNbResultByPage = (event) => {
    setNbResultByPage(Number(event.target.value))
    setPageActive(1)
  }

  const handleSearchTermChange = (value) => {
    setSearchTerm(value)
    setPageActive(1)
  }

  const calculateResultsRange = () => {
    const firstIndex = (pageActive - 1) * nbResultByPage + 1
    const lastIndex = Math.min(pageActive * nbResultByPage, filteredData.length)

    return `${firstIndex} to ${lastIndex} of ${filteredData.length} entries`
  }

  const filterData = (item) => {
    const searchTerms = Object.values(item).map((value) =>
      value.toString().toLowerCase()
    )
    return searchTerms.some((term) => term.includes(searchTerm.toLowerCase()))
  }

  const filteredData = data.filter(filterData)

  const sortedData = [...filteredData].sort((a, b) => {
    if (currentSort.direction === 'asc') {
      return a[currentSort.key] > b[currentSort.key] ? 1 : -1
    } else if (currentSort.direction === 'desc') {
      return a[currentSort.key] < b[currentSort.key] ? 1 : -1
    } else {
      return 0
    }
  })

  const handleSort = (key, direction) => {
    setPageActive(1)
    setCurrentSort({ key, direction })
  }

  const totalPages = Math.ceil(filteredData.length / nbResultByPage)
  const paginatedData = sortedData.slice(
    (pageActive - 1) * nbResultByPage,
    pageActive * nbResultByPage
  )

  const handlePageChange = (newPage) => {
    setPageActive(newPage)
  }

  return (
    <div className='container'>
      {data.length > 0 && (
        <form>
          <div className='inputSearch'>
          <label htmlFor='search'>Search:</label>
          <input
            type='text'
            id='search'
            value={searchTerm}
            onChange={(e) => handleSearchTermChange(e.target.value)}
          />
          </div>
          
          <p>
            Show
            <select
              onChange={changeNbResultByPage}
              name='nbResultByPage'
              id='nbResultByPage'
              value={nbResultByPage}
            >
              <option value='10'>10</option>
              <option value='25'>25</option>
              <option value='50'>50</option>
              <option value='100'>100</option>
            </select>
            results per page
          </p>
        </form>
      )}
      {filteredData.length > 0 ? (
        <div>
          <table>
            <thead>
              <tr>
                {columns.map((column) => (
                  <Column
                    key={column.data}
                    title={column.title}
                    data={column.data}
                    currentSort={
                      currentSort.key === column.data
                        ? currentSort.direction
                        : null
                    }
                    onSort={handleSort}
                  />
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={
                    rowIndex % 2 === 0 ? 'line-color-1' : 'line-color-2'
                  }
                >
                  {columns.map((column, colIndex) => (
                    <td key={`${rowIndex}-${colIndex}`}>{item[column.data]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className='pagination'>
            <div className='infos-results'>
              <p>{`Showing ${calculateResultsRange()}`}</p>
            </div>
            <div className='infos-pagination'>
              <p>
                Page {pageActive} of {totalPages}
              </p>
              
              {totalPages > 1 && (
                <div className='controls-pagination'>
                  <button
                    onClick={() => handlePageChange(pageActive - 1)}
                    disabled={pageActive === 1}
                  >
                    Previous
                  </button>
                  <select
                    name='pageActive'
                    id='pageActive'
                    value={pageActive}
                    onChange={(e) => setPageActive(Number(e.target.value))}
                  >
                    {Array.from({ length: totalPages }, (_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => handlePageChange(pageActive + 1)}
                    disabled={pageActive === totalPages}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>No results found.</p>
        </div>
      )}
    </div>
  )
}

export default DataTable
