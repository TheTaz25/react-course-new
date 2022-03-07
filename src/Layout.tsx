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
            <Link to="kitchen">To The CoffeeKitchen</Link>
          </li>
          <li>
            <Link to="animation-land">To The Animations</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}

export default Layout;