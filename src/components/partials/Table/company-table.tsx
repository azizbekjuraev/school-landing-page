import React, { useState, useMemo } from 'react'
import { homeTable } from '../../../constant/table-data'

import Icon from '../../ui/Icon'

import { useTable, useRowSelect, useSortBy, useGlobalFilter, usePagination } from 'react-table'

interface TableRow {
  company: string
  category: string
  sales: number
  views: number
  revenue: number
}

const COLUMNS: any = [
  {
    Header: 'company',
    accessor: 'company',
    Cell: (row: { cell: { value: string } }) => {
      return (
        <span className='flex items-center'>
          <div className='flex-none'>
            <div className='h-8 w-8 rounded-[100%] ltr:mr-3 rtl:ml-3'>
              <img src={row?.cell?.value} alt='' className='h-full w-full rounded-[100%] object-cover' />
            </div>
          </div>
          <div className='flex-1 text-start'>
            <h4 className='whitespace-nowrap text-sm font-medium text-slate-600'>Biffco Enterprises Ltd.</h4>
            <div className='text-xs font-normal text-slate-600 dark:text-slate-400'>Biffco@example.com</div>
          </div>
        </span>
      )
    }
  },
  {
    Header: 'Category',
    accessor: 'category',
    Cell: (row: { cell: { value: string } }) => {
      return <span>Technology</span>
    }
  },
  {
    Header: 'sales',
    accessor: 'sales',
    Cell: (row: { cell: { value: number } }) => {
      return (
        <div className='flex items-center space-x-6 rtl:space-x-reverse'>
          <span> {row?.cell?.value + '%'}</span>
          <span
            className={` text-xl
             ${row?.cell?.value > 100 ? 'text-success-500' : 'text-danger-500'}
              `}
          >
            {row?.cell?.value > 100 ? (
              <Icon icon='heroicons:arrow-trending-up' />
            ) : (
              <Icon icon='heroicons:arrow-trending-down' />
            )}
          </span>
        </div>
      )
    }
  },
  {
    Header: 'views',
    accessor: 'views',
    Cell: (row: { cell: { value: number } }) => {
      return <span>{row?.cell?.value}</span>
    }
  },
  {
    Header: 'revenue',
    accessor: 'revenue',
    Cell: (row: { cell: { value: number } }) => {
      return <span>{row?.cell?.value}</span>
    }
  }
]

const CompanyTable: React.FC = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => homeTable, [])

  const tableInstance: any = useTable<TableRow>(
    {
      columns,
      data,
      initialState: {
        // @ts-ignore
        pageSize: 6
      }
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    setGlobalFilter,
    prepareRow
  } = tableInstance

  const { pageIndex, pageSize } = state

  return (
    <>
      <div>
        <div className='-mx-6 overflow-x-auto'>
          <div className='inline-block min-w-full align-middle'>
            <div className='overflow-hidden '>
              <table
                className='min-w-full table-fixed divide-y divide-slate-100 dark:divide-slate-700'
                {...getTableProps()}
              >
                <thead className=' bg-slate-200 dark:bg-slate-700'>
                  {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(column => (
                        <th
                          {...column.getHeaderProps(column.getSortByToggleProps())}
                          scope='col'
                          className=' table-th '
                        >
                          {column.render('Header')}
                          <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  className='divide-y divide-slate-100 bg-white dark:divide-slate-700 dark:bg-slate-800'
                  {...getTableBodyProps()}
                >
                  {page.map(row => {
                    prepareRow(row)
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                          return (
                            <td {...cell.getCellProps()} className='table-td'>
                              {cell.render('Cell')}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='mt-6 items-center justify-center space-y-5 md:flex md:space-y-0'>
          <ul className='flex items-center  space-x-3  rtl:space-x-reverse'>
            <li className='text-xl leading-4 text-slate-900 rtl:rotate-180 dark:text-white'>
              <button
                className={` ${!canPreviousPage ? 'cursor-not-allowed opacity-50' : ''}`}
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <Icon icon='heroicons-outline:chevron-left' />
              </button>
            </li>
            {pageOptions.map((page, pageIdx) => (
              <li key={pageIdx}>
                <button
                  aria-current='page'
                  className={` ${
                    pageIdx === pageIndex
                      ? 'bg-slate-900 font-medium  text-white dark:bg-slate-600 dark:text-slate-200 '
                      : 'bg-slate-100 font-normal text-slate-900 dark:bg-slate-700  dark:text-slate-400  '
                  }    flex h-6 w-6 items-center justify-center rounded text-sm leading-[16px] transition-all duration-150`}
                  onClick={() => gotoPage(pageIdx)}
                >
                  {page + 1}
                </button>
              </li>
            ))}
            <li className='text-xl leading-4 text-slate-900 rtl:rotate-180 dark:text-white'>
              <button
                className={` ${!canNextPage ? 'cursor-not-allowed opacity-50' : ''}`}
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                <Icon icon='heroicons-outline:chevron-right' />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default CompanyTable
