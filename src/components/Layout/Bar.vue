<template>
    <div class="header">
        <ul>
      
            <li :class="[{active:item.show}]" @click="changeli(index,item)" v-for="(item,index) in headerData">

                {{item.name}}{{item.show}}

                <ul v-show="item.show">

                    <li v-for="(a,index) in item.list" v-on:click.stop="doThis(index)">{{a}}</li>
                </ul>

            </li>
        </ul>
    </div>
</template>
<script>
export default {
        data() {
            return {
                headerData: [{
                    name: 'nav1',
                    list: ['submenu', 'submenu', 'submenu', 'submenu', 'submenu'],
                    show: false
                }, {
                    name: 'nav2',
                    list: ['submenu', 'submenu', 'submenu', 'submenu', 'submenu'],
                    show: false
                }, {
                    name: 'nav3',
                    list: ['submenu', 'submenu', 'submenu', 'submenu', 'submenu'],
                    show: false
                }, {
                    name: 'nav4',
                    list: ['submenu', 'submenu', 'submenu', 'submenu', 'submenu'],
                    show: false
                }, {
                    name: 'nav5',
                    list: ['submenu', 'submenu', 'submenu', 'submenu', 'submenu'],
                    show: false
                }]
            }
        },
        methods: {
            changeli: function(ind, item) {

                this.headerData.forEach(i => {

                    if (i.show !== this.headerData[ind].show) {
                        i.show = false;
                    };
                });

                item.show = !item.show;
                console.log(item.name)
            },
            doThis: function(index) {
                alert(index)
            }
        }
    }
</script>