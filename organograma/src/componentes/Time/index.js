import Colaborador from '../colaborador'
import './Time.css'

const Time = ({nome, colaboradores, corPrimaria, corSecundaria}) => {

    return (
        (colaboradores.length > 0) && 
        <section className='time' style={{backgroundColor: corPrimaria}}>
            <h3 style={{borderColor: corSecundaria}}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( colaborador => 
                    <Colaborador
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem}
                        corDeFundo={corSecundaria}
                    />)}
            </div>
        </section>
    )
}

export default Time