import Button from "./Button"
const Card = () => {
    return (
        <div className="bg-white p-2 w-68 rounded-md">
            <div><img src="http://localhost:5173/assets/produtos/tenis.jpg" alt="Produto" /></div>
            <div>
                <div className="flex justify-center items-center mb-2"><h3>Nome do Produto</h3></div>
                <div className="flex justify-center items-center"><span>R$ 0,00</span></div>
                <Button>Adicionar no Carrinho</Button>
            </div>
        </div>
    )
}

export default Card