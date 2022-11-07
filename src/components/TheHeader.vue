<template>
  <div class="header">
    <h1>E-SHOP</h1>
    <div class="routers">
      <RouterLink class="router_link" to="/store"> Store </RouterLink>
      <RouterLink class="router_link" to="/cart"> Cart </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  background: rgb(61, 4, 126);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
}
h1 {
  margin: 15px 0 15px 50px;
  font-size: 50px;
  color: antiquewhite;
}
.routers {
  display: flex;
  position: absolute;
  right: 0;
  margin-right: 80px;
}
.router_link {
  text-decoration: none;
  margin: 0 30px;
  font-size: 35px;
  color: azure;
}
.router-link-active {
  text-decoration: 2px underline;
}
</style>
