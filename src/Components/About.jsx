import img from '../assets/profile.jpg';
import '../less/About.less';

const About = () => {
    return (
        <div id='About' className="about-container">
            <img data-aos="fade-down" src={img} width={290} height={290} className="profile-img" alt="" />
            <div className="text-content">
                <h1 data-aos="fade-right" className="title">Sobre Mí</h1>
                <p data-aos="fade-left">Actualmente, curso la carrera de Ingeniería en Ciencias de la Computación en la Universidad Católica de Honduras (UNICAH). 
                En esta institución, he ampliado mis conocimientos en diversas áreas de la ingeniería informática y he participado en proyectos innovadores. 
                Estoy comprometido con el aprendizaje continuo y la aplicación de mis habilidades en el ámbito tecnológico.</p>
                <div className="button-container">
                    <div className="button-wrapper">
                        <button className="resume-button">Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
