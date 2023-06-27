<template>
    <h2>Contact Us!</h2>

    <div>
        <label for="full-name">Full Name: *</label>
        <input v-model="text" id="full-name" name="Full Name" required>
    </div>

    <div>
        <label for="email">Email: *</label>
        <input v-model="email" id="email" name="Email" required>
    </div>

    <div>
        <label for="contact-number">Contact Number: *</label>
        <input v-model="tel" id="contact-number" name="Contact Number" required>
    </div>

    <div>
        <label for="message">Your Message: *</label>
        <input v-model="text" id="message" name="Message" required>
    </div>

    <p>* indicates a required field</p>

    <button type="submit">Submit</button>
</template>

<script>
export default {
    data() {
        return {
            text: '',
            email: '',
            tel: ''
        }
    }
}
</script>