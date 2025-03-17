<script lang="ts">
	import type { Item } from '../types/item';
	import GridHeader from './GridHeader.svelte';
	import TodoItem from './TodoItem.svelte';

	export let todo: Item[];

	const deleteItem = (id: number) => {
		if(confirm("Vuoi davvero eliminare l'item?")) {
			todo = todo.filter((item) => item.id != id);
			localStorage.removeItem(`todo-${id}`);
		}
	};

	const updateItem = <T extends keyof Item>(id: number, property: T, value: Item[T]) => {
		const item = todo.find(item => item.id === id)
		if(item) {
			item[property] = value;
		}
		localStorage.setItem(`todo-${id}`, JSON.stringify(item));
	}

	const addItem = () => {
		const newTodo = {
			id: todo.reduce((a, b) => Math.max(a, b.id), -1) + 1,
			done: false,
			description: '',
			priority: 0
		};

		todo = [...todo, newTodo];

		localStorage.setItem(`todo-${newTodo.id}`, JSON.stringify(newTodo));
	};
</script>

<div class="grid">
	<GridHeader {addItem} />

	{#each todo as item}
		<TodoItem {item} deleteItem={() => deleteItem(item.id)} updater={updateItem} />
	{/each}
</div>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
		width: 95%;
	}
</style>
