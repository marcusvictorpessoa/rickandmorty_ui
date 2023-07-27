import api from "../api";

export async function getIndexCharacters(uri, page) {
  const indexResponse = await api.get(`/${uri}/?page=${page}`);

  return indexResponse;
}

export async function getShowCharacter(uri, id) {
  const showResponse = await api.get(`/${uri}/${id}`);

  return showResponse;
}
