import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import '../less/Projects.less';

const Projects = () => {
    return (
        <div id="Projects" className="projects-container">
            <h1 data-aos="fade-right" className="projects-title">Proyectos</h1>
            <div className="projects-grid">
                <img data-aos="fade-up" height={300} width={300} className="project-img" src={img2} alt="" />
                <img data-aos="fade-down" height={300} width={300} className="project-img" src={img3} alt="" />
                <img data-aos="fade-up" height={300} width={300} className="project-img" src={img4} alt="" />
                <img data-aos="fade-down" height={300} width={300} className="project-img" src={img5} alt="" />
            </div>
        </div>
    );
};

export default Projects;
