import Image from 'next/image';
import { StyledLogo } from './Logo.styles';
import stormLogo from '../../assets/stormLogo.svg';
import stormName from '../../assets/stormName.svg';

export default function Logo () {
  return (
    <StyledLogo>
      <Image
        src={stormLogo}
        width={50}
        height={50}
        alt="storm logo"
        className="storm-logo"
      />
      <Image
        src={stormName}
        width={50}
        height={50}
        alt="storm"
        className="storm-name"
      />
    </StyledLogo>
  )
}