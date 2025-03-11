import FormPage from "../features/Forms/FormPage";
import UploadImagesPage from "../features/UploadImages/UploadImagesPage";

export const routes = [
  {
    path: '/upload-image',
    element: UploadImagesPage
  },
  {
    path: '/forms',
    element: FormPage
  }
];
