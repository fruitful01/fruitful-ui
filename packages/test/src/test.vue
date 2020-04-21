<template>
  <div class="Fruitful-test" @click="handleClick">{{ num }}</div>
</template>

<script>
export default {
  name: "FruitfulTest", // 这个名字很重要，它就是未来的标签名<Fruitful-test></Fruitful-test>，坑了我一下
  data() {
    return {
      num: 0
    };
  },
  methods: {
    handleClick() {
      this.num++;
    }
  }
};
</script>

<style scoped>
.Fruitful-test {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  font-size: 30px;
  text-align: center;
  background: #24292e;
  color: white;
}
</style>