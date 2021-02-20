/**
 * @src https://swr.vercel.app/docs/error-handling
 */
export const fetcher = async (input: RequestInfo, init?: RequestInit) => {
	const res = await fetch(input, init);
	if (!res.ok) throw new Error('An error occurred while fetching the data.');
	return res.json();
};
