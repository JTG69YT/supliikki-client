import { useState, useEffect } from "react";
import API from "../API";

export const usePromoFetch = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPromoItems = async () => {
    try {
      setError(false);
      setLoading(true);

      const promoItems = await API.fetchPromoItems();

      setState(promoItems);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial
  useEffect(() => {
    fetchPromoItems();
  }, []);

  return { state, loading, error };
};
