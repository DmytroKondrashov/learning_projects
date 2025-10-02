<script lang="ts">
  let city = 'Lviv';
  let weather = null;
  let loading = false;
  let error = '';

  async function fetchWeather() {
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

  function handleKeyPress(event: any) {
    if (event.key === 'Enter') {
      fetchWeather();
    }
  }

  function getWeatherIcon(description: string) {
    const desc = description.toLowerCase();
    if (desc.includes('clear')) return '☀️';
    if (desc.includes('cloud')) return '☁️';
    if (desc.includes('rain')) return '🌧️';
    if (desc.includes('snow')) return '❄️';
    if (desc.includes('thunder')) return '⛈️';
    return '🌤️';
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-5">
  <div class="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full">
    <h1 class="text-4xl font-bold text-gray-800 text-center mb-8">
      🌤️ Weather App
    </h1>
  </div>
</div>

