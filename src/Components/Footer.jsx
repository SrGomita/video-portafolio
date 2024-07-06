import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import '../less/Footer.less';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-section">
                    <span className="footer-title">¿Por qué SrGomita?</span>
                    <p className="footer-text">Surgió durante una sesión de videojuegos entre amigos, marcando un momento de camaradería y diversión. 
                        Además de ser un apodo personal, me gusta considerarlo un nombre artístico que refleje mi enfoque 
                        profesional en la ingeniería de sistemas.</p>
                </div>
                <div className="footer-section">
                    <h2 className="footer-title">Servicios</h2>
                    <ul className="services-list">
                        <li>Analista</li>
                        <li>Diseñador Web</li>
                        <li>Desarrolador</li>
                        <li>Programador</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2 className="footer-title">Contacto</h2>
                    <p className="footer-text">Email: efralvarado04@gmail.com</p>
                    <p className="footer-text">Teléfono: +504 1234-5678</p>
                </div>
                <div className="footer-section">
                    <h2 className="footer-title">Sígueme</h2>
                    <div className="social-links">
                        <a className="social-link" href="https://github.com/SrGomita"><FaGithub/></a>
                        <a className="social-link" href="https://github.com/SrGomita"><FaLinkedin/></a>
                        <a className="social-link" href="https://github.com/SrGomita"><FaTwitter/></a>
                        <a className="social-link" href="https://github.com/SrGomita"><FaDiscord/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
