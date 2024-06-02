import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto.js';
import ListaSuspensa from '../ListaSuspensa/index.js';
import Botao from '../Botao/index.js';
import { useState } from 'react';


const Formulario = ({aoCadastrar, times, aoCriarTime}) => {

    // como a lista esta dulicada com a lista que tem no app.js raiz, foi substituido pelo codigo
    // times={times.map(time => time.nome)} no campo formulario o app.js raiz, 
    // e na  <ListaSuspensa neste codigo abaixo o itens={times} alterado p/ itens={props.times}
    // const times = [ 
    //     'Programação',
    //     'Front-End',
    //     'Data Science',
    //     'Devops',
    //     'Ux e Designer',
    //     'Mobile',
    //     'Inovação e Gestão'
    // ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')
 
    const aoSalvar = (evento) => {
        evento.preventDefault()
        // console.log('Form foi submetido! => ', nome, cargo, imagem, time)
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        })
        //limpar o formulario apos emvio de dados
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const aoSalvarTime = (evento) => {
        evento.preventDefault()
        // console.log('Form foi submetido! => ', nomeTime, corTime)
        aoCriarTime({
            nome: nomeTime,
            cor: corTime
        })

        setNomeTime('')
        setCorTime('')
    }

    return (
        <section className= "formulario">                       
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                    
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                    
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} 
                />
                    

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Times" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)} 
                    />
                <Botao>Criar Card</Botao>
            </form>

            <form onSubmit={aoSalvarTime}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome do time" 
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />  
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cor" 
                    placeholder="Digite a cor do time" 
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                    
                <Botao>Criar um novo time</Botao>
            </form>
        </section>

    )
}

export default Formulario