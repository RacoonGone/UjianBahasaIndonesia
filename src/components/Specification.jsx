import "../styles/Specification.css"
import { useRef, useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap"
import zephyrus1 from "../assets/rogzephyrusg14.png"

gsap.registerPlugin(ScrollTrigger)

export default function Specification() {
    const sectionRef = useRef(null)
    const imageRef = useRef(null)
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(".specslide", {
                opacity: 0
            })
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=400%",
                    pin: true,
                    scrub: 1,
                }
            })
            tl.to(".slide1", {
                opacity: 1,
                duration: 1
            })
            tl.to(imageRef.current, {
                filter: "drop-shadow(0 40px 80px rgba(143, 102, 255, 0.35))",
                duration: 0.5
            }, "<")
            tl.to({}, { duration: 1.5 })

            tl.to(".slide1", {
                opacity: 0,
                duration: 1
            })
            tl.to(".slide2", {
                opacity: 1,
                duration: 1
            }, "<")
            tl.to(imageRef.current, {
                filter: "drop-shadow(0 40px 80px rgba(66, 181, 255, 0.32))",
                duration: 0.5
            }, "<")
            tl.to({}, { duration: 1.5 })
            tl.to(".slide2", {
                opacity: 0,
                duration: 1
            })
            tl.to(".slide3", {
                opacity: 1,
                duration: 1
            }, "<")
            tl.to(imageRef.current, {
                filter: "drop-shadow(0 40px 80px rgba(86, 243, 255, 0.28))",
                duration: 0.5
            }, "<")
            tl.to({}, { duration: 1.5 })
            tl.to(".slide3", {
                opacity: 0,
                duration: 1
            })
            tl.to(".slide4", {
                opacity: 1,
                duration: 1
            }, "<")
            tl.to(imageRef.current, {
                filter: "drop-shadow(0 40px 80px rgba(255, 115, 186, 0.28))",
                duration: 0.5
            }, "<")
            tl.to({}, { duration: 1.5 })

            tl.to(".slide4", {
                opacity: 0,
                duration: 1
            })
            tl.to(".slide5", {
                opacity: 1,
                duration: 1
            }, "<")
            tl.to(imageRef.current, {
                filter: "drop-shadow(0 40px 80px rgba(143, 102, 255, 0.35))",
                duration: 0.5
            }, "<")

            gsap.to(".specbar",{
                height:"100%",
                ease:"none",
                scrollTrigger:{
                    trigger:sectionRef.current,
                    start:"top top",
                    end:"bottom bottom",
                    scrub:true
                }
            })
            
        }, sectionRef)

        return () => ctx.revert()

    }, [])
    return(
        <div id="spec" className="specification" ref={sectionRef}>
            <div className="thissectionpin">
                <div className="specimage">
                    <img ref={imageRef} src={zephyrus1} className="laptopimg2 img1" />
                </div>
                <div className="speccontent">
                    <div className="specslide slide1">
                        <span>PERFORMA</span>
                        <h2>RTX 5090</h2>
                        <p>Hingga 175W TGP</p>
                    </div>
                    <div className="specslide slide2">
                        <span>LAYAR</span>
                        <h2>240Hz OLED</h2>
                        <p>Resolusi 2880×1800</p>
                    </div>
                    <div className="specslide slide3">
                        <span>TERMAL</span>
                        <h2>Dingin Di Bawah Tekanan</h2>
                        <p>Liquid Metal + Kipas Aliran Lengkung</p>
                    </div>
                    <div className="specslide slide4">
                        <span>DESAIN</span>
                        <h2>14.9mm</h2>
                        <p>Aluminium CNC 1,50kg</p>
                    </div>
                    <div className="specslide slide5">
                        <span>BATERAI</span>
                        <h2>25 Jam</h2>
                        <p>Pengisian USB-C 250W</p>
                    </div>
                </div>
                <div className="specbg">
                    SPESIFIKASI
                </div>
                <div className="specprogress">
                    <div className="specbar"></div>
                </div>
            </div>
        </div>
    )
}