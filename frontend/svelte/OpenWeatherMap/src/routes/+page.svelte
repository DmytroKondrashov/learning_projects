<script lang="ts">
  let city = 'Lviv';
  let weather = null;
  let loading = false;
  let error = '';

  async function fetchWeatche() {
    loading = true;
    error = '';

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}`);
      const data = await response.json();

      if (data.error) {
        error = data.error;
        weather = null;
      } else {
        weather = data;
      }
    } catch (error) {
      error = 'Failed to fetch weather';
    } finally {
      loading = false;
    }
  }
</script>
