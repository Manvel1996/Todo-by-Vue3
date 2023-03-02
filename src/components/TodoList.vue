<template>
    <div v-if="todoArr.length > 0">
        <h3>Todo List</h3>
        <TransitionGroup name="todoList">
            <TodoItem
                    v-for="todo in todoArr"
                    :todo="todo"  :key="todo.id"
                    @removeTodo="$emit('removeTodo',todo.id)"
                    @changeTodo="$emit('changeTodo',todo)"
            />
        </TransitionGroup>
    </div>
    <div v-else class="emptyList" >Todo list is empty</div>
</template>

<script>
    import TodoItem from "./TodoItem.vue"
    export default {
        name: "TodoList",
        props:{
            todoArr:{
                type:Array,
                required:true,
            }
        },
        components:{
            TodoItem
        }
    }
</script>

<style scoped>
    .emptyList{
        color:red;
        margin: 30px auto;
        width: 200px;
        font-size: 25px;
    }
    .todoList-move,
    .todoList-enter-active,
    .todoList-leave-active {
        transition: all 0.5s ease;
    }
    .todoList-enter-from,
    .todoList-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
</style>