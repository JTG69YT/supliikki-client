import { useState, useEffect } from "react";
import API from "../API";

export const useGetPodcastByIdFetch = (podcastId) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPodcast = async () => {
    try {
      setError(false);
      setLoading(true);

      const podcast = await API.fetchPodcast(podcastId);

      setState(podcast);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial
  useEffect(() => {
    fetchPodcast();
  }, [podcastId]);

  return { state, loading, error };
};
