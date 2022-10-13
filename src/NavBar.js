import book from "./book.svg"
import CartIcon from "./CartWidget"

function NavBar() {
    return (
        <div className="bg-sky-500 shadow text-white ">
            <nav className='md:flex md:items-center md:justify-between'>
               <div className="flex justify-between items-center">
                <span className="text-xl font-mono mx-4 p-5 font-['monaco'] cursor-pointer"> 
                <img className="h-10 inline mx-3" src={book}></img>
                Showtime </span>

             
                </div>

                <ul className='md:flex md:items-center z-[-1] bg-sky-500 md:bg-sky-500 md:z-auto md:static absolute w-full left-0 md:w-auto py-5 md:pl-0 pl-7'>
                    <li className = "text-xl sm:text-gray hover:text-cyan-800 duration-500 mx-4 my-4 md:my-0">
                        <a href="#" >Libros</a>
                    </li>
                    <li className = "text-xl hover:text-cyan-800 duration-500 my-4 mx-4 md:my-0">
                        <a href="#" >Peliculas</a>
                    </li>
                    <li className = "text-xl hover:text-cyan-800 duration-500 my-4 mx-4 md:my-0">
                        <a href="#">Obras de Teatro</a>
                    </li>
                    <li className = "text-xl hover:text-cyan-800 duration-500 my-4 mx-4 md:my-0">
                        <a href="#">Espectaculos Deportivos</a>
                    </li>
                    <li className = "text-xl hover:text-cyan-800 duration-500 my-4 mx-4 md:my-0">
                        <a href="#">Evantos Especiales</a>
                    </li>
                    <li className = "text-xl hover:text-cyan-800 duration-500 my-4 mx-4 md:my-0 ">
                        <CartIcon />
                    </li>
                    
                </ul>
            </nav>

        </div>
    );
}

export default NavBar;