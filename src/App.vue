<template>
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --yellow: #f4be30;
  --gray: #666666;
  --gray-middle: #808080;
  --gray-light: #e9e9e9;
  --bg: #f8f8f8;
  --white: #fff;
  --black: #000000;
  --blue: #2ea3f2;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f8f8f8;

  font-size: 14px;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}
</style>
