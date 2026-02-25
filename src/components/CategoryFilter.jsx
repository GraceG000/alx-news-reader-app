const CATEGORIES = ['business', 'entertainment', 'environment', 'food', 'health', 'politics', 'science', 'sports', 'technology', 'tourism', 'world']

const CategoryFilter = ({ selected, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      <button
        onClick={() => onSelect('')}
        className={`py-1 px-3 rounded-2xl text-sm capitalize cursor-pointer ${selected === '' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
      >
        All
      </button>
      {CATEGORIES.map(category => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`py-1 px-3 rounded-2xl text-sm capitalize cursor-pointer ${selected === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter