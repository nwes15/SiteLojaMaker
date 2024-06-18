import React from 'react';
import Ebook from './Ebook';

const ebooks = [
    { imagem: 'img/img-cover/1.jpg', descricao: 'Desenvolva planos de aula sensacionais com nosso eBook: "Plano de Aula".Transforme sua prática pedagógica!', link: 'https://pay.kiwify.com.br/i7ZIocC' },
    { imagem: 'img/img-cover/2.jpg', descricao: 'Explore o mundo STEAM com "Cultura Maker I". Atividades para promover aprendizado criativo na sala de aula.', link: 'https://pay.kiwify.com.br/sqLOt3a' },
    { imagem: 'img/img-cover/3.jpg', descricao: 'Descubra o poder do STEAM na sala de aula - Cultura Maker II. Explore atividades inovadoras para promover aprendizado criativo e colaborativo.', link: 'https://pay.kiwify.com.br/JKXoO8F' },
    { imagem: 'img/img-cover/4.jpg', descricao: 'Desvende o potencial do Makey Makey na educação com "Cultura Maker III". Transforme sua sala de aula com atividades interativas e criativas.', link: 'https://pay.kiwify.com.br/I1VGCio' },
    { imagem: 'img/img-cover/5.jpg', descricao: 'Descubra ideias criativas para suas aulas de tecnologia com "Cultura Maker IV". Transforme o aprendizado em uma jornada emocionante e inovadora.', link: 'https://pay.kiwify.com.br/z4VEz6G' },
    { imagem: 'img/img-cover/7.jpg', descricao: 'Explore a importância da alimentação saudável com "Cultura Maker Projeto Prático I". Dê vida ao aprendizado com atividades criativas e práticas.', link: 'https://pay.kiwify.com.br/pjS2ztb' },
];

const EbookList = () => {
    return (
        <section className="cardebook" style={{ width: '100%' }}>
            {ebooks.map((ebook, index) => (
                <Ebook
                    key={index}
                    imagem={ebook.imagem}
                    descricao={ebook.descricao}
                    link={ebook.link}
                />
            ))}
        </section>
    );
};

export default EbookList;
