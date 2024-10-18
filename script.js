document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Função para adicionar uma nova tarefa
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.textContent = taskText;

        //aqui cria um botão deletar quando a atividade ée adicionada
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remover';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = () => {
            taskList.removeChild(li);
        };

        li.appendChild(deleteButton);
        li.onclick = () => {
            li.classList.toggle('completed');
        };

        taskList.appendChild(li);
        taskInput.value = ''; // aqui luimpa o campo de entrada.
    };

    // Add um evento de clique ao botão
    addTaskButton.addEventListener('click', addTask);

    // botão que permite add tarefas ao pressioná-lo
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
