import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <section >
                <ul className='redes_sociais'>
                    <li>
                        <a href="https://github.com/sidneygyne" target="_blank">
                            <img src="/imagens/github.svg" alt="imagem github" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/sidneygyn" target="_blank">
                            <img src="/imagens/linkedin.svg" alt="imagem linkedin" />
                        </a>
                    </li>
                    <li>
                        <a href="https://instragram.com/sidneygyn" target="_blank">
                            <img src="/imagens/instagram.svg" alt="imagem instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt=" " />
            </section>
            <section>
                <p>Desenvolvido por Sidney Rodrigues Magalhães</p>
            </section>
        </footer>
    )
}

export default Rodape