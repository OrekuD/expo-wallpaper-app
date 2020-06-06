import Axios from "axios";

export const PIXABAY_API_KEY = "16895568-53777586a2e1fe1737ccf25dd";

export const loadImages = (tag, setIsLoading, setImages, setRefreshing) => {
  Axios.get(
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${tag}&image_type=photo&pretty=true`
  )
    .then((res) => {
      setImages(res.data.hits);
      setIsLoading(false);
      setRefreshing ? setRefreshing(false) : null;
    })
    .catch((err) => {
      setRefreshing ? setRefreshing(false) : null;
      console.log(err);
    });
};
