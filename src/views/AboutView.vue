<template>
  <div class="about">
    <h1>About Us</h1>
  </div>

  <div>
    <h4>If Books Could Kill, would they?</h4>
    <p>
      I think it depends. Ours won't commit homicide - or, book-icide? - but
      they might kill your curiosity.
    </p>
    <p>
      We started out as a small community of book-lovers, looking for a place to
      share and talk about our favourite novels. Over the years, we have grown
      into a business that provides these novels at the lowest cost to our
      lovely readers.
    </p>
    <p>
      Members far and wide have now joined our network and provide us with
      feedback, recommendations, and new content to keep our site up-to-date
      with the latest in this 'novel' world.
    </p>
    <p>
      We pride ourselves on providing books of the highest quality and stature,
      with customer support that will leave our competitors shaking in their
      'books'. Looking for a book that's currently out of stock? Want us to find
      one for you? Or just leave your name and contact details to be added to
      our book club!
    </p>
    <p>
      Fill out the form below and we'll get back to you with updates as they
      come!
    </p>

    <ContactForm/>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm-comp.vue'

export default {
  components: {ContactForm}
};
</script>

<style></style>
