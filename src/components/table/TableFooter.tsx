import Icon from '@/components/ui/Icon'

export const TableFooter = ({ tableInstance }: any) => {
  const { state, setPageSize, pageOptions, canPreviousPage, gotoPage, previousPage, nextPage, canNextPage, pageCount } =
    tableInstance
  const { pageIndex, pageSize } = state

  return (
    <div className='mt-6 items-center justify-between space-y-5 md:flex md:space-y-0'>
      <div className=' flex items-center space-x-3 rtl:space-x-reverse'>
        <select
          className='form-control w-max py-2'
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}
        >
          {[3, 10, 25, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <span className='text-sm font-medium text-slate-600 dark:text-slate-300'>
          Page{' '}
          <span>
            {pageIndex + 1} of {pageOptions.length}
          </span>
        </span>
      </div>
      <ul className='flex items-center  space-x-3  rtl:space-x-reverse'>
        <li className='text-xl leading-4 text-slate-900 rtl:rotate-180 dark:text-white'>
          <button
            className={` ${!canPreviousPage ? 'cursor-not-allowed opacity-50' : ''}`}
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            <Icon icon='heroicons:chevron-double-left-solid' />
          </button>
        </li>
        <li className='text-sm leading-4 text-slate-900 rtl:rotate-180 dark:text-white'>
          <button
            className={` ${!canPreviousPage ? 'cursor-not-allowed opacity-50' : ''}`}
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Prev
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
        <li className='text-sm leading-4 text-slate-900 rtl:rotate-180 dark:text-white'>
          <button
            className={` ${!canNextPage ? 'cursor-not-allowed opacity-50' : ''}`}
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
        </li>
        <li className='text-xl leading-4 text-slate-900 rtl:rotate-180 dark:text-white'>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            className={` ${!canNextPage ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            <Icon icon='heroicons:chevron-double-right-solid' />
          </button>
        </li>
      </ul>
    </div>
  )
}
