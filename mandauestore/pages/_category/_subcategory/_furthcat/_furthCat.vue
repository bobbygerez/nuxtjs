<template>
	<h2>{{ $route.params.furthCat }} </h2>
</template>
<script type="text/javascript">
	export default{

		middleware: 'further-cat'
	}
</script>