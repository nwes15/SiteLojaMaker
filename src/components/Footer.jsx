import React from 'react';

const Footer = () => {
    return (
        <footer id="contato">
            <p className="textorodape">
                Caso tenham ideias de aulas, projetos, sequências didáditicas, etc. e
                queira vê-los desenvolvidos e transformados em ebook é só entrar em contato conosco:
                <div className="btnn">
                    <a target="_blank" href="http://wa.me/5511971500139"><button type="button" id="btnwhats" className="btn btn-success">Whatsapp</button></a>
                </div>
            </p>
        </footer>
    );
};

export default Footer;
