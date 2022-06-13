import { useState, useEffect } from "react";
import API from "../API";

export const useGetHostByIdFetch = (hostId) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchHost = async () => {
    try {
      setError(false);
      setLoading(true);

      const host = await API.fetchHost(hostId);

      setState(host);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial
  useEffect(() => {
    fetchHost();
  }, [hostId]);

  return { state, loading, error };
};
