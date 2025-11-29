// import axios from "axios";

// export const imageUpload = async ImageData => {
//     const formData = new FormData()
//     formData.append('image', ImageData)

//     const data = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,formData)
//     return data?.data?.display_url
// }

import axios from "axios";

export const imageUpload = async (imageData) => {
  const formData = new FormData();
  formData.append("image", imageData);
console.log(import.meta.env.VITE_IMGBB_API_KEY)
console.log(formData)
  const res = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
    formData,
    {
      params: {
        key: import.meta.env.VITE_IMGBB_API_KEY,
      },
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );

  return res.data.data.display_url;
};
