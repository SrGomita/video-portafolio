/* eslint-disable react/no-unescaped-entities */
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord, FaLinkedin, FaTwitter } from "react-icons/fa";
import img from '../assets/profile.jpg'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import '../less/Banner.less';

const Banner = () => {
    useEffect(() => {
        Aos.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750
        })
    },[])
    return (
        <div data-aos="fade-up" className="banner-container">
            <div className="text-content">
                <h1 data-aos="fade-right" className="title">Bienvenido A <span className="highlight">Mi Portafolio</span></h1>
                <p data-aos="fade-left">Soy Efraín Antonio Alvarado Puerto, nacido el 7 de abril de 2004 en Juticalpa, Olancho, Honduras. 
                Completé mi educación básica en el Centro de Educación Básica "25 de Febrero", 
                donde descubrí mi interés por la informática. Posteriormente, 
                obtuve mi bachillerato en Técnico en Informática en el Instituto Departamental La Fraternidad, 
                adquiriendo habilidades en programación, desarrollo de software y mantenimiento de sistemas informáticos.</p>
                <div className="social-links">
                    <a href="" className="icon-link">
                        <AiFillGithub className="icon"/>
                    </a>
                    <a href="" className="icon-link">
                        <FaLinkedin className="icon"/>
                    </a>
                    <a href="" className="icon-link">
                        <FaTwitter className="icon"/>
                    </a>
                    <a href="" className="icon-link">
                        <FaDiscord className="icon"/>
                    </a>
                </div>
            </div>
            <img data-aos="fade-up" src={img} width={290} height={290} className="profile-img" alt="" />
        </div>
    );
};

export default Banner;
