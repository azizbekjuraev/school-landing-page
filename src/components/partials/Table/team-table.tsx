import React, { useState, useMemo } from 'react'
import { teamData } from '../../../constant/table-data'

import Icon from '../../ui/Icon'
import Dropdown from '@/components/ui/Dropdown'
import { Menu } from '@headlessui/react'
import Chart from 'react-apexcharts'
import { colors } from '@/constant/data'

import { useTable, useRowSelect, useSortBy, useGlobalFilter, usePagination } from 'react-table'

const series: any = [
  {
    data: [800, 600, 1000, 800, 600, 1000, 800, 900]
  }
]
const options: any = {
  chart: {
    toolbar: {
      autoSelected: 'pan',
      show: false
    },
    offsetX: 0,
    offsetY: 0,
    zoom: {
      enabled: false
    },
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  colors: [colors.primary],
  tooltip: {
    theme: 'light'
  },
  grid: {
    show: false,
    padding: {
      left: 0,
      right: 0
    }
  },
  yaxis: {
    show: false
  },
  fill: {
    type: 'solid',
    opacity: [0.1]
  },
  legend: {
    show: false
  },
  xaxis: {
    low: 0,
    offsetX: 0,
    offsetY: 0,
    show: false,
    labels: {
      low: 0,
      offsetX: 0,
      show: false
    },
    axisBorder: {
      low: 0,
      offsetX: 0,
      show: false
    }
  }
}

const actions: { name: string; icon: string }[] = [
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
const COLUMNS: any = [
  {
    Header: 'assignee',
    accessor: 'customer',
    Cell: row => {
      return (
        <span className='flex min-w-[150px] items-center'>
          <span className='h-8 w-8 flex-none rounded-full ltr:mr-3 rtl:ml-3'>
            <img
              src={row?.cell?.value.image}
              alt={row?.cell?.value.name}
              className='h-full w-full rounded-full object-cover'
            />
          </span>
          <span className='text-sm capitalize text-slate-600 dark:text-slate-300'>{row?.cell?.value.name}</span>
        </span>
      )
    }
  },

  {
    Header: 'status',
    accessor: 'status',
    Cell: row => {
      return (
        <span className='block min-w-[140px] text-left'>
          <span className='mx-auto inline-block py-1 text-center'>
            {row?.cell?.value === 'progress' && (
              <span className='flex items-center space-x-3 rtl:space-x-reverse'>
                <span className='inline-block h-[6px] w-[6px] rounded-full bg-danger-500 ring-4 ring-danger-500 ring-opacity-30'></span>
                <span>In progress</span>
              </span>
            )}
            {row?.cell?.value === 'complete' && (
              <span className='flex items-center space-x-3 rtl:space-x-reverse'>
                <span className='inline-block h-[6px] w-[6px] rounded-full bg-success-500 ring-4 ring-success-500 ring-opacity-30'></span>

                <span>Complete</span>
              </span>
            )}
          </span>
        </span>
      )
    }
  },
  {
    Header: 'time',
    accessor: 'time',
    Cell: row => {
      return <span>{row?.cell?.value}</span>
    }
  },
  {
    Header: 'chart',
    accessor: 'chart',
    Cell: row => {
      return (
        <span>
          <Chart options={options} series={series} type='area' height={48} />
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

const TeamTable: React.FC = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => teamData, [])

  const tableInstance: any = useTable(
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
                {...getTableProps}
              >
                <thead className=' bg-slate-100 dark:bg-slate-700'>
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
      </div>
    </>
  )
}

export default TeamTable
