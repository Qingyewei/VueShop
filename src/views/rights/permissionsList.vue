<template>
  <div class="m-permissionsList m-window">
    <div>
      <el-table :data="rightsList" boder stripe>
        <el-table-column type="index"></el-table-column>>
        <el-table-column header-align="center" align="center" label="权限名称" prop="authName"></el-table-column>
        <el-table-column header-align="center" align="center" prop="path" label="路径"></el-table-column>
        <el-table-column header-align="center" align="center" prop="level" label="权限等级">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.level == '0'">一级</el-tag>
            <el-tag type="success" v-else-if="scope.row.level == '1'">二级</el-tag>
            <el-tag type="warning" v-else>三级</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addTab: {
      type: Function
    },
    removeTab: {
      type: Function
    }
  },
  data() {
    return {
      //权限列表
      rightsList: []
    };
  },
  created() {
    this.getRightsList();
  },
  methods: {
    async getRightsList() {
      const { data: res } = await this.$http.get("rights/list");
      if (res.meta.status !== 200) {
        return this.$message.error("获取权限列表失败！");
      }
      this.rightsList = res.data;
      console.log(this.rightsList);
    }
  }
};
</script>

<style lang='less'>
</style>
