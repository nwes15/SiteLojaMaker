import React from 'react';

const Ebook = ({ imagem, descricao, link }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={imagem} className="card-img-top" alt="capa" />
            <div className="card-body">
                <p className="card-text">{descricao}<br/>
                    <a target="_blank" rel="noopener noreferrer" href={link}>Compre aqui</a>
                </p>
            </div>
        </div>
    );
};

export default Ebook;
