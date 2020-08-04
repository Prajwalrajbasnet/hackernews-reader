import { BASE_URL, RESOURCES, ITEM_URL } from '../constants';
import axios from 'axios';

async function fetchStoryIds() {
  const ids = await axios
    .get(`${BASE_URL}${RESOURCES[0]}`)
    .then((res) => res.data);
  return ids;
}

async function getItem(id) {
  return await axios.get(`${ITEM_URL}${id}.json`).then((res) => res.data);
}

export { fetchStoryIds, getItem };
