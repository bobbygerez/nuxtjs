<template>
	<h2>{{ $route.params.catId }} </h2>
</template>
<script type="text/javascript">
	export default{

		middleware: 'category'
	}
</script>