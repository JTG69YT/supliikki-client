import {
    PROMO_ITEMS_BASE_URL,
    PODCAST_ITEM_BASE_URL,
    HOST_ITEM_BASE_URL,
    HOME_BASE_URL,
    HOST_BASE_URL
  } from './config';
  
  const apiSettings = {
    fetchPromoItems: async () => {
      const endpoint = `${PROMO_ITEMS_BASE_URL}`;
      return await (await fetch(endpoint)).json();
    },
    fetchPodcasts: async () => {
      const endpoint = `${HOME_BASE_URL}`;
      return await (await fetch(endpoint)).json();
    },
    fetchPodcast: async (podcastId) => {
      const endpoint = `${PODCAST_ITEM_BASE_URL}${podcastId}&user_id=1`;
      return await (await fetch(endpoint)).json();
    },
    fetchHost: async (hostId) => {
      const endpoint = `${HOST_ITEM_BASE_URL}${hostId}&user_id=1`;
      return await (await fetch(endpoint)).json();
    },
    fetchHosts: async () => {
      const endpoint = `${HOST_BASE_URL}`;
      return await (await fetch(endpoint)).json();
    }
  };
  
  export default apiSettings;
  