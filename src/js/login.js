console.log(4)
window.Login = {
  data () {
    return {
      login: {
        email: '',
        password: ''
      },
    }
  },
  methods: {
    onLogin (e) {
      AV.User.logIn(this.login.email, this.login.password).then((user) => {
        user = user.toJSON()
        this.$emit('login', user)
      }, (error) => {
        if (error.code === 211) {
          alert('邮箱不存在')
        } else if (error.code === 210) {
          alert('邮箱和密码不匹配')
        }
      })
    },
    onClickSignUp () {
      this.$emit('goToSignUp')
    },
  },
  template: `
  <div class="login" v-cloak>
    <form class="form" @submit.prevent="onLogin">
      <h2>登录</h2>
      <router-link to="/">关闭</router-link>
      <div class="row">
        <label>邮箱</label>
        <input type="text" v-model="login.email">
      </div>
      <div class="row">
        <label>密码</label>
        <input type="password" v-model="login.password">
      </div>
      <div class="actions">
        <button type="submit">提交</button>
        <router-link to="/signUp">注册</router-link>
      </div>
    </form>
  </div>
  `
}
Vue.component('login', window.Login)
console.log(3)