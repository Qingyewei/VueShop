<template>
  <div class="login-container">
      <img src="@/assets/img/login.jpg" alt="">
      <div class="login-box">
          <!-- 头像区域 -->
          <div class="avatar-box">
              <img src="@assets/logo.png" alt="">
          </div>
          <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login-form">
              <el-form-item prop="username">
                  <el-input v-model="loginForm.username"  prefix-icon="iconfont icon-user"></el-input>
              </el-form-item>
              <el-form-item  prop="password">
                  <el-input v-model="loginForm.password"  prefix-icon="iconfont icon-3702mima" type="password"></el-input>
              </el-form-item>
              <el-form-item class="btns">
                  <el-button type="primary" @click="login">登录</el-button>
                  <el-button type="info" @click="resetLoginForm">重置</el-button>
              </el-form-item>
          </el-form>
      </div>
  </div>
</template>

<script>
export default {
    name:'login',
  data () {
    return {
      loginForm:{
          username:'admin',
          password:'123456'
      },
      loginFormRules:{
          username:[
              {required:true,message:'请输入登录账号',trigger:'blur'},
              {min:3,max:10,message:'长度在3到10个字符',trigger:'blur'}
          ],
          password:[
              {required:true,message:'请输入登录密码',trigger:'blur'},
              {min:6,max:15,message:'长度在6到15个字符',trigger:'blur'}
          ]
      }
    }
  },
  methods: {
      resetLoginForm(){
          this.$refs.loginFormRef.resetFields()
      },
      login(){
          this.$refs.loginFormRef.validate(async valid =>{
              if(!valid) return
              const {data:res} = await this.$http.post('login',this.loginForm)
              console.log("login:", res);
              if(res.meta.status !== 200) return this.$message.error('登录失败')
              this.$message.success('登录成功')
              sessionStorage.setItem('username', this.loginForm.username);
            //   window.sessionStorage.setItem('token', res.data.token)
            window.token = res.data.token
            this.$auth.login()
              this.$router.push('/home')
            //   this.$router.push('/resume')
          })
      }
  }
}
</script>

<style lang='less'>
.login-container{
    height: 100%;
    .login-box{
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        .avatar-box{
            height: 130px;
            width: 130px;
            border: 1px solid #eee;
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0 0 10px #ddd;
            position: absolute;
            left: 50%;
            transform: translate(-50%,-50%);
            background-color: #fff;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #eee;
            }
        }
        .login-form{
            position: absolute;
            bottom: 0;
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
        }
        .btns{
            display: flex;
            justify-content: flex-end;
        }
    }
}
</style>
