const getFileInfo = file => {
  const fileInfo = {
    name: file.name,
    size: {
      x: null,
      y: null,
    },
    resolution: null,
    depth: null,
    compression: null,
  }

  console.log(file.type)
}

export { getFileInfo };