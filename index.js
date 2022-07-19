//Target the main element
const main = document.getElementById('main')

//Loading placeholder
main.innerHTML = '<p>Loading...</p>'

//Fetch all users from JSON Placeholder
const fetchPromise = fetch('https://jsonplaceholder.typicode.com/users')

fetchPromise.then((res) => {
  return res.json()
}).then((biodatas) => {
  //Append all user biodatas to main element
  main.innerHTML = listOfBiodatas(biodatas)
})

//List all users from JSON Placeholder
const listOfBiodatas = (biodatas) => {
  const data = biodatas.map((biodata) => {
    return `<li>
      <b>${biodata.name}</b>
      <p>${biodata.email}</p>
      <i>${biodata.address.street + ' ' + biodata.address.suite + ', ' + biodata.address.city + ' ' + biodata.address.zipcode}</i>
    </li>`
  }).join('\n')

  return `<ul>${data}</ul>`
}