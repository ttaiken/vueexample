<template>
	<ul><li v-for="l in list" :key="l">
    <router-link :to="{ name: 'detail', params: { id: l.id }}">
    {{ l.title }}
    </router-link>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['list'])
  }
}
</script>