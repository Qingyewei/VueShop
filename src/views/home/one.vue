<template>
  <div class="m-home">
    <!-- 头部 -->
    <div class="m-top">
      <!-- 用户头像 -->
      <div class="m-topRight">
        <!-- 退出 -->
        <div class="top-logout" title="退出系统" @click="loginout">
          <svg class="icon top-icon">
            <use xlink:href="#iconloginout" />
          </svg>
        </div>
      </div>
    </div>

    <!-- <div class="m-left">
      <ul>
        <li
          v-for="(item,index) in menulist"
          :key="index"
          @click="goMenu(item)"
          :class="{'active':item.authName==titleName}"
        >
          <i :class="iconsObj[item.id]"></i>
          <span>{{item.authName}}</span>
        </li>
      </ul>
    </div>-->
    <!-- 左侧菜单 -->
    <div class="m-left2" :class="isCollapse ? 'm-left2-fold' : 'm-left2-unfold'">
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <div class="toggle-button" @click="toggleCollapse">|||</div>-->

      <!-- <div class="icons" @click="toggleCollapse" style="color:red">
        <i class="el-icon-s-unfold" v-if="isCollapse"></i>
        <i class="el-icon-s-fold" v-else></i>
      </div>-->

      <el-menu
        :default-active="activeIndex + ''"
        :collapse="isCollapse"
        unique-opened
        :default-openeds="isOpeneds"
      >
        <div v-for="(item,index) in menulist" :key="index" >
          <el-submenu :index="index + ''" v-if="item.children">
            <template slot="title">
              <svg class="icon">
                <use :href="'#icon'+ item.path" />
              </svg>
              <span slot="title" v-if="!isCollapse">{{item.authName}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                class="m-el-menu-item"
                :index="'/' + child.path"
                v-for="(child,index) in item.children"
                :key="index"
                @click="goMenu(child, item)"
              >
                <!-- {{child2.authName}} -->
                <template slot="title">
                  <span slot="title">{{child.authName}}</span>
                </template>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item :index="index + ''" v-else @click="goMenu(item)">
            <svg class="icon">
              <use :href="'#icon' + item.path" />
            </svg>
            <span slot="title">{{item.authName}}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </div>

    <!-- <div
      :class="isCollapse ? 'el-radio-group-fold' : 'el-radio-group-unfold'"
      @click="toggleCollapse"
    >
      <div class="el-radio-group" v-model="isCollapse">
        <div class="el-radio-button" v-if="isCollapse">
          <div class="el-radio-button__inner">
            <svg class="icon">
              <use xlink:href="#iconright" />
            </svg>
          </div>
        </div>
        <div class="el-radio-button" v-else>
          <div class="el-radio-button__inner">
            <svg class="icon">
              <use xlink:href="#iconleft" />
            </svg>
          </div>
        </div>
      </div>
    </div>-->
    <div :class="isCollapse ? 'el-radio-group-fold' : 'el-radio-group-unfold'">
      <el-radio-group v-model="isCollapse">
        <el-radio-button :label="false" v-show="isCollapse">
          <svg class="icon">
            <use xlink:href="#iconright" />
          </svg>
        </el-radio-button>
        <el-radio-button :label="true" v-show="!isCollapse">
          <svg class="icon">
            <use xlink:href="#iconleft" />
          </svg>
        </el-radio-button>
      </el-radio-group>
    </div>

    <div class="m-right" :class="isCollapse ? 'm-right-fold' : 'm-right-unfold'">
      <!-- 重置标签页按钮 -->
      <div class="reset-btn">
        <el-button @click="resetTab">清空标签</el-button>
      </div>
      <el-tabs v-model="editableTabsValue" @tab-remove="removeTab" @tab-add="addTab" type="card">
        <el-tab-pane :label="titleName" name="1">
          <component :is="'mine'" :addTab="addTab" :removeTab="removeTab"></component>
        </el-tab-pane>
        <el-tab-pane
          v-for="item in editableTabs"
          :label="item.title"
          :name="item.name"
          :key="item.name"
          closable
        >
          <!-- <router-view :addTab="addTab" :removeTab='removeTab' :is=item.content></router-view> -->
          <component :is="item.content" :addTab="addTab" :removeTab="removeTab"></component>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import components from "@/views/home/components";
export default {
  components: components,
  name: "home",
  data() {
    return {
      // 左边菜单栏当前激活列表
      activeIndex: "0",
      menulist: [],
      // Openeds=['...'] 属性内容和下面的 <el-submenu index="..."> 里面的index内容是关联的，两个属性内容是一样的就可以关联了
      isOpeneds: [],
      isCollapse: false,

      // activePath: "",
      // 当前激活的标签页
      editableTabsValue: "1",
      // @vuese
      // 当前生成的标签页组
      editableTabs: [],
      // @vuese
      // 当前激活的标签页索引
      tabIndex: 1,
      // @vuese
      // 路由标签页的标题
      titleName: "首页",
      studyJavaScriptVueList: [
        {
          authName: "Study-JavaScript-Vue",
          id: 1,
          order: 1,
          path: "StudyJavaScriptVue",
        },
      ],
    };
  },
  //清空标签右侧activeIndex获取index值，将侧边栏导航页清空，因为activeIndex的值为null，要在渲染前给activeIndex赋值
  mounted() {
    // console.log(window.location.href);
    let start = window.location.href.lastIndexOf("/");
    let path = window.location.href.slice(start + 1);
    this.activeIndex = path;

    console.log(this.activeIndex);
  },
  created() {
    this.getMenuList();
    this.$router.push("/home");
    // this.activePath = window.sessionStorage.getItem("activePath");
    if (
      this.editableTabs.length == 0 &&
      this.$router.currentRoute.name != "mine"
    ) {
      this.$router.push({ name: "home" });
    }
  },
  methods: {
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      console.log(tabs, activeName);
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      if (tabs.length <= 1) {
        this.editableTabsValue = "1";
        this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
        return;
      }
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
    },
    // 新建标签页
    addTab(data) {
      if (this.editableTabs.length > 0) {
        var flag = false;
        var item;
        for (var i = 0; i < this.editableTabs.length; i++) {
          if (data.authName == this.editableTabs[i].title) {
            flag = true;
            item = this.editableTabs[i];
            break;
          }
        }
        if (flag) {
          this.editableTabsValue = item.name;
        } else {
          let newTabName = ++this.tabIndex + "";
          this.editableTabs.push({
            title: data.authName,
            name: newTabName,
            content: data.path,
          });
          this.editableTabsValue = newTabName;
        }
      } else {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: data.authName,
          name: newTabName,
          content: data.path,
        });
        this.editableTabsValue = newTabName;
      }
    },
    // 左侧菜单切换
    goMenu(data) {
      this.editableTabsValue = "1";
      this.$router.push("/" + data.path);
      console.log("/" + data.path);
      // this.titleName = data.authName;
      this.addTab(data);
    },
    /**
     * @vuese
     * 重置清空标签页
     */
    resetTab() {
      this.$confirm("是否确定清空所有标签页？", "消息提示", {
        distinguishCancelAndClose: true,
        showClose: false,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        customClass: "confirmAsk",
      })
        .then(() => {
          this.editableTabs = [];
          this.editableTabsValue = "1";
          this.activeIndex = "0";
          this.isOpeneds = [];
          this.$router.push({ name: "home" });
        })
        .catch((action) => {
          console.log(action);
        });
    },
    loginout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    async getMenuList() {
      const { data: res } = await this.$http.get("menus");
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg);
      this.menulist = res.data;
      this.menulist = [...this.menulist, ...this.studyJavaScriptVueList];
      // this.menulist.push({
      //   authName: "JS懒加载",
      //     children: null,
      //     id: 1,
      //     order: 1,
      //     path: "lazyLoading"
      // })
      // console.log(res.data);
      // console.log(this.menulist);
    },
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    // saveNavState(activePath){
    //   window.sessionStorage.setItem('activePath', activePath)
    //   this.activePath = activePath;
    // }
  },
};
</script>

<style lang='less'>

</style>

