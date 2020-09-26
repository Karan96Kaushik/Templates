function timeout(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
async function sleep(time) {
	await timeout(time);
	return "";
}

await sleep(1000)