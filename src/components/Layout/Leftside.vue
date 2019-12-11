<template>
    <b-nav vertical type="dark" class="wrapper bg-info p-0" >
        <b-navbar-nav is-nav id="nav_collapse" >
            <b-nav-item to="/dashboard">Dashboard</b-nav-item>
            <b-nav-item to="/play">Play</b-nav-item>
            <b-nav-item to="/houses">Houses</b-nav-item>
        </b-navbar-nav>
    </b-nav>
</template>
<script>
export default {
  name: 'Leftside',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>