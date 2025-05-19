<script lang="ts">
	import { type Todo, Priority } from '@prisma/client';
	import Cell from './Cell.svelte';
	import Icon from './Icon.svelte';

	export let todo: Todo;
	export let deleteItem: () => void;
	export let updater: <T extends keyof Todo>(id: number, property: T, value: Todo[T]) => void;

	const done = () => {
		todo.done = !todo.done;
		updater(todo.id, 'done', todo.done);
	};

	const changePriority = () => {
		const priorities = Object.values(Priority);
		todo.priority = priorities[(priorities.indexOf(todo.priority) + 1) % priorities.length];
		updater(todo.id, 'priority', todo.priority);
	};
</script>

<Cell>{todo.id}</Cell>

<Cell handler={done}>
	<Icon name={todo.done ? 'task_alt' : 'circle'} color={todo.done ? 'green' : 'red'} />
</Cell>

<Cell>
	<input
		class="description"
		class:disabled={todo.done}
		type="text"
		bind:value={todo.task}
		on:change={() => updater(todo.id, 'task', todo.task)}
		placeholder="Inserisci il nuovo ToDo"
	/>
</Cell>

<Cell handler={changePriority} disabled={todo.done}>
	<span
		class="priority"
		class:low={todo.priority === Priority.BASSA}
		class:medium={todo.priority === Priority.MEDIA}
		class:high={todo.priority === Priority.ALTA}
		class:disabled={todo.done}
	>
		{Priority[todo.priority]}
	</span>
</Cell>

<Cell handler={deleteItem}>
	<Icon name="delete_forever" color="red" />
</Cell>

<style lang="scss">
	.description {
		width: 100%;
		font-size: 20px;
		color: #525252;
		border: none;
		margin-left: 10px;

		&:focus {
			background-color: rgb(204, 229, 253);
			color: black;
			padding: 4px;
		}

		&.disabled {
			text-decoration: line-through;
			opacity: 0.3;
		}
	}

	.priority {
		color: white;
		border-radius: 5px;
		font-weight: bold;
		display: inline-block;
		width: 100px;
		height: 30px;

		&.low {
			background-color: green;
		}

		&.medium {
			background-color: orange;
		}

		&.high {
			background-color: red;
		}

		&.disabled {
			background-color: grey;
		}
	}
</style>
