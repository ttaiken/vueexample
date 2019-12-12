<template>

    <div id="app" >
        <header ><Navbar></Navbar></header>
        <main >
            <aside class="col-3">
                <Bar></Bar>
            </aside> 
            <Leftside id="leftside" class="d-flex p-0 m-0 "></Leftside>
            <article class="col-9 flex-column p-0">
                <Breadcrumb :dataMenu="breadMenu"></Breadcrumb>
                <section>
                    Path: {{ this.$route.meta.title}}
                </section>
                <section>
                    <router-view></router-view>
                </section>

            </article>
        
        </main>
        <footer class="bg-danger align-item-end">footer</footer>


    </div>

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

    import Navbar from './components/Layout/Navbar.vue';
    import Breadcrumb from './components/Layout/Breadcrumb.vue';
    import Leftside from './components/Layout/Leftside.vue';
    import Bar from './components/Layout/Bar.vue';
    //import { RouterLink, RouterView } from 'vue-router'
   

    export default {
        name: 'app',
        components: {
            Navbar,
            Breadcrumb,
            Leftside,
            Bar
        },
        data() {
          return {
              dataBreadMenu: [
              {
                text: 'VM',
                href: '/vm'
              },
              {
                text: 'Network',
                href: '/network'
              },
              {
                text: 'Home',
                active: true
              }
            ]
          }
        },
        computed: {
            breadMenu() {
                return  this.$route.meta.bread || [];
            }
        }
    }
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/




</style>
