import '../less/Contact.less';
const Contact = () => {
    return (
        <div id="Contact" className="contact-container">
            <h1 data-aos="fade-left" className="title">Contacto</h1>
            <form action="" className="form">
                <div className="input-group">
                    <input className="input" placeholder="Ingresa tu Nombre" type="text" />
                    <input className="input" placeholder="Ingresa tu Email" type="text" />
                </div>
                <textarea className="textarea" placeholder="Escribe tu mensaje..." cols="20" rows="10"></textarea>
                <button className="submit-button" type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contact;
