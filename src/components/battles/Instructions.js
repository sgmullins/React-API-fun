import React from 'react';
import { FaUserFriends, FaMountain } from 'react-icons/fa';
import { GiChampions } from 'react-icons/gi';

export default function Instructions() {
  return (
    <div className='instruction-container'>
      <h1 className='center-text header-lg'>Instructions</h1>
      <ol className='battle-instructions container-sm grid center-text'>
        <li>
          <h3 className='header-sm'>
            <span className='slide'>Enter Two MP Users</span>
          </h3>
          <FaUserFriends className='battle-icons' size={140} />
        </li>
        <li>
          <h3 className='header-sm'>
            <span className='slide'>Battle For The Mountain</span>
          </h3>
          <FaMountain className='battle-icons' size={140} />
        </li>
        <li>
          <h3 className='header-sm '>
            <span className='slide'>See the Winners</span>
          </h3>
          <GiChampions className='battle-icons' size={140} />
        </li>
      </ol>
    </div>
  );
}
