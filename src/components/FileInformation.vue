<template>
    <div class="file-upload">
      <form @submit.prevent="submitForm">
        <div>
          <label for="fname">File Name / Regex:</label>
          <input type="text" id="fname" v-model="textInput" />
        </div>
        <div>
          <input type="checkbox" id="useCloud" name="useCloud" value="useCloud" v-model="isCloud" true-value=true false-value=false>
          <label for="useCloud"> Use cloud service </label><br>
        </div>
        <button type="submit">Get Files</button>
      </form>
    </div>
  </template>
  
<script>
  import { onMounted } from 'vue';
  import { getRequest } from './../communication/axiosUtils';

  export default {
    name: 'FileInformation',
    data() {
      return {
        textInput: '',
        isCloud: false
      };
    },
    methods: {
      async submitForm() {
        const formData = new FormData();
        formData.append('fileName', this.textInput);
        formData.append('isCloud', this.isCloud);

        try {
          const response = await getRequest("/api/match-filename", formData);

          // TODO_BUSU: show a notification for succes/fail
          console.log('Server Response:', response.data);
        } catch (error) {
          // Handle errors
          console.error('Error uploading file:', error);
        }
      },
    },
    setup() {
      onMounted(() => {
        // Perform any setup or initialization if needed
      });
    },
  };
</script>
  
<style scoped>
</style>