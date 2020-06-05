import Axios from "axios";

export const PIXABAY_API_KEY = "16895568-53777586a2e1fe1737ccf25dd";

export const loadImages = (tag, setIsLoading, setImages) => {
  Axios.get(
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${tag}&image_type=photo&pretty=true`
  )
    .then((res) => {
      setImages(res.data.hits);
      setIsLoading(false);
      //   setRefreshing(false);
    })
    .catch((err) => {
      //   setRefreshing(false);
      console.log(err);
    });
};
