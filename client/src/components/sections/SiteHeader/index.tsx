'use client';

import Logo from '@/components/elements/Logo';
import SearchForm from '../SearchForm';
import MainNav from '../MainNav';
import { StyledHeader } from './SiteHeader.styles';

/**
 * Site Header component
 *
 * The wireframe dictates a dynamic flex layout for mobile
 * responsiveness.
 *
 * Each child component in SiteHeader will have a flex
 * container to organize flex relationships within this
 * parent component, rather than breaking up styling to
 * each individual component. This is simply for readability.
 *
 * @returns JSX
 */
export default function SiteHeader() {
  return (
    <StyledHeader>
      <div className="flex-child flex-title"><h1><Logo /></h1></div>
      <div className="flex-child flex-search"><SearchForm /></div>
      <div className="flex-child flex-nav"><MainNav /></div>
    </StyledHeader>
  )
}