import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  links: NavLink[];
  medias: MediaLink[];
}

const Header = ({ links, medias }: HeaderProps) => {
  return (
    <header className="bg-white shadow py-4">
      <div className="flex items-center md:container md:mx-auto">
        <div className="logo">
          <Link to={'./'}>
            <svg height="48" width="48">
              <circle cx="24" cy="24" r="18" stroke="black" stroke-width="2" fill="transparent" />
            </svg>
          </Link>
        </div>
        <nav className="px-12">
          <ul className="flex items-center">
            {links.map((link) => {
              return (
                <li className="px-6">
                  <Link key={link.text} to={link.to}>
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="media ml-auto">
          {medias.map((media) => {
            return (
              <span className="github-icon px-4">
                <a href={media.link} target="_blank">
                  <i
                    className={`${media.fontAwesomeClassName} fab big-icon transform  hover:scale-125 text-4xl transition-colors duration-150 transition-transform duration-300 ease-in-out`}
                  ></i>
                </a>
              </span>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
