<script lang="ts">
	import { Priority, type Todo } from '@prisma/client';
	import GridHeader from './GridHeader.svelte';
	import TodoItem from './TodoItem.svelte';

	export let todos: Todo[];

	const deleteItem = async (id: number) => {
		if (confirm("Vuoi davvero eliminare il todo?")) {
			await fetch(`/api/todos/${id}`, { method: 'DELETE' });
			todos = todos.filter(t => t.id !== id);
		}
	};

	const updateItem = async (id: number, property: keyof Todo, value: Todo[keyof Todo]) => {
		const updated = await (await fetch(`/api/todos/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ [property]: value })
		})).json();
	};

	const addItem = async () => {
		todos = [
			...todos,
			await (
				await fetch(`/api/todos`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						done: false,
						task: '',
						priority: Priority.BASSA
					})
				})
			).json()
		];
	};
</script>

<div class="grid">
	<GridHeader {addItem} />

	{#each todos as todo}
		<TodoItem bind:todo deleteItem={() => deleteItem(todo.id)} updater={updateItem} />
	{/each}
</div>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
		width: 95%;
	}
</style>
