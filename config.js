const API_URL = `http://jesunmaailma.tk/supliikki-cms/api/v1/api.php`;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const HOME_BASE_URL = `${API_URL}?api_key=${API_KEY}&podcasts=all&user_id=1`;
const PROMO_ITEMS_BASE_URL = `${API_URL}?api_key=${API_KEY}&promoItems=all&user_id=1`
const PODCAST_ITEM_BASE_URL = `${API_URL}?api_key=${API_KEY}&getPodcastById=`
const HOST_BASE_URL = `${API_URL}?api_key=${API_KEY}&hosts=all&user_id=1`

export {
  HOME_BASE_URL,
  PROMO_ITEMS_BASE_URL,
  PODCAST_ITEM_BASE_URL,
  HOST_BASE_URL,
  API_URL,
  API_KEY,
};