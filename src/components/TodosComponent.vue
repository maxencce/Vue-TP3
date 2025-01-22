<script setup lang="ts">
import { reactive, ref } from 'vue'
import TodoComponent from './TodoComponent.vue'
import Todo from '../models/Todo'

// Liste des tâches
const todos = reactive<Todo[]>([
    {
        id: 1,
        title: 'Apprendre Vue.js',
        isCompleted: false,
        dueDate: '2024-12-01',
    },
    {
        id: 2,
        title: 'Faire les courses',
        isCompleted: true,
        dueDate: '2024-12-02',
    },
    {
        id: 3,
        title: 'Lire un livre',
        isCompleted: false,
        dueDate: '2024-12-03',
    },
])

// Fonction pour mettre à jour une tâche
const updateTodo = (index: number, updatedTodo: Todo) => {
    todos[index] = updatedTodo
}

const addTodo = () => {
    if (newTodoTitle.value.trim() === '') {
        return
    }

    todos.push({
        id: todos.length + 1,
        title: newTodoTitle.value,
        isCompleted: false,
        dueDate: new Date().toISOString().split('T')[0],
    })

    newTodoTitle.value = ''
}

// Titre de la nouvelle tâche
const newTodoTitle = ref('')
</script>

<template>
    <div>
        <input type="text" v-model="newTodoTitle" />
        <button @click="addTodo">Add Todo</button>
    </div>
    <div class="todos">
        <h1>Todos list</h1>
        <div v-for="(todo, index) in todos" :key="todo.id">
            <TodoComponent
                :todo="todo"
                @update:todo="updateTodo(index, $event)"
            />
        </div>
    </div>

    <div>
        <h2>TESTS</h2>
        <ul>
            <li v-for="(todo, index) in todos" :key="todo.id">
                {{ index }} - {{ todo.id }} - {{ todo.title }} -
                {{ todo.isCompleted }} - {{ todo.dueDate }}
            </li>
        </ul>
    </div>
</template>
