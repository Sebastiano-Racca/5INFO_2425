<script lang="ts">
	export let center: boolean = true;
	export let handler: (() => any) | undefined = undefined;
	export let disabled: boolean = false;
</script>

<div class:center>
	{#if handler}
		<button class="unstyled-button" onclick={handler} {disabled}>
			<slot />
		</button>
	{:else}
		<slot />
	{/if}
</div>

<style lang="scss">
	div {
		border-bottom: 1px solid #e7ecee;
		border-right: 1px solid #e7ecee;
		padding-top: 10px;
		color: #525252;
		line-height: 32px;
		font-size: 18px;
	}

	.center {
		text-align: center;
	}

	.unstyled-button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
</style>
