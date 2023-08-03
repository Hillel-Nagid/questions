/*1*/ function bugged(x: number, y: number) {
	/*2*/ return Math.sqrt(x) / y;
	/*3*/
}
/*4*/ let int = 0;
/*5*/ while (true) {
	/*6*/ bugged(++int, int++);
	/*7*/
}

// Medium level
