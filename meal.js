const meal_data = document.getElementById('meal_data')

document.querySelector("#search").addEventListener("click", () => {
  const meal_input = document.querySelector("#meal_input")
  mealSearch(meal_input)
})

const mealSearch = (meal_input) => {

  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal_input.value}`

  fetch(url).then(response => {
    if (!response.ok) throw Error(response.statusText)
    return response.json()
  }).then(data => {
    if (data.meals === null) {
      meal_data.innerHTML = 'Sorry, the meal is not available here'
    }
    meal_data.innerHTML = mealData(data)
  }).catch(err => {
    meal_data.innerHTML = err
  })
}

const mealData = (meals) => {
  const data = meals.meals.map((meal) => {
    return `<li>
      ${meal.strMeal + ' ('}<a href='${meal.strYoutube}'>${meal.strYoutube}</a>${')'}
      <br />
      <img src='${meal.strMealThumb}' width="200" height="200" />
    </li>`
  }).join('\n')

  return `<ul>${data}</ul>`
}