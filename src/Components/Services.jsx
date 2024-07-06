import '../less/Services.less';

const Services = () => {
    return (
        <div id="Services" className="services-container">
            <h1 data-aos="fade-right" className="services-title">Servicios</h1>
            <div className="services-grid">
                <h2 data-aos="fade-up" className="service-item">Analisis</h2>
                <h2 data-aos="fade-down" className="service-item">Diseño</h2>
                <h2 data-aos="fade-up" className="service-item">Programación</h2>
                <h2 data-aos="fade-down" className="service-item">C#, Python, JS</h2>
            </div>
        </div>
    );
};

export default Services;
