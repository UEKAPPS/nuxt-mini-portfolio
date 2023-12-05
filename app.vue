<template>
  <div class="flex flex-col h-auto w-full font-sans lg:flex-row lg:h-screen">
      <div class="flex h-screen bg-dark-900 w-full relative items-center justify-center lg:w-1/2">
        <div class="flex w-full px-4 top-4 left-0 gap-4 absolute items-center justify-between lg:px-8">
          <img src="/logo.jpg" loading="lazy" width="32" height="32" class="h-8 w-8" alt="logo">
        </div>
        <template v-for="_d in data" :key="_d.index">
          <Info v-if="selected === _d.index" v-motion-slide-bottom>
            <template #title>
              {{ _d.title }}
            </template>
            <template #subtitle>
              {{ _d.subtitle }}
            </template>
            <template #description>
              {{ _d.description }}
            </template>
          </Info>
        </template>
      </div>
      <div class="h-screen w-full relative lg:w-1/2">
        <img :src="`images_${selected}.jpg`" class="h-full object-cover object-center w-full animated-fade-ind" width="300" height="300">
        <div class="flex w-full absolute bottom-4 left-0 gap-4 items-center justify-center">
          <template v-for="n in 3">
            <button @click="setImage(n)" class="rounded-lg font-semibold bg-light-900/30 p-2 w-10">
              {{ n  }}
            </button>
  
          </template>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const selected = ref(1)
  const data = ref([
    {
    index:1,
    title: 'Project One',
    subtitle: 'Front End Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit nulla lacinia sapien, vel ultricies sapien enim vel nunc. Donec euismod, velit vel bibendum bibendum, velit nulla lacinia sapien, vel ultricies sapien enim vel nunc. Sed euismod, sapien vel bibendum bibendum, velit nulla lacinia sapien, vel ultricies sapien enim vel nunc. Donec euismod, velit vel bibendum bibendum, velit nulla lacinia sapien, vel ultricies sapien enim vel nunc. Sed euismod, sapien vel bibendum bibendum, velit nulla lacinia sapien, vel ultricies sapien enim vel nunc. Donec euismod, velit vel bibendum bibendum, velit nulla lacinia sapien, vel ultricies sapien enim vel nunc.'
  },
  {
    index:2,
    title: 'Project Two',
    subtitle: 'Back End Developer',
    description: 'Senectus et netus et malesuada fames ac turpis. A cras semper auctor neque vitae tempus quam pellentesque nec. Ut tortor pretium viverra suspendisse potenti nullam ac. At auctor urna nunc id cursus metus aliquam eleifend mi. At volutpat diam ut venenatis tellus in metus.'
  },
  {
    index:3,
    title: 'Project Three',
    subtitle: 'Mobile Developer',
    description: 'Donec euismod, velit vel bibendum bibendum, velit nulla lacinia sapien, vel ultricies sapien enim vel nunc. Sed euismod, sapien vel bibendum bibendum, velit nulla lacinia sapien, vel ultricies sapien enim vel nunc. Donec euismod, velit vel bibendum bibendum, velit nulla lacinia sapien, vel ultricies sapien enim vel nunc.'
  }
    
  ])
  
  function setImage(index: number) {
    selected.value = index
  }
  </script>
  