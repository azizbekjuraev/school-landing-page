import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import Loading from '@/components/Loading'

interface ProtectedRouteProps {
  element: React.ReactElement
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  // @ts-ignore
  const { isAuthenticated, loading } = useSelector((state: RootState) => state.auth)

  if (loading) return <Loading />

  return isAuthenticated ? element : <Navigate to='/login' />
}

export default ProtectedRoute
