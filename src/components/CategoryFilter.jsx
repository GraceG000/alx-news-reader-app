const CATEGORIES = [
    'business',   
    'entertainment',
    'environment',
    'food',
    'health',
    'politics',
    'science',
    'sports',
    'technology',
    'tourism',
    'world'
]

const CategoryFilter = ({ seclected, onSelected}) => {
    return(
        <div className="flex flex-wrap gap-2 my-4">
            <button
               onClick={() => onSelected('')}
               className="py-2 px-4 bg-white text-blue-500 border-blue-500 cursor-pointer">
                All
               </button>
               {CATEGORIES.map(category=>(
                <button
                  key={category}
                  onClick={() => onSelected(category)}
                  className={`py-1 px-3 rounded-2xl text-sm capitalize cursor-pointer ${seclected === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                >{category}
                </button>  
                ))}
        </div>
    )
}
export default CategoryFilter;