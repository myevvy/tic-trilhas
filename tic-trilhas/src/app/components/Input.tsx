import { useSearch } from "../context/SearchContext";

const Input = () => {
    const { searchTerm, setSearchTerm } = useSearch();

    return (
        <div>
            <input 
                type="search" 
                placeholder="Buscar produtos..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
        </div>
    )
}

export default Input