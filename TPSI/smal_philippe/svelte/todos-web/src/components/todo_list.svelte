<script>
    import Icon from "./icon.svelte";
    import Priority from "./priority.svelte";
    import TodoItem from "./todo_item.svelte";

    let todos = []
    let last_id = 0;

    const create_todo = async () => {
        let todo = {
            id: ++last_id,
            task: '',
            done: false,
            priority: 3
        }
        console.log("CREATE: ", todo);
        todos = [...todos, todo]
    }

    const change_todo_item = async (e) => {
        delete_item(e.detail.id)
    }

    const delete_item = (id) => {
        console.log("DELETE : ", id)
        todos = todos.filter(t => t.id != id)
    }

</script>

<h1>Todos</h1>
<div class="todo-list">
    <div class="header"><Icon nome="tag"/></div>
    <div class="header"><Icon nome="task_alt"/></div>
    <div class="header"><Icon nome="list"/></div>
    <div class="header"><Icon nome="schedule"/></div>
    <div class="header header-last"><Icon nome="add_box" handler={create_todo}/></div>

    {#each todos as todo}
        <TodoItem todo={todo} on:change={change_todo_item}/>
    {/each}

</div>

<style>
    .todo-list {
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
        border: 0px solid blue;
        width: 95%;
        margin: auto;

    }

    .header {
        border-bottom: 1px solid #E7ECEE;
        border-right: 1px solid #E7ECEE;
        text-align: center;
        padding-bottom: 20px;
    }

    .header-last {
        border-right: none;
    }
</style>