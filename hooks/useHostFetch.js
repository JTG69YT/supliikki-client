import { useState, useEffect } from "react";
import API from "../API";

export const useHostFetch = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchHosts = async () => {
    try {
      setError(false);
      setLoading(true);

      const podcasts = await API.fetchHosts();

      setState(podcasts);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial
  useEffect(() => {
    fetchHosts();
  }, []);

  return { state, loading, error };
};
