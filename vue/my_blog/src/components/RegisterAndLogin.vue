<template>
  <div>
    <el-dialog title="登录" :visible="dialogVisible" @close="cancel">
      <el-form label-width="80px">
        <el-form-item label="邮箱">
          <el-input v-model="params.email"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="params.password"></el-input>
        </el-form-item>
        <el-formItem v-if="handleFlag === 'register'" label="昵称" >
          <el-input v-model="params.name" placeholder="用户名或昵称" autocomplete="off"></el-input>
        </el-formItem>
        <el-formItem v-if="handleFlag === 'register'" label="手机" >
          <el-input v-model="params.phone" placeholder="手机号" autocomplete="off"></el-input>
        </el-formItem>
        <el-formItem v-if="handleFlag === 'register'" label="简介" >
          <el-input v-model="params.desc" placeholder="个人简介" autocomplete="off"></el-input>
        </el-formItem>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button type="success" @click="handleAuth">github授权登录</el-button>
        <el-button type="primary" @click="handleOk">{{handleFlag === 'register'? '注册':'登录'}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component, Emit } from "vue-property-decorator";
import { register } from 'register-service-worker';
@Component
export default class RegisterAndLogin extends Vue {
  @Prop({ default: false }) visible!: boolean;
  @Prop({ default: ''}) handleFlag!: string;

  private params: any = {
    email: "",
    password: "",
    name: "",
    phone: "",
    desc: ""
  };
  get dialogVisible(): boolean {
    // console.log(this.visible + '____')
    return this.visible;
  }
  @Emit()
  private cancel(): boolean {
    return false;
  }

  private handleAuth(): void {
    // 保存授权之前的页面链接
    let preventHistory: object = {
      name: this.$route.name,
      query: this.$route.query
    };
    window.sessionStorage.preventHistory = JSON.stringify(preventHistory);
    window.location.href =
      "https://github.com/login/oauth/authorize?client_id=8bf826e8e42820676012&redirect_uri=http://localhost:8080";
  }

  private handleOk(): void {
    const reg = new RegExp(
      "^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$"
    );
    if (!reg.test(this.params.email)) {
      this.$message.error("请输入正确的邮箱格式！");
    } else {
      if (!this.params.password) {
        this.$message.error("密码不能为空");
      }
    }
    // 登录操作
    this.submit()
  }

  // async 声明方法 需要 对应 Promise<void>
  private async submit(): Promise<void> {
    let data: any = ''
    if (this.handleFlag === 'register') {
      data = await this.$https.post(this.$urls.register, this)
    } else {
      data = await this.$https.post(this.$url.login, this)
    }
  }
}
</script>

<style scoped>
</style>
