<script setup>
import TabsContainer from '@/components/Tabs-container.vue'

import { TEXTS } from '@/constants'

const texts = TEXTS.views.about
</script>

<template>
  <main class="container about">
    <section class="u-flex u-row u-w-100 u-gap-xl">
      <div class="u-flex u-w-50" style="">
        <h1 class="title u-mb-l">{{ texts.title }}</h1>
        <div class="u-flex" v-html="texts.description"></div>
      </div>
      <div class="u-flex u-w-50 u-justify-start u-align-start">
        <TabsContainer />
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .about {
    justify-content: flex-start;

    & > section {
      flex-direction: column;
    }

    & > section > div {
      width: 100%;
    }
  }
}
</style>
