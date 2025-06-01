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

    externalLinks {
      id
      kind
      url
      createdAt
      updatedAt
    }

    personRoles {
      id
      rolesRu
      rolesEn
      person { id name poster { id } }
    }
    characterRoles {
      id
      rolesRu
      rolesEn
      character { id name poster { id } }
    }

    related {
      id
      anime {
        id
        name
      }
      manga {
        id
        name
      }
      relationKind
      relationText
    }

    videos { id url name kind playerUrl imageUrl }
    screenshots { id originalUrl x166Url x332Url }

    scoresStats { score count }
    statusesStats { status count }

    description
    descriptionHtml
    descriptionSource
  }
}
`;
