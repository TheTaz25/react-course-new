import { Outlet } from 'react-router-dom';
const Layout: React.FC = () => {
  return (
    <div className="App">
      <Outlet />
    </div>
  )
}

export default Layout;