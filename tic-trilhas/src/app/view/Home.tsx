import Card from "../components/Card";
import { useQuery } from "react-query";
import findAll from "../services/product.service";
import { type ProductProps } from "../interfaces/Product";
import { useSearch } from "../context/SearchContext";
import { useMemo } from "react";

const Home = () => {
    const { searchTerm } = useSearch();

    const {
        data: products,
        error,
        isLoading
    } = useQuery<ProductProps[], Error>("query-produts", async () => {
        return await findAll();
    });

    // Filtrar produtos baseado no termo de busca
    const filteredProducts = useMemo(() => {
        if (!products) return [];
        if (!searchTerm.trim()) return products;

        const lowerSearchTerm = searchTerm.toLowerCase();
        return products.filter((product) =>
            product.name.toLowerCase().includes(lowerSearchTerm) ||
            product.description.toLowerCase().includes(lowerSearchTerm) ||
            product.category.toLowerCase().includes(lowerSearchTerm)
        );
    }, [products, searchTerm]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">Carregando produtos...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-center text-red-600">
                    <p className="text-lg font-semibold mb-2">Erro ao carregar produtos</p>
                    <p className="text-sm">{error?.message || 'Algo deu errado'}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Nossos Produtos</h1>
                    {searchTerm && (
                        <p className="text-gray-600">
                            {filteredProducts.length} resultado{filteredProducts.length !== 1 ? 's' : ''} para "{searchTerm}"
                        </p>
                    )}
                </div>
                
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <Card key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-600 py-12">
                        <p className="text-lg mb-2">Nenhum produto encontrado</p>
                        {searchTerm && (
                            <p className="text-sm">Tente outro termo de busca</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
};

export default Home;