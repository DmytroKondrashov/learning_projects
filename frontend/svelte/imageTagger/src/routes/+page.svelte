<script lang="ts">
  let image = null;
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
</script>
