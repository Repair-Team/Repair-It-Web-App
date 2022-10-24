<template>
	<div class="card flex flex-column align-items-center">
		<h5 class="align-self-start">My devices brands</h5>
		<Chart type="pie" :data="pieData" :options="pieOptions" style="width: 50%" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			pieData: {
				labels: ['Apple', 'Samsung', 'Xiaomi'],
				datasets: [
					{
						data: [2, 1, 1],
						backgroundColor: [
							"#FF6384",
							"#36A2EB",
							"#FFCE56"
						],
						hoverBackgroundColor: [
							"#FF6384",
							"#36A2EB",
							"#FFCE56"
						]
					}
				]
			}
		}
	}
}
</script>