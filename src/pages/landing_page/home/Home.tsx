import Navbar from './Navbar'
import Header from './Header'
import Grid from './Grid'

const Home = () => {
  return (
    <>
      <div className=' bg-[#F5F8FE] px-4 py-4 sm:px-6 md:px-8 lg:px-10'>
        <Navbar />
        <div className='mt-16 lg:flex lg:justify-center'>
          <div className='lg:w-1/2'>
            <Header />
          </div>
          <div className='lg:w-1/2'>
            <Grid />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
