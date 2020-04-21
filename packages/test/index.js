// 为组件提供 install 方法，供组件对外按需引入
import FruitfulTest from './src/test';
FruitfulTest.install = (Vue) => {
  Vue.component(FruitfulTest.name, FruitfulTest);
};
export default FruitfulTest;
