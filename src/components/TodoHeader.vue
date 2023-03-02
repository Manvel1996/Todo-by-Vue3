<template>
    <div class="header">
        <form @submit.prevent="addTodo">
            <input
                    @input="iptText"
                    :value="todoText"
                    maxlength="20"
                    class="addInp"
                    type="text"
                    placeholder="Add Todo"
            />
            <p v-if="emptyIptInfo" class="emptyIpt">Please write text</p>
            <button class="addBtn">Add</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "TodoHeader",
        data(){
            return{
                todoText: "",
                emptyIptInfo:false,
            }
        },
        methods:{
            addTodo(){
                if(this.todoText.trim().length > 0){
                    const newTodo ={
                        id:Date.now(),
                        todoText:this.todoText,
                        isCompleted:false
                    }
                    this.$emit("addNewTodo",newTodo)
                    this.todoText =""
                }else this.emptyIptInfo = true
            },
            iptText(e){
                this.todoText= e.target.value
                this.emptyIptInfo=false
            }
        }
    }
</script>

<style scoped>
    form{
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        position: relative;
    }
    .emptyIpt{
        position: absolute;
        bottom: -12px;
        left: 2px;
        font-size: 10px;
        color: red;
    }
    .addInp{
        padding: 5px;
        outline: none;
    }
    .addBtn{
        padding: 5px;
        border: none;
        cursor: pointer;
    }
</style>