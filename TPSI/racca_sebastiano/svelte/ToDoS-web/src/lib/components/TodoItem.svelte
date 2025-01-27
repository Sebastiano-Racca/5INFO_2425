<script lang="ts">
	import { Priority, type Item } from '../types/item';
	import Cell from './Cell.svelte';
	import Icon from './Icon.svelte';

	export let item: Item;
	export let deleteItem: () => void;
	export let updater: <T extends keyof Item>(id: number, property: T, value: Item[T]) => void;

	const changePriority = () => {
		item.priority = (item.priority + 1) % 3;
		updater(item.id, "priority", item.priority);
	};

	const done = () => {
		item.done = ! item.done;
		updater(item.id, "done", item.done);
	}
</script>

<Cell>{item.id}</Cell>

<Cell handler={done}>
	<Icon name={item.done ? 'task_alt' : 'circle'} color={item.done ? 'green' : 'red'} />
</Cell>

<Cell>
	<input
		class="description"
		class:disabled={item.done}
		type="text"
		bind:value={item.description}
		on:change={() => updater(item.id, "description", item.description)}
		placeholder="Inserisci il nuovo ToDo"
	/>
</Cell>

<Cell handler={changePriority} disabled={item.done}>
	<span
		class="priority"
		class:low={item.priority === Priority.BASSA}
		class:medium={item.priority === Priority.MEDIA}
		class:high={item.priority === Priority.ALTA}
		class:disabled={item.done}
	>
		{Priority[item.priority]}
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
