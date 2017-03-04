<template>
<section id="works">
  <h2>works</h2>
  <div class="work-list-card">
    <div class="card-slider-left">
      <button @click="slideLeft"></button>
    </div>
    <div class="card-slider-right">
      <button @click="slideRight"></button>
    </div>

  <div class="card-slider-wrapper">
    <div class="card-slider" v-bind:style="slideTranslateX">
      <section v-for="c in comments" class="listcard">
        <img :src="c.url" />
        <div class="text">
          <h3>{{ c.name }}</h3>
          <p>{{ c.tech }}</p>
<!--          <router-link :to="{ name: 'detail', params: { id: c.id } }" class="btn">DETAIL</router-link> -->
        </div>
      </section>
    </div>
  </div>
  </div>

</section>

</template>

<script>
export default {
  name: 'Works',
  data () {
    return {
      slideW: 360,
      slideX: 0,
      works: 3,
      comments: [
        {
          id: "my-friends-blog",
          url: "static/img/works/work1.gif",
          name: "My Friend's Blog",
          tech: "Design Wordpress Sage HTML CSS3"
        },
        { 
          id: "cavancle",
          url: "static/img/works/work2.gif",
          name: "Vancouver Cafe Search Site",
          tech: "HTML CSS3 Vue.js"
        },
        { 
          id: "codepen",
          url: "static/img/works/work3.jpg",
          name: "Codepen",
          tech: "CSS"
        }
      ]
    }
  },
  computed: {
    slideTranslateX: function () {
      return 'transform: translateX(' + (this.slideW * this.slideX * -1) + 'px)'
    }
  },
  methods: {
    slideLeft: function () {
      if (this.slideX > 0) {
        this.slideX--
      }
    },
    slideRight: function () {
      if (this.works - 1 > this.slideX) {
        this.slideX++
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables';

#works {
  .work-list-card {
    .card-slider-left, .card-slider-right {
      display: none;
    }
  }
  .card-slider-wrapper {
    overflow: hidden;
  }
  .card-slider {
    white-space: nowrap;
    overflow-x: auto;
    margin-bottom: -30px;
  }
  .card-slider::-webkit-scrollbar {
      display: none !important;
  }
  @media (max-width: $max-sm-width) {
    .card-slider {
      transform: translateX(0%) !important;
    }
  }
  @media (min-width: $min-sm-width) {
    .work-list-card {
      position: relative;
      width: 80%;
      margin: 0 auto;
      .card-slider-left, .card-slider-right {
        position: absolute;
        display: flex;
        align-items: center;
        height: 100%;
        font-size: 30px;
        button {
          width: 0;
          height: 0;
          border: 20px solid transparent;
          background: none;
          cursor: pointer;
        }
      }
      .card-slider-left {
        left: -90px;
        button {
          border-right: 20px solid $font-color;
        }
      }
      .card-slider-right {
        right: -90px;
        button {
          border-left: 20px solid $font-color;
        }
      }
    }
    .card-slider {
      transition: transform 0.5s ease;
      overflow-x: visible;
    }
  }

  .listcard{
    width: 66.66%;
    max-width: 480px;
    margin: 0 $spacer 30px;
    display: inline-block;
    white-space: normal;
    background-color: #fff;
    padding: $spacer;
    img {
      width: 100%;
      height: auto;
    }
    .text {
      padding: $spacer*3 $spacer;
      h3 {
        margin: 0 auto $spacer;
        font-family: $font-family-h;
      }
      p {
        font-size: 0.9em;
      }
      .btn {
        display: block;
        text-align: center;
      }
    }
  }
}

</style>