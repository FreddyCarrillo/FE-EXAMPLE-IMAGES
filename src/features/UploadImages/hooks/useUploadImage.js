import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { getMyCurrentImage } from "../services/uploaderImg";

export const useUploadImage = () => {

  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [myCurrentImg, setMyCurrentImg] = useState(null);
  const [imgUpload, setImgUpload] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    const previewObject = Object.assign(acceptedFiles[0], {
      preview: URL.createObjectURL(acceptedFiles[0])
    });
    setImgUpload(previewObject);
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: {
      'image/*': []
    }, 
    onDrop
  });

  const handleGetMyImage = async () => {
    setIsLoadingImage(true);
    const dataImg = await getMyCurrentImage();
    setMyCurrentImg(dataImg);
    localStorage.setItem('currentImg', dataImg);
    setIsLoadingImage(false);
  };

  const handleChangeCurrentImg = () => {
    localStorage.setItem('currentImg', imgUpload?.preview);
    setMyCurrentImg(imgUpload?.preview);
    setImgUpload(null);
  };

  useEffect(() => {
    handleGetMyImage();
  }, []);

  return {
    getRootProps,
    getInputProps,
    isDragActive,
    isLoadingImage,
    myCurrentImg,
    handleChangeCurrentImg,
    imgUpload
  }
};
