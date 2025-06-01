export default interface Anime {
	id: string;
	malId: string;
	name: string;
	russian: string;
	english: string;
	japanese: string;
	kind: string;
	rating: string;
	score: number;
	status: string;
	episodes: number;
	airedOn: { year: number; month: number; day: number; date: string };
	releasedOn: { year: number; month: number; day: number; date: string };
	poster: { id: string; originalUrl: string; mainUrl: string };

	createdAt: string;
	updatedAt: string;

	genres: { id: string; name: string; russian: string; kind: string }[];
	studios: { id: string; name: string; imageUrl: string }[];

	videos: {
		id: string;
		url: string;
		name: string;
		kind: string;
		playerUrl: string;
		imageUrl: string;
	}[];
	screenshots: { id: string; originalUrl: string; x166Url: string; x332Url: string }[];

	description: string;
	descriptionHtml: string;
}
