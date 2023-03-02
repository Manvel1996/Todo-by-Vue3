

<template>
    <div class="todoApp">
        <TodoHeader @addNewTodo="addTodo"/>
        <TodoList
                :todoArr="todoArr"
                @removeTodo="removeTodo"
                @changeTodo="changeTodo"
        />
    </div>
</template>

<script >
    import TodoHeader from "./TodoHeader.vue"
    import TodoList from "./TodoList.vue";
    export  default{
        components:{TodoList, TodoHeader},
        data(){
            return{
                todoArr:[{id:1,todoText:"Learn Vue",isCompleted:false}],
            }
        },
        methods:{
            addTodo(todo){
                this.todoArr.push(todo)
            },
            removeTodo(id) {
                this.todoArr = this.todoArr.filter((t) => t.id !== id);
            },
            changeTodo(todo){
                this.todoArr=this.todoArr.map(t=>{
                    if(todo.id === t.id){
                        const newTodo = {
                            id:todo.id,
                            todoText:todo.todoText,
                            isCompleted:!todo.isCompleted
                        }
                        return newTodo
                    }else return t
                })
            }
        }
    }
</script>

<style >
.todoApp{
    margin-top: 50px;
    width: 70%;
    min-height: 200px;
    border: 1px solid teal;
    padding: 15px;
    background: lightGray;
}
</style>