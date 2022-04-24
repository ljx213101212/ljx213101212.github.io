import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import circleIcon from 'assets/icons/circle.svg';
import crossIcon from 'assets/icons/cross.svg';
import { AppOverlayContext } from 'Provider';

interface HeaderProps {
  links: NavLink[];
  medias: MediaLink[];
}

const Header = ({ links, medias }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const appOverlayContext = React.useContext(AppOverlayContext);

  const onClickDocument = (e: Event) => {
    const targetId = (e?.target as HTMLElement).id;
    if (targetId !== 'menuSlide' && targetId !== 'menuIcon') {
      onClickOutsideMenu();
    }
  };

  const onInteractSliderMenu = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const onClickSliderMenu = (e: Event) => {
    const isClickable = e.composedPath().find((element: any) => element.classList?.contains('clickable'));
    if (!isClickable) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const onClickOutsideMenu = () => {
    onMenuClose();
  };

  useEffect(() => {
    const sliderMenu = document.getElementById('menuSlide')!;
    document.addEventListener('click', onClickDocument);
    sliderMenu.addEventListener('wheel', onInteractSliderMenu);
    sliderMenu.addEventListener('touchmove', onInteractSliderMenu);
    sliderMenu.addEventListener('click', onClickSliderMenu);
    return () => {
      document.removeEventListener('click', onClickDocument);
      sliderMenu.removeEventListener('wheel', onInteractSliderMenu);
      sliderMenu.removeEventListener('touchmove', onInteractSliderMenu);
      sliderMenu.removeEventListener('click', onClickSliderMenu);
    };
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      onMenuClose();
    } else {
      onMenuOpen();
    }
  };

  const onMenuOpen = () => {
    appOverlayContext.setStatus(true);
  };

  const onMenuClose = () => {
    setIsMenuOpen(false);
    appOverlayContext?.setStatus?.(false);
  };

  return (
    <HeaderContainer>
      <header className="bg-white shadow py-4 hidden md:block">
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

      <header className="md:hidden" style={{ padding: '2rem' }}>
        <MenuIcon color={'#666'} className={isMenuOpen ? 'open' : ''}>
          <i className="fa-solid fa-bars fa-2xl" id="menuIcon" onClick={toggleMenu}></i>
        </MenuIcon>
      </header>
      <SlideMenu id="menuSlide" isShow={isMenuOpen} className="slide-menu">
        <Clickable className="clickable">
          <div style={{ padding: '2rem', borderBottom: '1px solid gray' }}>
            <div className="logo">
              <Link to={'./'}>
                <svg height="48" width="48">
                  <circle cx="24" cy="24" r="18" stroke="black" stroke-width="2" fill="transparent" />
                </svg>
              </Link>
            </div>
          </div>
        </Clickable>

        <Clickable className="clickable">
          {links.map((link) => {
            return (
              <SlideMenuItem>
                <Link key={link.text} to={link.to}>
                  {link.text}
                </Link>
              </SlideMenuItem>
            );
          })}
        </Clickable>

        <SlideMenuMediaItemContainer>
          {medias.map((media) => {
            return (
              <Clickable className="clickable">
                <span className="github-icon px-4">
                  <a href={media.link} target="_blank">
                    <i
                      className={`${media.fontAwesomeClassName} fab big-icon transform  hover:scale-125 text-4xl transition-colors duration-150 transition-transform duration-300 ease-in-out`}
                    ></i>
                  </a>
                </span>
              </Clickable>
            );
          })}
        </SlideMenuMediaItemContainer>
      </SlideMenu>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div``;
interface MenuIconProps {
  color: string;
}
const MenuIcon = styled.div<MenuIconProps>`
  display: inline-block;
`;

interface SlideMenuProps {
  isShow: boolean;
}

const SlideMenu = styled.div<SlideMenuProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  overscroll-behavior: none;
  height: 100%;
  top: 0;
  bottom: 0;
  background: white;
  width: 61.8vw;
  z-index: 1;

  left: ${(p) => (p.isShow ? '0' : '-61.8vw')};
`;

const SlideMenuItemContainer = styled.div``;

const SlideMenuItem = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  height: 4rem;
  &:hover {
    background-color: #ccc;
  }
  a {
    padding: 1.5rem;
    width: 100%;
    text-decoration: none;
    color: inherit;
  }
`;

const SlideMenuMediaItemContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  margin-left: auto;
`;

const Clickable = styled.div`
  cursor: pointer;
  display: inline-block;
  width: 100%;
`;
