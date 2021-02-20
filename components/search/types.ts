export type SearchResults = {
	users: {
		node: {
			avatarUrl: string;
			bio?: string;
			company?: string;
			followers: {
				totalCount: number;
			};
			gists: {
				totalCount: number;
			};
			id: string;
			login: string;
			name?: string;
			repositories: {
				totalCount: number;
			};
			starredRepositories: {
				totalCount: number;
			};
			url: string;
		};
	}[];
	pageInfo: {
		endCursor: string;
		hasNextPage: boolean;
		hasPreviousPage: boolean;
		startCursor: string;
	};
	count: number;
};
