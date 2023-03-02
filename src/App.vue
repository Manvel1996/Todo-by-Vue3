<template>
    <div class="app">
        <Todo/>
    </div>
</template>

<script >
import  Todo from "./components/Todo.vue"

    export default {
        components:{Todo}
    }
</script>



<style >
.app{
    display: flex;
    justify-content: center;
}
</style>
