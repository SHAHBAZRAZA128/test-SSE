
import axios from "axios";
import useNotification from "./useNotification";


const useHttp = () => {
    const { notifySuccess, notifyError } = useNotification();
  
    const request = async (url: string, data: any, isFormData = false) => {
      try {
        const headers = isFormData
          ? {}
          : { "Content-Type": "application/json" };
  
        const response = await axios.post(url, data, { headers });
  
        console.log("API Response:", response); 
  
        if (response.status === 200 || response.status === 201) {
          notifySuccess("Request successful!");
          return response.data;
        } else {
          notifyError("Something went wrong.");
          return null;
        }
      } catch (error) {
        console.error("Axios Request Error:", error);
        notifyError("Request failed. Please try again.");
        return null;
      }
    };
  
    return { request };
  };
  
  export default useHttp;
  