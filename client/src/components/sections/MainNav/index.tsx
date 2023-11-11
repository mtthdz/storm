import Image from 'next/image';
import settingsIcon from '../../assets/settings.svg';
import notificationsIcon from '../../assets/notifications.svg';
import userIcon from '../../assets/user.svg';
import menuIcon from '../../assets/menu.svg';
import { StyledNav } from './MainNav.styles';

/**
 * Main Navigation component
 * 
 * TODO: hover/focus styles
 * TODO: create dedicated icon button component
 * TODO: variablize username via context
 * 
 * @returns JSX
 */
export default function MainNav () {
  return (
    <StyledNav>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#" className="nav-link">
            <Image src={settingsIcon} width={40} height={40} alt="settings link" className="nav-icon" />
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <Image src={notificationsIcon} width={40} height={40} alt="notifications link" className="nav-icon" />
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link item-user">
            <Image src={userIcon} width={40} height={40} alt="user link" className="nav-icon" />
            <p>Adriana Arias</p>
          </a>
        </li>
      </ul>

      <button className='nav-toggle'>
        <Image src={menuIcon} width={24} height={24} alt="nav expand" />
      </button>
    </StyledNav>
  )
}