import classNames from 'classnames';
import React from 'react';
interface MenuBtnProps {
  isOpen: boolean;
  onClick: () => void;
  classNamesProps?: string;
}
export default function MenuBtn({ isOpen, onClick, classNamesProps }: MenuBtnProps) {
  return (
    <button
      className={classNames(
        'relative w-10 h-10 bg-transparent border-2 border-white rounded-md focus:outline-none group',
        classNamesProps
      )}
      aria-label='Close menu'
      aria-expanded='false'
      onClick={onClick}>
      <div
        className={classNames(
          'w-6 h-1 bg-white absolute left-1/2 top-2 transform -translate-x-1/2 transition-all duration-300 ease-in-out',
          isOpen ? 'group-hover:-rotate-45' : 'group-hover:rotate-45'
        )}></div>
      <div className='w-6 h-1 bg-white absolute left-1/2 top-4 transform -translate-x-1/2 transition-opacity duration-300 ease-in-out group-hover:opacity-0'></div>
      <div
        className={classNames(
          'w-6 h-1 bg-white absolute left-1/2 top-6 transform -translate-x-1/2 transition-all duration-300 ease-in-out',
          isOpen ? 'group-hover:rotate-45' : 'group-hover:-rotate-45'
        )}></div>
    </button>
  );
}
