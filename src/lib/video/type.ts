import type { Snippet } from 'svelte';
import type { HTMLVideoAttributes } from 'svelte/elements';

interface VideoProps extends HTMLVideoAttributes {
	children?: Snippet;
	type?: string;
	src?: string;
	trackSrc?: string;
	srclang?: string;
	label?: string;
	class?: string;
}

export { type VideoProps };
