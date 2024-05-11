import axios from "axios";
import { useEffect, useState } from "react";
import { getUsername } from "../helper/helper";
import { BASE_URL } from "../config";

axios.defaults.baseURL = BASE_URL;

/** custom hook */
export default function useFetch(query) {
  const [getData, setData] = useState({
    isLoading: false,
    apiData: undefined,
    status: null,
    serverError: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData((prev) => ({ ...prev, isLoading: true, serverError: null }));

        const { username } = !query ? await getUsername() : "";

        const { data, status } = !query
          ? await axios.get(`${BASE_URL}/api/user/${username}`)
          : await axios.get(`${BASE_URL}/api/${query}`);

        setData((prev) => ({ ...prev, apiData: data, status: status }));
      } catch (error) {
        // Handle different types of errors here
        console.error("Fetch Error:", error);

        setData((prev) => ({ ...prev, serverError: error }));
      } finally {
        setData((prev) => ({ ...prev, isLoading: false }));
      }
    };

    fetchData();
  }, [query]);

  return [getData, setData];
}
