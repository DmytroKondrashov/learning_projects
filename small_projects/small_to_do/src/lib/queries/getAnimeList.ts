export const getAnimeList = `
query getAnimeList($limit: Int, $page: Int) { 
  animes(limit: $limit, page: $page) {
    id
    malId
    name
    russian
    english
    japanese
    kind
    rating
    score
    status
    episodes
    airedOn { year month day date }
    releasedOn { year month day date }
    poster { id originalUrl mainUrl }

    createdAt,
    updatedAt,

    genres { id name russian kind }
    studios { id name imageUrl }

    videos { id url name kind playerUrl imageUrl }
    screenshots { id originalUrl x166Url x332Url }

    description
    descriptionHtml
  }
}
`;
