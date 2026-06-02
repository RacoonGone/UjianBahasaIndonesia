import "../styles/Navbar.css"
import logorog from "../assets/logo_rog.png"

export default function Navbar() {
    return(
        <nav className="navbar">
            <div className="logocontainer">
                <img src={logorog} alt="logo" className="logo"/>
            </div>
            <div className="navlinks">
                <a href="#home">Beranda</a>
                <a href="#spec">Spesifikasi</a>
                <a href="#gallery">Galeri</a>
                <a href="#buy" className="buybtn">Beli Sekarang</a>
            </div>
        </nav>
    )
}