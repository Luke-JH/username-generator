	<template>
		<section class="section">
			<div class="columns">
			<div class="column is-one-third">
				<input class="input is-rounded"
					v-on:focus="$event.target.select()" 
					ref="clone" 
					readonly 
					:value="this.text"/>
			</div>
			<div class="column">
				<button class="button is-rounded is-primary" @click="copy">Copy</button>
			</div>
			</div>
		</section>

	</template>
	
	<script>

	export default {
		name: 'CopyButton',
		props: {
			text: {
				type: String,
			}
		},
		methods: {
		copy() {
			this.$refs.clone.focus();
			document.execCommand('copy');
		}
		}
	}
	</script>