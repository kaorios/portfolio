<template>
  <div id="app">
    <span class="frame-border frame-border-v left"></span>
    <span class="frame-border frame-border-v right"></span>
    <span class="frame-border frame-border-h top"></span>
    <span class="frame-border frame-border-h bottom"></span>
    <span class="frame-top"></span>
    <span class="frame-bottom"></span>

    <p class="logo"><img src="./assets/img/logo.svg" alt="logo"></p>
    <div class="container">
      <header id="header">
        <nav>
          <ul>
            <li><a href="#">top</a></li>
            <li><a href="#">works</a></li>
            <li><a href="#">skills</a></li>
            <li><a href="#">contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
    <main>
      <div id="content" class="container">
        <router-view></router-view>

        <contact></contact>
        <section>
          <p>Thank you for dropping by.</p>
        </section>
      </div>
    </main>


    <div class="container">
      <footer id="footer">
        <p class="copyright">&copy; suigetsu kaori</p>
        <ul class="sns-link">
          <li><a href="https://www.linkedin.com/in/suige" target="_blank">
            <img src="./assets/img/linkedin.svg" alt="linkedin">
          </a></li>
          <li><a href="https://codepen.io/suige/" target="_blank">
            <img src="./assets/img/codepen.svg" alt="codepen">
          </a></li>
          <li><a href="https://github.com/suige" target="_blank">
            <img src="./assets/img/github.svg" alt="github">
          </a></li>
        </ul>
      </footer>
    </div>
  </div><!-- #app -->
</template>

<script>
import Contact from './components/Contact.vue'

export default {
  name: 'app',
  components: { Contact },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/_variables';

* {
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  font-size: 1.8rem;
  background-color: $body-color;
}
p {
  line-height: 1.6em;
}
#app {
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $font-color;
}
.frame-border {
  background-color: $font-color;
  position: fixed;
  z-index: 998;
}
.frame-border-v {
  width:3px;
  top: $spacer*2;
  bottom: $spacer*2;
}
.frame-border-v.left {
  left: $spacer*2;
}
.frame-border-v.right {
  right: $spacer*2;
}
.frame-border-h {
  height:3px;
  left: $spacer*2;
  right: $spacer*2;
}
.frame-border-h.top {
  top: $spacer*2;
}
.frame-border-h.bottom {
  bottom: $spacer*2;
}
.frame-top {
  background-color: $body-color;
  position: fixed;
  height: $spacer*2;
  top:0;
  left: 0;
  right: 0;
  z-index: 998;
}
.frame-bottom {
  background-color: $body-color;
  position: fixed;
  height: $spacer*2;
  bottom:0;
  left: 0;
  right: 0;
  z-index: 998;
}
@media (min-width: $min-sm-width) {
  .frame-border-v {
    width:3px;
    top: $spacer*4;
    bottom: $spacer*4;
  }
  .frame-border-v.left {
    left: $spacer*4;
  }
  .frame-border-v.right {
    right: $spacer*4;
  }
  .frame-border-h {
    height:3px;
    left: $spacer*4;
    right: $spacer*4;
  }
  .frame-border-h.top {
    top: $spacer*4;
  }
  .frame-border-h.bottom {
    bottom: $spacer*4;
  }
  .frame-top {
    height: $spacer*4;
  }
  .frame-bottom {
    height: $spacer*4;
  }
}
.container {
  margin: 0 auto;
  padding: $spacer*4;
  @media (min-width: $min-sm-width) {
    padding: $spacer*4 $spacer*10;
  }
}
.logo {
  position: fixed;
  width: 150px;
  height: auto;
  top: -27px;
  left: -18px;
  transform: rotate(-20deg);
  z-index: 999;
}
#header {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: $spacer*4 0;
  nav {
    li {
      display: inline-block;
      margin: 0 0 0 $spacer*4;
      a {
        text-transform: uppercase;
        color: $font-color;
      }
    }
  }
}
h2 {
  font-family: $font-family-h;
  margin: 12% 0 $spacer*3 $spacer*(-6);
  border-bottom: 3px solid $font-color;
  display: inline-block;
  padding: 0 0.5em 0 0;
  text-align: right;
  text-transform: uppercase;
  width: 8em;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: $link-color;
  text-decoration: none;
}
.btn {
  border: none;
  background: $link-color;
  color: $body-color;
  padding: 8px 0;
  &:hover {
    background: $hover-color;
    color: $font-color;
  }
}

#footer {
  display: flex;
  justify-content: space-between;
  .sns-link {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    li {
      display: block;
      margin-left: $spacer*2;
      a {
        display: block;
      }
      img {
        height: 30px;
        width: 30px;
      }
    }
  }
}

</style>
