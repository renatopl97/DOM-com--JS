const botaoDeleta = () => {
    const botaoExcluir = document.createElement('button');
    botaoExcluir.innerText = 'Deletar';
    botaoExcluir.addEventListener('click', deletarTarefa);

    return botaoExcluir
}

const deletarTarefa = (evento) => {
    const botaoExcluir = evento.target;
    const tarefaCompleta = botaoExcluir.parentElement;
    tarefaCompleta.remove();
    
    return botaoExcluir
}

export default botaoDeleta