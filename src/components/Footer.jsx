import "../styles/Footer.css"

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-top">

                <div className="footer-brand">
                    <h2>REPUBLIC OF GAMERS</h2>
                    <p>
                        Performa tanpa kompromi untuk gamer,
                        kreator, dan inovator.
                    </p>
                </div>

                <div className="footer-links">
                    <a href="#hero">BERANDA</a>
                    <a href="#specification">SPESIFIKASI</a>
                    <a href="#gallery">GALERI</a>
                </div>

            </div>

            <div className="footer-divider"></div>

            <div className="footer-bottom">
                <span>© 2026 Republic of Gamers</span>
                <span>Designed by Wilson Corneles</span>
            </div>

        </footer>
    )
}