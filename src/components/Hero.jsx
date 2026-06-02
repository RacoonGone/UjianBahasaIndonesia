import laptop1 from "../assets/laptopsnobg1upg.png"
import laptop2 from "../assets/laptopsnobg2upg.png"
import "../styles/Hero.css"
import { useState, useEffect } from "react"
import { gsap } from "gsap"

export default function Hero() {
    const [selected, setSelected] = useState(null)
    const handleSelect = (side) => {
        setSelected(prev => prev === side ? null : side)
    }

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set([".imagelaptop1", ".imagelaptop2"], {
                xPercent: -50,
                yPercent: -50,
            });
            const timeline = gsap.timeline();
            timeline.from(".imagelaptop1", {
                    x: -1000,
                    y: -400,
                    duration: 1,
                    ease: "power2.out"
                })
                .from(".imagelaptop2", {
                    x: 1000,
                    y: 400,
                    duration: 1,
                    ease: "power2.out"
                });
        });
        return () => ctx.revert();
    }, []);
    useEffect(() => {
        if (selected === "left") {
            gsap.to(".imagelaptop1", { scale: 1.3, duration: 0.5, ease: "power2.out" });
            gsap.to(".imagelaptop2", { scale: 1, duration: 0.5, ease: "power2.out" });
        } else if (selected === "right") {
            gsap.to(".imagelaptop2", { scale: 1.3, duration: 0.5, ease: "power2.out" });
            gsap.to(".imagelaptop1", { scale: 1, duration: 0.5, ease: "power2.out" });
        } else {
            gsap.to(".imagelaptop1", { scale: 1, duration: 0.5, ease: "power2.out" });
            gsap.to(".imagelaptop2", { scale: 1, duration: 0.5, ease: "power2.out" });
        }
    }, [selected]);

    return(
        <div id="home" className={`hero ${selected === "left" ? "heroselected-left" : ""} ${selected === "right" ? "heroselected-right" : ""}`}>
            <div className={`descriptionright ${selected === "left" ? "desc-fade" : ""}`}>

                {selected !== "right" && (
                    <div className="idlepanel idlepanelright">
                        <span className="idletag idletagdark">Eclipse Gray</span>
                        <h3 className="idlemodel idlemodeldark">Zephyrus G16</h3>
                        <p className="idletagline idletaglinedark">Besar.<br/>Tak Terkalahkan.</p>
                        <span className="idle-hint">Klik untuk buka</span>
                    </div>
                )}

                {selected === "right" && (
                    <div className="activepanel activepanelright">
                        <button className="activeclose activeclosedark" onClick={() => setSelected(null)}>✕ Tutup</button>
                        <span className="activecolor activecolordark">Abu-abu Eclipse</span>
                        <h3 className="activemodel activemodeldark">Zephyrus G16</h3>
                        <p className="activedesc activedescdark">Flagship 16 inci. Dirancang untuk kreator dan pesaing yang menolak berkompromi.</p>
                        <div className="activespecs activespecsdark">
                            <div className="specrow specrowdark">
                                <span className="speclbl">GPU</span>
                                <span className="specval">RTX 5090</span>
                            </div>
                            <div className="specrow specrowdark">
                                <span className="speclbl">CPU</span>
                                <span className="specval">Intel Core Ultra 9</span>
                            </div>
                            <div className="specrow specrowdark">
                                <span className="speclbl">Layar</span>
                                <span className="specval">2.5K 240Hz OLED</span>
                            </div>
                            <div className="specrow specrowdark">
                                <span className="speclbl">Berat</span>
                                <span className="specval">1,85 kg</span>
                            </div>
                        </div>
                        <button className="activecta activectadark">Konfigurasi & Beli</button>
                    </div>
                )}
            </div>

            <div className="images">
                <img src={laptop1} alt="Laptop pertama" className={"imgbase imagelaptop1 " + (selected === "left" ? "laptopactive" : "") + " " + (selected === "right" ? "laptophidden" : "")} />
                <img src={laptop2} alt="Laptop kedua" className={"imgbase imagelaptop2 " + (selected === "right" ? "laptopactive" : "") + " " + (selected === "left" ? "laptophidden" : "")} />

                {!selected && (
                    <>
                        <div className="hitboxleft hitboxes" onClick={() => handleSelect("left")} />
                        <div className="hitboxright hitboxes" onClick={() => handleSelect("right")} />
                    </>
                )}
                {selected && (
                    <div className="hitboxes hitboxdeselect" onClick={() => setSelected(null)} />
                )}
            </div>
            <div className={`descriptionleft ${selected === "right" ? "desc-fade" : ""}`}>
                {selected !== "left" && (
                    <div className="idlepanel">
                        <span className="idletag">Platinum White</span>
                        <h3 className="idlemodel">Zephyrus G14</h3>
                        <p className="idletagline">Tenaga.<br/>Halus.</p>
                        <span className="idle-hint">Klik untuk buka</span>
                    </div>
                )}
                {selected === "left" && (
                    <div className="activepanel activepanelleft">
                        <button className="activeclose" onClick={() => setSelected(null)}>✕ Tutup</button>
                        <span className="activecolor">Putih Platinum</span>
                        <h3 className="activemodel">Zephyrus G14</h3>
                        <p className="activedesc">Kekuatan 14 inci. Ringkas untuk di mana saja, tak kenal lelah untuk semua hal.</p>
                        <div className="activespecs">
                            <div className="specrow">
                                <span className="speclbl">GPU</span>
                                <span className="specval">RTX 5080</span>
                            </div>
                            <div className="specrow">
                                <span className="speclbl">CPU</span>
                                <span className="specval">Ryzen AI 9</span>
                            </div>
                            <div className="specrow">
                                <span className="speclbl">Layar</span>
                                <span className="specval">3K 120Hz OLED</span>
                            </div>
                            <div className="specrow">
                                <span className="speclbl">Berat</span>
                                <span className="specval">1,5 kg</span>
                            </div>
                        </div>
                        <button className="activecta">Konfigurasi & Beli</button>
                    </div>
                )}
            </div>

            <div className="hero-marquee">
                <div className="hero-marquee-track">
                    <span className="marquee-item">ROG <em>ZEPHYRUS</em> <span className="marquee-dot">◆</span></span>
                    <span className="marquee-item">ROG <em>ZEPHYRUS</em> <span className="marquee-dot">◆</span></span>
                    <span className="marquee-item">ROG <em>ZEPHYRUS</em> <span className="marquee-dot">◆</span></span>
                    <span className="marquee-item">ROG <em>ZEPHYRUS</em> <span className="marquee-dot">◆</span></span>
                    <span className="marquee-item">ROG <em>ZEPHYRUS</em> <span className="marquee-dot">◆</span></span>
                    <span className="marquee-item">ROG <em>ZEPHYRUS</em> <span className="marquee-dot">◆</span></span>
                    <span className="marquee-item">ROG <em>ZEPHYRUS</em> <span className="marquee-dot">◆</span></span>
                    <span className="marquee-item">ROG <em>ZEPHYRUS</em> <span className="marquee-dot">◆</span></span>
                    <span className="marquee-item">ROG <em>ZEPHYRUS</em> <span className="marquee-dot">◆</span></span>
                    <span className="marquee-item">ROG <em>ZEPHYRUS</em> <span className="marquee-dot">◆</span></span>
                    <span className="marquee-item">ROG <em>ZEPHYRUS</em> <span className="marquee-dot">◆</span></span>
                    <span className="marquee-item">ROG <em>ZEPHYRUS</em> <span className="marquee-dot">◆</span></span>
                </div>
            </div>
        </div>
    )
}