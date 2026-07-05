import Input from "./Input";
const Header = () => {
    return (

     <header className="flex fixed justify-center top-0 right-0 w-full bg-white py-3"> 
        <div className="flex justify-between items-center w-4/5">
            <div>
                <a href="/"><img src="http://localhost:5174/public/assets/logo.png" alt="logo" /></a>
            </div>
            <div>
                <Input/>
            </div>
            <div>carrinho</div>
        </div>
     </header>

    )
}

export default Header;