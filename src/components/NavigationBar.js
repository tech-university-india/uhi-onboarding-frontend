
/* eslint-disable jsx-a11y/anchor-is-valid */
import "../app/globals.css";
function NavigationBar() {
    return (<nav class="flex sticky top-0 z-30 px-4 py-3 border-b md:shadow-lg items-center relative bg-uhigreen font-sans">
    <div class="text-lg md:py-0 py-4 text-5xl">
        Unified Health Interface
    </div>
    <ul class="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-1">
        <li>
            <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-green-500 hover:rounded-full text-3xl">
                <span>Home</span>
            </a>
        </li>
        <li>
            <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-green-500 hover:rounded-full text-3xl">
                Documentation
            </a>
        </li>
        <li>
            <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-green-500 hover:rounded-full text-3xl">
                <span>FAQ's</span>
                
            </a>
        </li>
        <li>
            <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-green-500 hover:rounded-full text-3xl">
                <span>Contact Us</span>
            </a>
        </li>
    </ul>
    <div class="ml-auto md:hidden text-gray-500 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
    </div>
</nav>)
}
export default NavigationBar;