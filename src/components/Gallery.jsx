import "../styles/Gallery.css"
import img1 from "../assets/gallery1.png"
import img2 from "../assets/gallery2.png"
import img3 from "../assets/gallery3.png"
import img4 from "../assets/gallery4.png"
import img5 from "../assets/gallery5.png"
import { useRef, useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap"

export default function Gallery() {
    useEffect(() => {
        gsap.from(".galleryitem", {
            opacity: 0,
            y: 80,
            duration: 1,
            stagger: 0.15,
            scrollTrigger: {
                trigger: ".gallery",
                start: "top 70%",
                toggleActions: "play none none reverse",
            }
        })
    }, [])
    return (
        <>
            <section className="gallery" id="gallery">
                <div className="galleryheader">
                    <span>GALERI</span>
                    <h2>Lihat Dari Setiap Sudut</h2>
                    <p>
                        Desain premium, layar OLED, dan detail presisi yang
                        dirancang untuk performa tanpa kompromi.
                    </p>
                </div>

                <div className="gallerygrid">
                    <div className="galleryitem large">
                        <img src={img1} alt="" />
                    </div>
                    <div className="galleryitem">
                        <img src={img2} alt="" />
                    </div>
                    <div className="galleryitem">
                        <img src={img3} alt="" />
                    </div>
                    <div className="galleryitem">
                        <img src={img4} alt="" />
                    </div>
                    <div className="galleryitem">
                        <img src={img5} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}