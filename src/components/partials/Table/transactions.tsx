import React, { useState, useMemo } from 'react'
import { advancedTable } from '@/constant/table-data'
import Card from '../../ui/Card'
import Icon from '@/components/ui/Icon'
import Dropdown from '@/components/ui/Dropdown'
import { Menu } from '@headlessui/react'
import { useTable, useRowSelect, useSortBy, useGlobalFilter, usePagination } from 'react-table'
// import GlobalFilter from '@/pages/table/react-tables/GlobalFilter'

const COLUMNS: any = [
  {
    Header: 'customer',
    accessor: 'customer',
    Cell: row => {
      return (
        <div>
          <span className='inline-flex items-center'>
            <span className='h-7 w-7 flex-none rounded-full bg-slate-600 ltr:mr-3 rtl:ml-3'>
              <img src={row?.cell?.value.image} alt='' className='h-full w-full rounded-full object-cover' />
            </span>
            <span className='text-sm font-medium capitalize text-slate-600 dark:text-slate-300'>
              {row?.cell?.value.name}
            </span>
          </span>
        </div>
      )
    }
  },
  {
    Header: 'date',
    accessor: 'date',
    Cell: row => {
      return (
        <span className='text-slate-500 dark:text-slate-400'>
          {row?.cell?.value}
          <span className='ml-1 inline-block'>
            {Math.floor(Math.random() * 12) + 1}:{Math.floor(Math.random() * 60) + 1}
          </span>
        </span>
      )
    }
  },
  {
    Header: 'HISTORY',
    accessor: 'quantity',
    Cell: row => {
      return (
        <span className='text-slate-500 dark:text-slate-400'>
          <span className='block text-slate-600 dark:text-slate-300'>Transfer</span>
          <span className='block text-xs text-slate-500'>Trans ID: 8HG654Pk32</span>
        </span>
      )
    }
  },

  {
    Header: 'amount',
    accessor: 'status',
    Cell: row => {
      return (
        <span className='block w-full'>
          <span
            className={`${row?.cell?.value === 'paid' ? 'text-success-500 ' : ''} 
            ${row?.cell?.value === 'due' ? 'text-warning-500 ' : ''}
            ${row?.cell?.value === 'cancled' ? 'text-danger-500' : ''}
            
             `}
          >
            {row?.cell?.value === 'due' && <span>+$ 1,200.00</span>}
            {row?.cell?.value === 'paid' && <span>+$ 200.00</span>}
            {row?.cell?.value === 'cancled' && <span>+$ 1400.00</span>}
          </span>
        </span>
      )
    }
  },
  {
    Header: 'action',
    accessor: 'action',
    Cell: row => {
      return (
        <div className=' text-center'>
          <Dropdown
            classMenuItems='right-0 w-[140px] top-[110%] '
            label={
              <span className='block w-full text-center text-xl'>
                <Icon icon='heroicons-outline:dots-vertical' />
              </span>
            }
          >
            <div className='divide-y divide-slate-100 dark:divide-slate-800'>
              {actions.map((item, i) => (
                <Menu.Item key={i}>
                  <div
                    className={`
                
                  ${
                    item.name === 'delete'
                      ? 'bg-danger-500 bg-opacity-30 text-danger-500   hover:bg-opacity-100 hover:text-white'
                      : 'hover:bg-slate-900 hover:text-white dark:hover:bg-slate-600 dark:hover:bg-opacity-50'
                  }
                   flex w-full cursor-pointer items-center space-x-2 border-b border-b-gray-500  border-opacity-10 px-4 
                   py-2 text-sm first:rounded-t  last:mb-0 last:rounded-b rtl:space-x-reverse `}
                  >
                    <span className='text-base'>
                      <Icon icon={item.icon} />
                    </span>
                    <span>{item.name}</span>
                  </div>
                </Menu.Item>
              ))}
            </div>
          </Dropdown>
        </div>
      )
    }
  }
]

const actions = [
  {
    name: 'view',
    icon: 'heroicons-outline:eye'
  },
  {
    name: 'edit',
    icon: 'heroicons:pencil-square'
  },
  {
    name: 'delete',
    icon: 'heroicons-outline:trash'
  }
]

const TransactionsTable: React.FC = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => advancedTable, [])

  const tableInstance: any = useTable(
    {
      columns,
      data,
      initialState: {
        // @ts-ignore
        pageSize: 4
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

  const { globalFilter, pageIndex, pageSize } = state
  return (
    <>
      <Card noborder>
        <div className='mb-6 items-center justify-between md:flex'>
          <h4 className='card-title'>All transactions</h4>
          <div>{/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}</div>
        </div>
        <div className='-mx-6 overflow-x-auto'>
          <div className='inline-block min-w-full align-middle'>
            <div className='overflow-hidden '>
              <table
                className='min-w-full table-fixed divide-y divide-slate-100 dark:divide-slate-700'
                {...getTableProps}
              >
                <thead className=' border-t border-slate-100 dark:border-slate-800'>
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
                  {...getTableBodyProps}
                >
                  {page.map(row => {
                    prepareRow(row)
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                          return (
                            <td {...cell.getCellProps()} className='table-td py-2'>
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
      </Card>
    </>
  )
}

export default TransactionsTable
