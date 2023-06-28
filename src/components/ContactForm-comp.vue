<template>
  <div class="card border border-black m-2 p-3 contact">
    <h2 class="card border border-primary p-3 heading-text">Let's Chat!</h2>

    <div class="mb-3">
      <label for="full-name" class="form-label">Full Name: *</label>
      <input v-model="text" id="full-name" name="Full Name" class="form-control border-black w-75 m-auto" placeholder="Your Full Name" required />
    </div>

    <div class="mb-3">
      <label for="email" class="form-label">Email: *</label>
      <input v-model="email" id="email" name="Email" class="form-control border-black w-75 m-auto" placeholder="Valid Email Address" required />
    </div>

    <div class="mb-3">
      <label for="contact-number" class="form-label">Contact Number: *</label>
      <input v-model="tel" id="contact-number" name="Contact Number" class="form-control border-black w-75 m-auto" placeholder="Mobile / Telephone Number" required />
    </div>

    <div class="mb-3">
      <label for="message" class="form-label">Your Message: *</label>
      <textarea v-model="text" id="message" name="Message" class="form-control border-black w-75 m-auto" rows="5" placeholder="We appreciate all feedback! Leave us a message and we'll be in contact soon!"></textarea>
    </div>

    <p class="p-2">* indicates a required field</p>

    <button type="submit" class="btn btn-outline-primary text-center">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      email: "",
      tel: "",
    };
  },
};
</script>

<style>
    .contact {
  background-color: #b3c890 !important;
  width: 70%;
  left: 15%;
}

.heading-text {
  background-color: #b3c890 !important;
}
</style>