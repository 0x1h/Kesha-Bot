const fileUpload = ({attachment, mediaUrl}) => {
  const file = attachment || mediaUrl

  const extension = file.split('.').at(-1) 
  const isVideo = ['mov', 'mp4', 'webm'].some(e => e === extension)

  if(!isVideo && file !== undefined){
    return {
      video: undefined,
      photo: file
    }
  }

  return {
    video: file,
    photo: undefined
  }
}

module.exports = {fileUpload}