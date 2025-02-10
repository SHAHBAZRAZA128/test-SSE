import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useNotification = () => {
  const notifySuccess = (message: string): void => {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  const notifyError = (message: string): void => {
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  return { notifySuccess, notifyError };
};

export default useNotification;
