<script lang="ts">
	import { buttonVariants } from "@/components/ui/button/index.js";
	import { cn } from "@/utils.js";
	import { Calendar as CalendarPrimitive } from "bits-ui";
	import ChevronRight from "svelte-radix/ChevronRight.svelte";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: CalendarPrimitive.NextButtonProps = $props();
</script>

{#snippet Fallback()}
	<ChevronRight class="size-4" />
{/snippet}

<CalendarPrimitive.NextButton
	bind:ref
	class={cn(
		buttonVariants({ variant: "outline" }),
		"size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
		className,
	)}
	{...restProps}
	children={children || Fallback}
/>
