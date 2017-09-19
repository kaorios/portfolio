<template>
  <div class="index">
    <section id="hero">
      <h1>Hello, I am Kaori Suigetsu, a front-end developer and also a web designer.</h1>
      <p>I work as a web developer and designer for 3 years. I am currntry studing SVG, Canvas and CSS animation to produce amazing intaractional web site for my clients. I moved to Vancouver, Canada because I would like to learn web animation more.</p>
      <p>If you get interested me, please <a href="#contact">contact me</a>.</P>
    </section>

    <works></works>

    <skills></skills>

  </div>
</template>

<script>
import Works from './Works.vue'
import Skills from './Skills.vue'

export default {
  name: 'Index',
  components: { Works, Skills },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables';

#hero {
  h1 {
    font-family: $font-family-h;
  }
  p {
    max-width: $md-width;
  }
}

</style>
