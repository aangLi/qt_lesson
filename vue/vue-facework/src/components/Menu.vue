<template>
  <ul class="menu">
    <slot></slot>
  </ul>
</template>
<style >
ul
{
  margin: 0;
  padding: 0
}

li{
  list-style: none
}
.menu{
  width: 200px
}
.menu li{
    padding: 5px;
    background-color: #4cb4e7;
    color: #ffffff;
    border-bottom: 1px solid #ffffff
}


</style>