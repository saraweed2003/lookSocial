<template>
  <div>
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required />

      <label for="image">Image:</label>
      <input
        type="file"
        id="image"
        ref="imageInput"
        @change="handleImageChange"
        accept="image/*"
      />

      <button type="submit">Submit</button>
    </form>
  </div>

  <div v-for="data in dataItems" :key="data.id">
    <div>
      {{ data }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const name = ref("");
const selectedImage = ref(null);

const handleImageChange = (event) => {
  selectedImage.value = event.target.files[0];
};

const submitForm = async () => {
  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("image", selectedImage.value);

  try {
    const response = await axios.post(
      "https://padmeexii.pythonanywhere.com/api/asset/type/create/",
      formData
    );
    console.log("Response:", response.data);
    // Reset the form after successful submission
    name.value = "";
    selectedImage.value = null;
  } catch (error) {
    console.error("Error:", error);
  }
};

const dataItems = async () => {
  try {
    const response = await axios.get(
      "https://padmeexii.pythonanywhere.com/api/asset/type/"
    );
    console.log("GET!:", response);
  } catch (error) {
    console.error("Error:", error);
  }
};
</script>
