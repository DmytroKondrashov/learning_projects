<script lang="ts">
	let city = 'Lviv';
	let weather = null;
	let loading = false;
	let error = '';

	async function fetchWeather() {
		loading = true;
		error = '';

		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}`
			);
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

<div
	class="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-5"
>
	<div class="w-full max-w-lg rounded-3xl bg-white p-10 shadow-2xl">
		<h1 class="mb-8 text-center text-4xl font-bold text-gray-800">🌤️ Weather App</h1>

		<input
			type="text"
			bind:value={city}
			on:keypress={handleKeyPress}
			placeholder="Enter city name"
      disabled={loading}
			class="flex-1 rounded-xl border-2 border-gray-200 px-5 py-3 text-base transition-colors focus:border-indigo-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
		/>
	</div>
</div>
