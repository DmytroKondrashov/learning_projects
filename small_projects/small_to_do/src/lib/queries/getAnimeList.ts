export const getAnimeList = `
query getAnimeList($limit: Int, $page: Int) { 
  animes(limit: $limit, page: $page) {
    id
    name
    russian
    poster { id originalUrl mainUrl }
  }
}
`;
