import { useState, useEffect } from "react";
import API from "../API";

export const useHomeFetch = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPodcasts = async () => {
    try {
      setError(false);
      setLoading(true);

      const podcasts = await API.fetchPodcasts();

      setState(podcasts);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial
  useEffect(() => {
    fetchPodcasts();
  }, []);

  return { state, loading, error };
};
