import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-white px-8 py-4 shadow-sm border-b border-zinc-100">
            <h2 className="bg-orange-500 text-white p-4 font-bold text-3xl text-center rounded-xl tracking-tight">MUNCHLY
         </h2>
            <ul className="flex items-center gap-6 font-medium text-zinc-600">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/track-order">Track Order</Link></li>
                <li><Link to="/special-offers">Special Offers</Link></li>
                <li><Link to="/browse-menu">Browse Menu</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar