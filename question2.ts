let sum = 0;
let i: number;
const expression = () => {
	i = i % 5;
	i = i + 3;
};
for (i = 0; i < 256; expression()) {
	if (sum > 100) break;
	if (i == 4) {
		sum = sum + i;
	}
}
console.log(sum);

// Hardest level
