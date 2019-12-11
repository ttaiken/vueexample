<template>
	<b-container fluid class="p-0" >
  <b-breadcrumb :items="items"></b-breadcrumb>
		</b-container>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Admin',
            href: '#'
          },
          {
            text: 'Manage',
            href: '#'
          },
          {
            text: 'Library',
            active: true
          }
        ]
      }
    }
  }
</script>

<style>
.breadcrumb {
    padding: 2px 15px !important;
}
</style>