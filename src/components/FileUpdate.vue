<template>
    <div class="file-upload">
      <form @submit.prevent="submitForm">
        <div>
          <label for="fname">File Name:</label>
          <input type="text" id="fname" v-model="textInput" />
        </div>
        <div>
          <label for="fileInput" class="file-label">Choose a file:</label>
          <input
            type="file"
            id="fileInput"
            ref="fileInput"
            @change="handleFileChange"
            style="display: none"
          />
          <button type="button" @click="openFileInput">Browse</button>
          <p v-if="selectedFile">{{ selectedFile.name }}</p>
        </div>
        <div>
          <input type="checkbox" id="useCloud" name="useCloud" value="useCloud" v-model="isCloud" true-value=true false-value=false>
          <label for="useCloud"> Use cloud service </label><br>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { postRequest } from './../communication/axiosUtils';

  export default {
    name: 'FileUpdate',
    data() {
      return {
        textInput: '',
        selectedFile: null,
        isCloud: false
      };
    },
    methods: {
      openFileInput() {
        this.$refs.fileInput.click();
      },
      handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.selectedFile = file;
          // You can perform additional actions with the selected file if needed
        }
      },
      async submitForm() {
        const formData = new FormData();
        formData.append('fileName', this.textInput);
        formData.append('file', this.selectedFile);
        formData.append('isCloud', this.isCloud);
        try {
          const response = await postRequest("/api/update", formData);

          // TODO_BUSU: show a notification for succes/fail
          console.log('Server Response:', response.data);
        } catch (error) {
          // Handle errors
          console.error('Error uploading file:', error);
        }
      },
    },
    setup() {
      const fileInput = ref(null);
  
      onMounted(() => {
        // Perform any setup or initialization if needed
      });
  
      return { fileInput };
    },
  };
  </script>
  
  <style scoped>
  </style>