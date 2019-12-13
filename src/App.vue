<template>

    <div id="app" >
        <header ><Navbar></Navbar></header>
        <main >
            <aside class="col-3">
                <Bar></Bar>
            </aside> 
            <Leftside id="leftside" class="d-flex p-0 m-0 "></Leftside>
            <article class="col-9 flex-column p-0">
                <Breadcrumb :dataMenu='dataMenu2'></Breadcrumb>
                <section >
                    <div>Path: {{dataMenu2.path}}</div>
                    <div>Fullpath: {{ dataBreadcrumb}}</div>

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
          this.dataMenu2 = {path: '/',fullpath:'/'};
          this.dataMenu2.path = this.$route.path;
          this.dataMenu2.fullpath = this.$route.fullPath;

          return {
              
              dataBreadcrumb: [
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
        watch:{
          $route (){
            this.dataMenu2.path = this.$route;
            this.dataMenu2.fullpath = this.$route ;
          }
        },
        getBreadcrumb() {
          this.dataBreadcrumb = this.$route.path.split('/')

        },

        // computed: {
        //     breadMenu() {
        //       this.dataMenu2.path = this.$route.path;
        //       this.dataMenu2.fullpath = this.$route.fullPath;
        //         return  this.dataMenu2;
        //     }
        // }
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
