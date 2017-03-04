<template>
  <section id="contact">
    <h2>contact me</h2>
    <p>If you want to ask something or just say hello, please fill out the contact form below. I will get back to you as soon as possible.</p>
    <form action="" class="contact-form">
      <div class="form-group">
        <label for="">name<span>*</span></label>
        <input type="text" name="name">
      </div>
      <div class="form-group">
        <label for="">email<span>*</span></label>
        <input type="email" name="email" autocorrect="off" autocapitalize="off">
      </div>
      <div class="form-group">
        <label for="">message<span>*</span></label>
        <textarea name="message" rows="5"></textarea>
      </div>
      <div class="form-group">
        <button class="btn">send</button>
      </div>
    </form>
  </section>

</template>

<script>
export default {
  name: 'Skills'
}
</script>

<style lang="scss">
@import '../assets/scss/_variables';

#contact {
  .contact-form {
    width: 100%;
    margin: $section-padding*2 0;
    .form-group {
      margin: 5px 0;
      label {
        display: block;
        span {
          font-size: 0.8em;
          padding: 0.5em;
          color: $link-color;
        }
      }
      input, textarea {
        width: 100%;
      }
    }
    .btn {
      width: 250px;
    }
  }
}

</style>

