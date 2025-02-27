import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => {
    return (
        <main id="main-second-page">
            <div id="about-me">
                <div id="sobre">SOBRE</div>
                <div id="quem-sou"> {"<"}/ Q<span id="uem">uem</span> sou eu {">"}</div>
                <div id="sobre-mim">
                    Olá! Meu nome é <span className="diferente">Caio, tenho 18 anos</span> sou desenvolvedor desde o final de 2023, trabalhando com maior foco em <span className="diferente">aplicações de experiência do usuário,</span> 
                    buscando <span className="diferente">sempre superar as expectativas,</span> executando as tarefas propostas da <span className="diferente">forma mais eficaz possível</span>  
                    <br /> <br /> 
                    Ao longo da minha experiência profissional pude aprimorar minhas habilidades, como o trabalho em equipe, comunicação e aprendizado contínuo. Além disso, melhorei minhas capacidades 
                    técnicas, tendo como principal foco <span className="diferente">JavaScript e ReactJs.</span> Atualmente, estou em busca de oportunidades para expandir ainda mais essas habilidades 
                    e <span className="diferente">adquirir novos conhecimentos técnicos.</span>  
                </div>
            </div>
            <div id="rigth-second-page">
                <div id="detalhe-bolinha-second">
                    <div id="corredor-bolinhas-second">
                        <div className="bolinha01"></div>
                        <div className="bolinha02"></div>
                        <div className="bolinha03"></div>
                        <div className="bolinha04"></div>
                        <div className="bolinha05"></div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutMe;