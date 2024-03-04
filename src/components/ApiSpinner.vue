<template>
  <q-circular-progress 
    indeterminate
    size="75px"
    :thickness="0.6"
    color="red"
    center-color="grey-8"
    class="q-ma-md spinner"
  />
</template>
<style scoped>
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 1vh;
}

</style>
