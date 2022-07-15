const cekNum = (num) => {
  for (let i = 1; i <= num; i++) {
    try {
      if (i === '') throw 'Input is empty'
      if (typeof i !== 'number') throw 'Input is not Number'
      if (i > 10) throw `${i} is too high`
      if (i < 5) throw `${i} is too low`
      throw `${i}`
    } catch (error) {
      console.log(`${error}`)
    }
  }
}

cekNum(5)