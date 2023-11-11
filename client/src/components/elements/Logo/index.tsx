import Image from 'next/image';
import { StyledLogo } from './Logo.styles';
import stormLogo from '../../assets/stormLogo.svg';
import stormName from '../../assets/stormName.svg';

/**
 * Global site logo component
 * 
 * TODO: optimze box model to intuitive sizing/parameters
 * 
 * This component uses next/image to handle
 * SVG assets.
 * Styling utilizes explicit box model measurements
 * to match wireframe.
 * 
 * @returns JSX
 */
export default function Logo () {
  return (
    <StyledLogo>
      <Image
        src={stormLogo}
        alt="storm logo"
        className="storm-logo"
      />
      <Image
        src={stormName}
        alt="storm"
        className="storm-name"
      />
    </StyledLogo>
  )
}