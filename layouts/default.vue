<template>
  <div class="s-bg">
    <Nav />
    <Nuxt />
    <LightFooter />
  </div>
</template>

<style>
.s-bg {
  background-color: #fff5f5;
}
#hero-background {
  background: linear-gradient(-45deg, rgb(239, 253, 255), rgb(253, 245, 255));
  background-size: 400% 400%;
  background-origin: content-box;
  animation: gradient 30s ease infinite;
  /* width: calc(100% + 2rem);
  margin-left: -1rem; */
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
