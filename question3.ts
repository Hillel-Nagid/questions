function recursion(buffer: string, letter1: string, letter2: string) {
	let decimalUTF8Code1 = letter1.charCodeAt(0);
	let decimalUTF8Code2 = letter2.charCodeAt(0);

	if (decimalUTF8Code1 > 122) decimalUTF8Code1 = 97;
	if (Math.round((decimalUTF8Code1 + decimalUTF8Code2) / 2) == 109)
		return String.fromCharCode(decimalUTF8Code1);
	buffer =
		String.fromCharCode(decimalUTF8Code1) +
		buffer +
		recursion(
			buffer,
			String.fromCharCode(decimalUTF8Code1 + 1),
			String.fromCharCode(decimalUTF8Code2)
		);
	return buffer;
}
let result_buffer = '';

console.log(recursion(result_buffer, 's', 'w'));
// hardest level
