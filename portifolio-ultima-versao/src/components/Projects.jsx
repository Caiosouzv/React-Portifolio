import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
    return (
        <main id="main-fourty-page">
            <div id="meustxt">MEUS</div>
            <div id="projetostxt">PROJETOS</div>

            <section id="section-projects">
                
                <div id="proj01">
                    <div id="titulo01">AINDA<span id="ked"> FA</span>ZER #1</div>
                    <div id="info-basica01">ainda tenho q fazer um projeto pra essa bomba</div>
                    <div id="botao01">
                        <a href="https://github.com/Caiosouzv" target="_blank" rel="noopener noreferrer">ESPIAR</a>
                    </div>
                    <img src="/assets/gawx-projects.png" alt="Imagem do Projeto 01" id="imagem-projetos" />
                </div>

                
                <div id="proj02">
                    <div id="titulo02">ECOM<span id="mer">MER</span>CE #2</div>
                    <div id="info-basica02">Projeto em ReactJs, integrando front-end com banco de dados</div>
                    <div id="botao02">
                        <a href="https://github.com/Caiosouzv/EcommerceFramework" target="_blank" rel="noopener noreferrer">ESPIAR</a>
                    </div>
                </div>
            </section>

            <div id="link-github">
                <div id='texto-git'>CASO QUEIRA VER MAIS AQUI ESTÁ MEU <a href="https://github.com/Caiosouzv" target="_blank">GITHUB!</a>
                </div>
            </div>
        </main>
    );
};

export default Projects;