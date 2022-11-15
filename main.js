import botaoConclui from './componetes/concluiTarefas.js'
import botaoDeleta from './componetes/deletaTarefas.js'

const criarTarefa = (evento) => {
evento.preventDefault(); //impede o recarregamento da pagina
const lista = document.querySelector("[data-list]"); //seleciona a ul onde vai ser adicionada as anotações
const input = document.querySelector("[data-form-input]"); //seleciona a caixa de texto/form
const valor = input.value; //obtém o "valor" digitado
const tarefa = document.createElement("li"); //const que cria a li
tarefa.classList.add("task"); //adiciona a class ao li
const conteudo = `<p class="content">${valor}</p>`; //const que cria o paragrafo com o texto digitado
tarefa.innerHTML = conteudo; //insere no html o paragrafo
tarefa.appendChild(botaoConclui());
tarefa.appendChild(botaoDeleta());
lista.appendChild(tarefa); //adicionar o paragrafo como filho da li
input.value = " "; //limpa o texto digitado
};

const novaTarefa = document.querySelector("[data-form-button]"); //selecionando o botão

novaTarefa.addEventListener("click", criarTarefa); //aqui vai usar o Criar tarefa ao clicar no botão