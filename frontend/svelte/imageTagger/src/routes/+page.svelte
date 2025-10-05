<script lang="ts">
  let image: any = null;
  let preview = null;
  let tags = [];
  let loading = false;
  let error = null;
  let apiKey = '';
  let apiSecret = '';
  let showApiForm = true;

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      image = file;
      preview = URL.createObjectURL(file);
      tags = [];
      error = null;
    }
  }

  async function handleAnalyze() {
    if (!image || !apiKey || !apiSecret) {
      error = 'Please provide API credentials and select an image';
      return;
    }

    loading = true;
    error = null;

    try {
      
    } catch (error) {
      error = 'Error connecting to Imagga API: ' + error.message;
    } finally {
      loading = false;
    }
  }
</script>
