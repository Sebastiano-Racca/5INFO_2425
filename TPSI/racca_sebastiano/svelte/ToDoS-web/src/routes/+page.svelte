<script lang="ts">
	import TodoList from '$lib/components/TodoList.svelte';
	import type { Item } from '$lib/types/item';
	import { onMount } from 'svelte';

	let todo: Item[] = [];

	onMount(() => {
		todo = Array.from({ length: localStorage.length }, (_, i) => localStorage.key(i))
			.filter((key) => key?.startsWith('todo-') || false)
			.map((key) => JSON.parse(localStorage.getItem(key || '') || '{}'));
	});
</script>

<div>
	<h1>ToDos</h1>

	<TodoList bind:todo />
</div>

<style lang="scss">
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>
