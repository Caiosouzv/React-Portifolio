import React from 'react';
import '../styles/Contact.css'; 

const Contact = () => {
    return (
        <main id="main-four-page">
            <section id='right-part'>
                <div id='info-contact'>
                    <h1>CAIO S<span>OU</span>ZA</h1>
                    <h2>Desenvolvedor web</h2>  

                    <h3>Numero: (31) 99140 - 9616</h3>
                    <h3>Email: caiosouzvi@gmail.com</h3>

                    <h4>VAMOS FAZER ALGO INCRIVEL!!</h4>

                    <img src="/assets/gawx-contact(2).png" alt="Imagem principal" id="imagem-contact" />
                    </div>

            </section>



            <section id='left-part'>
                <h1>EXPERIENCIAS</h1>


                <div className="experience">
                    <div className="logo-card">logo</div>
                    <div className="informacoes-card">
                        <div className="top-card">
                            <p>COTEMIG</p>
                            <p>jan de 2022 - dez de 2024</p>
                        </div>
                        
                        <div className="bottom-card">
                            <div className="skills-card">
                            <h2>SKILLS</h2>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>ReactJs</li>
                                    <li>HTML|CSS</li>
                                    <li>TypeScript</li>
                                    <li>PHP</li>
                                </ul>
                            </div>
                            <div className="expr-card">fcgvhb</div>
                        </div>
                    </div>
                </div>

                <div className="experience">
                <div className="logo-card">logo</div>
                    <div className="informacoes-card">
                        <div className="top-card">
                            <p>D´PLACIDO</p>
                            <p>out de 2023 - mar de 2025</p>
                        </div>
                        
                        <div className="bottom-card">
                            <div className="skills-card">
                            <h2>SKILLS</h2>
                                <ul>
                                    <li>dxcfgvhbj</li>
                                    <li>dcfgvhb</li>
                                    <li>hgbjn</li>
                                    <li>gvbjhn</li>
                                    <li>gvjbhn</li>
                                </ul>
                            </div>
                            <div className="expr-card">fcgvhb</div>
                        </div>
                    </div>
                </div>

                <div className="experience">
                <div className="logo-card">logo</div>
                    <div className="informacoes-card">
                        <div className="top-card">
                            <p>PUC MINAS</p>
                            <p>Graduando</p>
                        </div>
                        
                        <div className="bottom-card">
                            <div className="skills-card">
                                <h2>SKILLS</h2>
                                <ul>
                                    <li>dxcfgvhbj</li>
                                    <li>dcfgvhb</li>
                                    <li>hgbjn</li>
                                    <li>gvbjhn</li>
                                    <li>gvjbhn</li>
                                </ul>
                            </div>
                            <div className="expr-card">fcgvhb</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;