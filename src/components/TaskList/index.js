import React from 'react';
import { Link } from 'react-router-dom';
import { FiInbox, FiTrash2, FiList, FiUsers, FiClock, FiHelpCircle, FiCheckSquare } from 'react-icons/fi';

import './styles.css';

export default function TaskList() {
    return (
        <div class="task-list-container">
            <div class="task-list-title">
                <h1>Tarefas</h1>
                <button className="button-add">+ Criar novo quadro</button>
            </div>
            <div class="tres-abas">
                <div class="aba">
                    <h3 id="titulo">A fazer</h3>
                    <div class="texto-tarefa">
                        <p>Reunião Geral</p>
                    </div>
                    <div class="espaco-icon">
                        <i class="material-icons icon-leandro">mode</i>
                        <i class="material-icons icon-leandro">delete</i>
                    </div>
                    <hr class="line-leandro"></hr>
                    <div class="texto-tarefa">
                        <p>Compra do mês</p>
                    </div>
                    <div class="espaco-icon">
                        <i class="material-icons icon-leandro">mode</i>
                        <i class="material-icons icon-leandro">delete</i>
                    </div>
                    <hr class="line-leandro"></hr>
                    <div class="texto-tarefa">
                        <p>Assistir Aula</p>
                    </div>
                    <div class="espaco-icon">
                        <i class="material-icons icon-leandro">mode</i>
                        <i class="material-icons icon-leandro">delete</i>
                    </div>
                    <hr class="line-leandro"></hr>
                    <input class="botao-tarefa" type="button" value="+ Adicionar tarefa"></input>
                </div>
                <div class="aba">
                    <h3 id="titulo">A fazer</h3>
                    <div class="texto-tarefa">
                        <p>Tarefa Semanal</p>
                    </div>
                    <div class="espaco-icon">
                        <i class="material-icons icon-leandro">mode</i>
                        <i class="material-icons icon-leandro">delete</i>
                    </div>
                    <hr class="line-leandro"></hr>
                    <div class="texto-tarefa">
                        <p>Protótipo</p>
                    </div>
                    <div class="espaco-icon">
                        <i class="material-icons icon-leandro">mode</i>
                        <i class="material-icons icon-leandro">delete</i>
                    </div>
                    <hr class="line-leandro"></hr>
                    <div class="texto-tarefa">
                        <p>Lista de Exercícios</p>
                    </div>
                    <div class="espaco-icon">
                        <i class="material-icons icon-leandro">mode</i>
                        <i class="material-icons icon-leandro">delete</i>
                    </div>
                    <hr class="line-leandro"></hr>
                    <input class="botao-tarefa" type="button" value="+ Adicionar tarefa"></input>
                </div>
                <div class="aba">
                    <h3 id="titulo">Pronto</h3>
                    <div class="texto-tarefa">
                        <p>Prova</p>
                    </div>
                    <div class="espaco-icon">
                        <i class="material-icons icon-leandro">mode</i>
                        <i class="material-icons icon-leandro">delete</i>
                    </div>
                    <hr class="line-leandro"></hr>
                    <div class="texto-tarefa">
                        <p>Reunião Sprint</p>
                    </div>
                    <div class="espaco-icon">
                        <i class="material-icons icon-leandro">mode</i>
                        <i class="material-icons icon-leandro">delete</i>
                    </div>
                    <hr class="line-leandro"></hr>
                    <div class="texto-tarefa">
                        <p>Front End</p>
                    </div>
                    <div class="espaco-icon">
                        <i class="material-icons icon-leandro">mode</i>
                        <i class="material-icons icon-leandro">delete</i>
                    </div>
                    <hr class="line-leandro"></hr>
                    <input class="botao-tarefa" type="button" value="+ Adicionar tarefa"></input>
                </div>
            </div>
        </div>
    );
}