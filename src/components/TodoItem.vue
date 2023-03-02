<template>
    <div class="todo">
        <input
                :value="todo.isCompleted"
                @input="$emit('changeTodo')"
                type="checkbox"
        />
        <p :class="{
            completedTodo:todo.isCompleted
        }">{{todo.todoText}}</p>
        <button class="removeTodoBtn" @click="removeTodoShow">X</button>
        <MyModal v-model:show="showModal">
            <h4>Remove todo?</h4>
            <div class="removeModalBtns">
                <button @click="this.showModal=false" class="removeModalBtnNo">No</button>
                <button @click="removeApprove" class="removeModalBtnYes">Yes</button>
            </div>
        </MyModal>
    </div>
</template>

<script>

    export default {
        name: "TodoItem",
        props: {
            todo: {
                type: Object,
                required: true,
            },
        },
        data(){
            return{
                showModal:false
            }
        },
        methods:{
            removeTodoShow(){
                this.showModal=true
            },
            removeApprove(){
                this.$emit('removeTodo');
                this.showModal=false
            }
        }
    }
</script>

<style scoped>
    .todo{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
    }
    .removeTodoBtn{
        padding: 3px;
        background: none;
        border: none;
        color: red;
        cursor: pointer;
    }
    .removeModalBtns{
        display: flex;
        gap:20px;
        margin-top: 5px;
    }
    .removeModalBtns>button{
        border: none;
        width: 40px;
        border-radius: 15px;
        color: white;
        padding: 3px;
        cursor: pointer;
    }
    .removeModalBtnNo{
        background: green;
    }
    .removeModalBtnYes{
        background: red;
    }
    .completedTodo{
        text-decoration: line-through;
        opacity: 0.5;
    }
</style>