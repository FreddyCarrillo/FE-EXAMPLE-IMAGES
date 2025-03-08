export const getMyCurrentImage = async () => {
  const tempImgUrl = 'https://www.shutterstock.com/image-vector/luffy-skull-vector-illustration-anime-600nw-2514318757.jpg';
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve(tempImgUrl);
    }, 5000);
  });
};
