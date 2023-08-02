import React from 'react'
import products1 from '@/assets/images/all-img/p-1.png'
import products2 from '@/assets/images/all-img/p-2.png'
import products3 from '@/assets/images/all-img/p-3.png'
import products4 from '@/assets/images/all-img/p-4.png'
import products5 from '@/assets/images/all-img/p-5.png'
import products6 from '@/assets/images/all-img/p-6.png'

interface Products {
  img: string
  price: string
  title: string
}

const products: Products[] = [
  {
    img: products1,
    price: '$150.00',
    title: 'Car engine oil'
  },
  {
    img: products2,
    price: '$150.00',
    title: 'Car engine oil'
  },
  {
    img: products3,
    price: '$150.00',
    title: 'Car engine oil'
  },
  {
    img: products4,
    price: '$150.00',
    title: 'Car engine oil'
  },
  {
    img: products5,
    price: '$150.00',
    title: 'Car engine oil'
  },
  {
    img: products6,
    price: '$150.00',
    title: 'Car engine oil'
  }
]
const Products: React.FC = () => {
  return (
    <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
      {products.map((item, i) => (
        <div key={i} className='rounded bg-slate-50 p-4 text-center dark:bg-slate-900'>
          <div className='mx-auto mb-4 h-12 w-12 rounded-full'>
            <img src={item.img} alt='' className='h-full w-full rounded-full' />
          </div>
          <span className='mb-1 block text-sm font-normal text-slate-500 dark:text-slate-300'>{item.price}</span>
          <span className='mb-4 block text-sm text-slate-600 dark:text-slate-300'>{item.title}</span>
          <a
            href='#'
            className='btn btn-secondary btn-sm block w-full text-center dark:bg-slate-800 dark:hover:bg-slate-600'
          >
            View More
          </a>
        </div>
      ))}
    </div>
  )
}

export default Products
