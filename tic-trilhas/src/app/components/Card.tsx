import Button from "./Button"
import { type ProductProps } from "../interfaces/Product"

const Card = ({ product }: { product: ProductProps }) => {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
            {/* Imagem do Produto */}
            <div className="relative overflow-hidden bg-gray-100 h-64">
                <img 
                    src={`/assets/produtos/${product.image}.svg`} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                {product.quantity === 0 && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">Fora de Estoque</span>
                    </div>
                )}
            </div>

            {/* Conteúdo */}
            <div className="p-4 flex flex-col flex-grow">
                {/* Categoria */}
                <span className="text-xs font-semibold text-blue-600 uppercase mb-2">
                    {product.category}
                </span>

                {/* Nome do Produto */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 h-14">
                    {product.name}
                </h3>

                {/* Descrição */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
                    {product.description}
                </p>

                {/* Preço */}
                <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                        R$ {product.price.toFixed(2)}
                    </span>
                    {product.quantity > 0 && (
                        <span className="text-xs text-gray-500">
                            {product.quantity} em estoque
                        </span>
                    )}
                </div>

                {/* Botão */}
                <Button 
                    disabled={product.quantity === 0}
                    className={product.quantity === 0 ? 'opacity-50 cursor-not-allowed' : ''}
                >
                    Adicionar no Carrinho
                </Button>
            </div>
        </div>
    )
}

export default Card