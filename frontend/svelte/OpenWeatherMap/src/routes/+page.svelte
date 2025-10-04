<script lang="ts">
	let city = $state('Lviv');
	let weather = $state(null)
	let loading = $state(false);
	let error = $state('');

	async function fetchWeather() {
		loading = true;
		error = '';

		try {
			const response = await fetch(
				`http://api.weatherstack.com/current?access_key=${import.meta.env.VITE_OPEN_WEATHERSTACK_API_KEY}&query=${city}`
			);
			const data = await response.json();
      console.log(data);

    if (data.cod !== 200) {
      throw new Error(data.message);
    }
			weather = data;
		} catch (callError: any) {
			error = callError;
		} finally {
			loading = false;
		}
	}

  $inspect(error);

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

<div
	class="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-5"
>
	<div class="w-full max-w-lg rounded-3xl bg-white p-10 shadow-2xl">
		<h1 class="mb-8 text-center text-4xl font-bold text-gray-800">🌤️ Weather App</h1>

		<input
			type="text"
			bind:value={city}
			onkeypress={handleKeyPress}
			placeholder="Enter city name"
      disabled={loading}
			class="flex-1 rounded-xl border-2 border-gray-200 px-5 py-3 text-base transition-colors focus:border-indigo-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
		/>

  <button 
    onclick={fetchWeather} 
    disabled={loading}
    class="px-6 py-3 bg-indigo-500 text-white rounded-xl text-base font-semibold hover:bg-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:-translate-y-0.5"
  >
    {loading ? '⏳ Loading...' : '🔍 Search'}
  </button>

  {#if error}
    <div class="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-4 mt-2 rounded-xl mb-5 text-center">
      ⚠️ {error}
    </div>
  {/if}

  {#if weather}
      <div class="mt-8">
        <div class="text-center p-5 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl mb-5">
          <h2 class="text-3xl font-bold text-gray-800 mb-3">
            {weather.name}, {weather.sys.country}
          </h2>
          <div class="text-6xl font-bold text-indigo-600 my-3">
            {Math.round(weather.main.temp)}°C
          </div>
          <div class="flex items-center justify-center gap-3 text-xl text-gray-600 capitalize">
            <span class="text-4xl">{getWeatherIcon(weather.weather[0].description)}</span>
            <span>{weather.weather[0].description}</span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="bg-blue-50 p-5 rounded-xl text-center">
            <div class="text-sm text-gray-600 mb-2">Feels Like</div>
            <div class="text-2xl font-bold text-gray-800">
              {Math.round(weather.main.feels_like)}°C
            </div>
          </div>
          <div class="bg-blue-50 p-5 rounded-xl text-center">
            <div class="text-sm text-gray-600 mb-2">Humidity</div>
            <div class="text-2xl font-bold text-gray-800">
              {weather.main.humidity}%
            </div>
          </div>
          <div class="bg-blue-50 p-5 rounded-xl text-center">
            <div class="text-sm text-gray-600 mb-2">Wind Speed</div>
            <div class="text-2xl font-bold text-gray-800">
              {weather.wind.speed} m/s
            </div>
          </div>
          <div class="bg-blue-50 p-5 rounded-xl text-center">
            <div class="text-sm text-gray-600 mb-2">Pressure</div>
            <div class="text-2xl font-bold text-gray-800">
              {weather.main.pressure} hPa
            </div>
          </div>
        </div>
      </div>
    {/if}
	</div>
</div>
