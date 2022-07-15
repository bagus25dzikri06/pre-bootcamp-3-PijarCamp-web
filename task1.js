const cekNum = (num) => {
  try {
    if (num === '') throw 'Input is empty'
    if (typeof num !== 'number') throw 'Input is not Number'
    if (num > 10) throw 'Input is too high'
    if (num < 5) throw 'Input is too low'
    throw `${num}`
  } catch (error) {
    console.log(`${error}`)
  } finally {
    console.log('Done')
  }
}

cekNum(6)
cekNum(7)
cekNum(8)
cekNum(9)
cekNum(10)