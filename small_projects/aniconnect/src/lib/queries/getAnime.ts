export const getAnime = `
query getAnime($id: String!) { 
  animes(ids: $id) {
    id
    name
    russian
    english
    japanese
    synonyms
    kind
    rating
    score
    status
    episodes

    poster { id originalUrl mainUrl }

    genres { id name russian kind }
    studios { id name imageUrl }

    videos { id url name kind playerUrl imageUrl }
    screenshots { id originalUrl x166Url x332Url }

    descriptionHtml
  }
}
`;
