const luasPersegiPanjang = (panjang, lebar) => {
  return new Promise((resolve, reject) => {
    if (panjang !== lebar) {
      resolve(`Luas persegi panjang: ${panjang * lebar}`)
    } else {
      reject(new Error('Termasuk persegi, bukan persegi panjang'))
    }
  })
}

const rectangleWidth = async (length, height) => {
  await luasPersegiPanjang(length, height).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err.message)
  })
}

rectangleWidth(7, 8)
rectangleWidth(12, 12)