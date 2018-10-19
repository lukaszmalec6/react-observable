export function lengthValidator(value: string, min: number, max: number): boolean {
	if (value.length === 0 || value.length < min || value.length > max) {
		return false;
	}
	return true;
}
