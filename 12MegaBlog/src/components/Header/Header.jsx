import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', slug: '/', show: true },
    { name: 'Login', slug: '/login', show: !authStatus },
    { name: 'Signup', slug: '/signup', show: !authStatus },
    { name: 'All Posts', slug: '/all-posts', show: authStatus },
    { name: 'Add Post', slug: '/add-post', show: authStatus },
  ];

  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-pink-400
 shadow-md sticky top-0 z-50">
      <Container>
        <nav className="flex items-center py-4">
          <div className="mr-6 cursor-pointer">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex space-x-3 ml-auto items-center">
            {navItems.map(
              (item) =>
                item.show && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className={`inline-block px-5 py-2 rounded-full font-semibold transition duration-300
                        ${
                          location.pathname === item.slug
                            ? 'bg-white text-blue-700 shadow-md'
                            : 'text-white hover:bg-white hover:text-blue-700'
                        }`}
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
