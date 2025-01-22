<script setup lang="ts">
import { defineProps, defineEmits, reactive, watch } from 'vue'
import Todo from '../models/Todo'
// Recevoir les données d'une tâche en tant que propriété
const props = defineProps<{
    todo: Todo
}>()

// Définir les événements émis par le composant
const emit = defineEmits(['update:todo'])

// Créer une copie locale réactive de la tâche
const localTodo = reactive({ ...props.todo })

// Mettre à jour la copie locale lorsque la prop change
watch(
    () => props.todo,
    newTodo => {
        Object.assign(localTodo, newTodo)
    },
)

// Fonction pour émettre l'événement de mise à jour
const toggleCompletion = () => {
    localTodo.isCompleted = !localTodo.isCompleted
    emit('update:todo', { ...localTodo })
}
</script>

<template>
    <div class="todo-item">
        <label>
            <input
                type="checkbox"
                :checked="localTodo.isCompleted"
                @change="toggleCompletion"
            />
            <span :class="{ completed: localTodo.isCompleted }">{{
                localTodo.title
            }}</span>
            <span v-if="localTodo.dueDate" class="due-date"
                >({{ localTodo.dueDate }})</span
            >
        </label>
    </div>
</template>

<style scoped>
.todo-item {
    margin-bottom: 10px;
}

.completed {
    text-decoration: line-through;
}

.due-date {
    font-size: 0.8em;
    color: #999;
}
</style>
