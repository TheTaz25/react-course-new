import { Link, Outlet } from 'react-router-dom';
const Layout: React.FC = () => {
  return (
    <div className="App">
      <div className="main-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="kitchen">
              Coffee Kitchen
            </Link>
          </li>
          <li>
            <Link to="animations">
              Animations
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}

export default Layout;