import axios from "axios";

const API_BASE_URL = "https://job-search-and-recruitment-platform.onrender.com";

export const fetchJobs = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/jobs`);
    dispatch({
      type: "FETCH_JOBS",
      payload: response.data,
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
};
