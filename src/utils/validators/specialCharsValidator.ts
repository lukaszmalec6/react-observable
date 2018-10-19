export function specialCharsValidator(value: string): boolean {
		return /^[0-9a-zA-Z ]+$/.test(value);
}
