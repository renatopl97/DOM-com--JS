const botaoConclui = () => {
    const botaoConfirma = document.createElement('button'); //const que cria um botão
    botaoConfirma.classList.add('check-button'); //adiciona a class ao botão
    botaoConfirma.innerText = 'concluir';
    botaoConfirma.addEventListener('click', concluirTarefa); //ao clicar no botão, ela acionar o concluir tarefa
    return botaoConfirma; //aciona a criação de botão
}

const concluirTarefa = (evento) => {
    const botaoConfirma = evento.target 
    const tarefaCompleta = botaoConfirma.parentElement; //seleciona a tag pai do elemento
    tarefaCompleta.classList.toggle('done');//adiciona o traço sobre o texto da tarefa finalizada
}

export default botaoConclui