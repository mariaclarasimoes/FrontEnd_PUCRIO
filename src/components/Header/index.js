import React from 'react'
import { Link } from 'react-router-dom'

const navigations = [
  {
    name: 'Página inicial',
    path: '/'
  },
  {
    name: 'Produtos',
    path: '/products'
  },
  {
    name: 'Sobre',
    path: '/about'
  },
  {
    name: 'Contato',
    path: '/contact'
  }
]

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg mb-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <Link to={'/'} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-black rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">SHE IS</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {
            navigations.map((navigation) => {
              return (
                <Link to={navigation.path} className="mr-5 hover:text-gray-900">{navigation.name}</Link>
              )
            })
          }
        </nav>
        <Link to={'/cart'} className="inline-flex items-center text-white bg-black border-0 py-2 px-4 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0">Carrinho</Link>
      </div>
    </header>
  )
}

export default Header