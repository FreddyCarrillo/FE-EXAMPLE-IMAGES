import React from 'react';
import loaderGif from '../../assets/loader.gif';
import arrowIcon from '../../assets/arrow.png';
import { useUploadImage } from './hooks/useUploadImage';
import './styles.css';

const UploadImagesPage = () => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isLoadingImage,
    myCurrentImg,
    imgUpload,
    handleChangeCurrentImg,
  } = useUploadImage();

  return (
    <>
      <section className='ctnDropZone'>
        <div {...getRootProps()} className='dropZone'>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>¡Suéltalo!</p>
          ) : (
            <p>Arrastre su archivo aquí o presione</p>
          )}
        </div>
      </section>
      
      <section>

        {isLoadingImage && (
          <>
            <div className='loaderInfo'>
              La imagen se está cargando...
            </div>
            <figure className='ctnLoaderImg'>
              <img
                src={loaderGif}
                width={109}
              />
            </figure>
          </>
        )}

        <div className='ctnPreview'>
          {myCurrentImg && (
            <div className='ctnCurrentImg'>
              <img
                src={myCurrentImg}
              />
            </div>
          )}

          {imgUpload && (
            <img
              src={arrowIcon}
              width={120}
            />
          )}

          {imgUpload && (
            <div className='tempImgUploader'>
              <img
                src={imgUpload?.preview}
              />
            </div>
          )}
        </div>

        {imgUpload && (
          <div className='ctnActions'>
            <button onClick={handleChangeCurrentImg}>
              ACTUALIZAR
            </button>
          </div>
        )}

      </section>
    </>
  )
}

export default UploadImagesPage;
