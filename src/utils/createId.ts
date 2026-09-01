/**
 * Creates a unique id for runtime entities that are not React nodes (e.g. queued alerts).
 */
export const createId = (): string => {
	if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
		return crypto.randomUUID()
	}

	return `id_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`
}
