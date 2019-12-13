<template>
    <b-container fluid  class="p-0">
        <!--<b-breadcrumb :items="dataMenu"></b-breadcrumb>-->
       
        <div class="row wrap">
            <div  v-for="item in dataMenu" :key="item.text">
                <a :href="item.href">{{item.text}}</a>
            </div>
        </div> 
       
    </b-container>

</template>

<script>
    export default {
        name: 'Breadcrumb',
        props: [
            'dataMenu'
        ],
        //data() {
        //  return {
        //    items: [
        //      {
        //        text: 'Admin',
        //        href: '#'
        //      },
        //      {
        //        text: 'Manage',
        //        href: '#'
        //      },
        //      {
        //        text: 'Library',
        //        active: true
        //      }
        //    ]
        //  }
        //}
  }
</script>

<style>
.breadcrumb {
    padding: 2px 15px !important;
}
</style>
