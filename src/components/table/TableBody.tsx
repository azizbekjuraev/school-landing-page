type Props = {
  tableInstance: any
  cellProps?: object
  rowProps?: any
}

export const TableBody = ({ tableInstance, cellProps, rowProps }: Props) => {
  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } = tableInstance
  return (
    <div className='overflow-x-auto'>
      <div className='inline-block min-w-full align-middle'>
        <div className='overflow-hidden '>
          <table className='min-w-full table-fixed divide-y divide-slate-100 dark:divide-slate-700' {...getTableProps}>
            <thead className='bg-slate-200 dark:bg-slate-700'>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())} scope='col' className=' table-th '>
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
                  <tr {...row.getRowProps(rowProps && rowProps(row))}>
                    {row.cells.map(cell => {
                      return (
                        <td {...cell.getCellProps()} className='table-td'>
                          {cell.render('Cell', cellProps && { ...cellProps })}
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
  )
}
