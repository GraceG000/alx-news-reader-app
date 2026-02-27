const SearchBar = ({ onSearch}) => {
    return(
        <div className='flex items-center gap-2 my-4'>
            <span className="material-symbols-outlined text-gray-400">search</span>
            <input
                type="text"
                placeholder="Search for news articles..."
                onChange={(e) => onSearch(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}
export default SearchBar;