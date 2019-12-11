<template>

    <div id="app" class="theme-1">
        <header class="bg-warning"><Navbar></Navbar></header>
        <main class="Site-content ">
            <aside class="col-3">
                <Leftside id="leftside" class= "d-flex p-0 m-0 "></Leftside>
            </aside>        
            <article class="col-9 flex-column p-0">
                <Breadcrumb></Breadcrumb>
            <section>section</section>
        
            </article>
        
        </main>
        <footer class="bg-danger align-item-end">footer</footer>


    </div>

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
    import './customize.scss'
    import Navbar from './components/Layout/Navbar.vue';
    import Breadcrumb from './components/Layout/Breadcrumb.vue';
    import Leftside from './components/Layout/Leftside.vue';

    export default {
        name: 'app',
        components: {
            Navbar,
            Breadcrumb,
            Leftside
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

html, body {
    width: 100%;
    height: 100%;

}

#app{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  min-width: 600px;
  background-color: green;
}

.Site-content {
  flex: 1;
  display: flex;
}
#leftside {
     height: 100%;
     background-color: yellow;

 }



</style>
