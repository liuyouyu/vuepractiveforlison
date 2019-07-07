<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳到parent</button>
    <button @click="handleClick('replace')">替换parent</button>

    <button @click="handleClick('argu')">跳到argu</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    handleClick(type) {
      if (type === "back") this.$router.go(-1);
      // else if(type==="push") this.$router.push("/parent")}
      else if (type === "push") {
        this.$router.push({
          name: "parent",
          query: {
            name: "lison"
          }
        });
      } else if (type === "replace") {
        // 替换路由history
        this.$router.replace({
          name: "parent"
        });
      } else if (type === "argu") {
        //跳转到有参数的路由的3种方法
        const name = "lison";
        this.$router.push({
          // 1
          // name: "argu",
          // params: {
          //   name: "lison"
          // }

          // 2
          // path:`argu/${name}`

          // 3
          name: `argu`,
          params: {
            name: "lison"
          }
        });
      }
    }
  }
};
</script>
