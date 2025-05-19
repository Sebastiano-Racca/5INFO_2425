<script lang="ts">
	import TodoList from '$lib/components/TodoList.svelte';
	import type { Todo } from '@prisma/client';
	import { onMount } from 'svelte';

	let todos: Todo[] = [];

	onMount(async () => {
		todos = await (await fetch('/api/todos')).json();
	});
</script>

<div>
	<h1>ToDos</h1>

	<TodoList bind:todos />
</div>

<style lang="scss">
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>
