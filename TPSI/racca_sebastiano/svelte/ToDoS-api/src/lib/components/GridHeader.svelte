<script lang="ts">
	import Cell from './Cell.svelte';
	import Icon from './Icon.svelte';

	export let addItem: () => any;

	const headerIcons: string[] = ['tag', 'task_alt', 'list', 'schedule', 'add_box'];
</script>

{#each headerIcons as name, index}
	{#if name === 'add_box'}
		<Cell handler={addItem}>
			<Icon {name} clickable />
		</Cell>
	{:else}
		<Cell>
			<Icon {name} clickable={false} />
		</Cell>
	{/if}
{/each}
