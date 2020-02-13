import React from 'react';

export default function CategoryNav({ selected, onUpdateCategory }) {
  const categories = ['Boulder', 'Sport', 'Trad'];

  return (
    <ul className='flex-center'>
      {categories.map(category => (
        <li key={category}>
          <button
            className='category-button'
            style={
              category === selected
                ? { color: '#ff3363', outlineColor: '#ff3363' }
                : { color: '#e6ebf2' }
            }
            onClick={() => onUpdateCategory(category)}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}
