
<template>
  <div class="layout-container">
    <y-header>
      <div slot="nav"></div>
    </y-header>
    <div class="w">
      <div class="content">
        <div class="account-sidebar">
          <div class="gray-box ">
            <div class="box-inner">
              <ul class="account-nav">
                <li v-for="(item,i) in nav" :key='i'>
                    <a href="javascript:;">
                        <div class="account-nav-primary" @click="tabPrimary(item)" :class="{active:item.isActive}">
                            <span>{{item.name}}</span>
                            <i class="el-icon-arrow-right"></i>
                        </div>
                    </a>
                    <div v-if="item.secondNav==true">
                            <ul class="account-nav-second" v-show="show">
                                <li v-for="(itemT,j) in item.navSecond" :key='j' :class="{active:itemT.name===title}"
                                    @click="tabSecond(itemT)">
                                    <span>{{itemT.name}}</span>
                                </li>
                            </ul>
                    </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="gray-box sidebar-bottom content-center">
              <div class="img-code">
                  <img src="../../assets/static/img-code.png" width="100"/>
              </div>
              <span>ScanAPP</span>
          </div>
        </div>
        <div class="account-content">
          <router-view></router-view>
        </div>
    </div>
    </div>
    <y-footer></y-footer>
  </div>
</template>
<script>
  import YFooter from '/common/footer'
  import YHeader from '/common/header'
 
  export default {
    data () {
      return {
        show: true,
        title: 'Admin',
        nav: [
          {name: 'CreateMenu',
            isActive: false,
            secondNav: true, // if submenu is exist
            // path: 'background',
            navSecond: [
                {name: 'CreateBackground', path: 'background'},
                {name: 'CreateUnit', path: 'unit'},
                {name: 'Popurse'},
                {name: 'Manager'},
                {name: 'Operation'}
            ]
          },
          {name: 'AboutUs', path: 'aboutMe', isActive: false, secondNav: false}
        ]
      }
    },
    computed: {
    },
    methods: {
      tabSecond (e) {
        this.$router.push({path: '/college/' + e.path})
      },
      tabPrimary (e) {
        let path = this.$route.path.split('/')[2]
        if (e.secondNav) {
        //   this.show = !this.show
          if (path === 'aboutMe') {
            this.$router.push({path: '/college/' + e.navSecond[0].path})
          }
        } else {
          this.$router.push({path: '/college/' + e.path})
        }
      }
    },
    created () {
      let path = this.$route.path.split('/')[2]
      this.nav.forEach(item => {
        item.isActive = false
        if (item.secondNav) {
          item.navSecond.forEach(itemT => {
            if (itemT.path === path) {
              this.title = itemT.name
              if (itemT.name === this.title) {
                item.isActive = true // when submenu is selected, the prarent menu will be highlightŁ¬
              }
            }
          })
        } else {
          if (item.path === path) {
            this.title = item.name
            item.isActive = true
          }
        }
      })
    },
    components: {
      YFooter,
      YHeader
    },
    watch: {
      $route (to) {
        let path = to.path.split('/')[2]
        this.nav.forEach(item => {
          item.isActive = false
          if (item.secondNav) {
            item.navSecond.forEach(itemT => {
              if (itemT.path === path) {
                this.title = itemT.name
                if (itemT.name === this.title) {
                  item.isActive = true // when is submen, highlight parent menu.
                }
              }
            })
          } else {
            if (item.path === path) {
              this.title = item.name
              item.isActive = true
            }
          }
        })
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/style/mixin";
  .main {
    background: #fff;
    color: #000;
  }
  a {
    color: #000;
  }
  .w {
    padding-top: 40px;
  }
  .img-code {
      margin: 0px auto 12px;
  }
  .content {
    display: flex;
    height: 100%;
    font-size: 16px;
  }
  .sidebar-bottom {
      margin-top: 20px;
      padding: 16px;
  }
  .content-center {
      text-align: center;
  }
  .account-sidebar {
    width: 210px;
    border-radius: 6px;
    .account-nav {
      padding: 15px 0;
      .active {
          color: #0156AC;
      }
      .active a{
          color: #0156AC;
      }
      li:hover {
          a{
          color: #0156AC;
          }
      }
      li {
        position: relative;
        line-height: 48px;
        .account-nav-primary {
            padding: 0px 20px;
            height: 48px;
            span {
                float: left;
            }
            i {
                float: right;
                line-height: 48px;
                font-size: 14px;
            }
        }
        .account-nav-second {
            li {
                list-style: disc;
                list-style-position: inside;
                height: 48px;
                padding: 0 26px;
                text-align: left;
                color: #5B6976;
                cursor: pointer;
                span {
                    margin-left: -14px;
                    color: #A9B2BC;
                }
                &:hover{
                    color: #0156AC;
                    span {
                        color: #0156AC;
                    }
                }
            }
            .active {
               color: #0156AC;
               span {
                   color: #0156AC;
               }
            }
        }
        a {
          display: block;
        }
        &.current {
          a {
            position: relative;
            z-index: 1;
            height: 50px;
            background-color: #98AFEE;
            line-height: 50px;
            color: #FFF;
          }
        }
      }
    }
  }
  .account-content {
    margin-left: 24px;
    flex: 1;
  }
</style>
