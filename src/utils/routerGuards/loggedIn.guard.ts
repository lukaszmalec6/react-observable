/* validate jwt when backend is ready */
export const loggedInGuard = () => !!localStorage.getItem(`authToken`);
