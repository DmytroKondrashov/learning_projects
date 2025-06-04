export const getAnimeList = `
query getAnimeList($limit: Int, $page: Int, $search: String) { 
  animes(limit: $limit, page: $page, search: $search) {
    id
    name
    russian
    poster { id originalUrl mainUrl }
  }
}
`;
