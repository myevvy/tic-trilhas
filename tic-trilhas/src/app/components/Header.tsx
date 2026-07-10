import Input from "./Input";

const Header = () => {
    return (
        <header className="flex fixed justify-center top-0 right-0 w-full bg-white py-3 shadow-md z-50">
            <div className="flex justify-between items-center w-4/5 gap-4">
                <div>
                    <a href="/"><img src="/assets/logo.png" alt="logo" className="h-12" /></a>
                </div>
                <div className="flex-1">
                    <Input/>
                </div>
                <div className="text-gray-700 font-semibold hover:text-blue-500 transition cursor-pointer">🛒 Carrinho</div>
            </div>
        </header>
    )
}

export default Header;