import React, { useEffect, useRef } from 'react';
import '../styles/Skills.css';

const Skills = () => {
    const skillRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fill-bar');
                    }
                });
            },
            { threshold: 0.5 }
        );

        skillRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            skillRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <main id="main-third-page">
            <div id="sei-fazer">
                O q<span id="oqfazer">ue e</span>u sei fazer:
            </div>

            <div id="barras-skills">
                <div id="javascript">
                    <div id="borda-js">
                        <div
                            id="js-conteudo"
                            ref={(el) => (skillRefs.current[0] = el)}
                        ></div>
                    </div>
                    <div className="linguagem">JavaScript</div>
                </div>

                <div id="reactjs">
                    <div id="borda-rj">
                        <div
                            id="reactjs-conteudo"
                            ref={(el) => (skillRefs.current[1] = el)}
                        ></div>
                    </div>
                    <div className="linguagem">ReactJS</div>
                </div>

                <div id="type">
                    <div id="borda-type">
                        <div
                            id="type-conteudo"
                            ref={(el) => (skillRefs.current[2] = el)}
                        ></div>
                    </div>
                    <div className="linguagem">TypeScript</div>
                </div>

                <div id="css">
                    <div id="borda-css">
                        <div
                            id="css-conteudo"
                            ref={(el) => (skillRefs.current[3] = el)}
                        ></div>
                    </div>
                    <div className="linguagem">TailwindCss</div>
                </div>
            </div>

           <div id="skills-baixo">
                <div className="svg-skills">
                    <i className="fa fa-html5" id="htmlicon"></i>
                </div>
                <div className="svg-skills">
                    <i className="fa fa-css3-alt" id="cssicon"></i>
                </div>
                <div className="svg-skills">
                    <i className="fa fa-php" id="phpicon"></i>
                </div>
                <div className="svg-skills">
                    <i className="fa fa-bootstrap" id="booticon"></i>
                </div>
                <div className="svg-skills">
                    <i className="fa fa-node" id="outroicon"></i>
                </div>
                <div className="svg-skills">
                    <i className="fa fa-github" id="giticon"></i>
                </div>
            </div>
        </main>
    );
};

export default Skills;