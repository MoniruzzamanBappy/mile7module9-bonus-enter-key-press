const go = document.getElementById("button-search");
const txt = document.getElementById("input-field");

txt.addEventListener("keypress", function(event) {
    if (event.key == 'Enter')
        go.click();
});




const searchFood = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    inputField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearch(data.meals))
}

const displaySearch = data => {
    const resulShow = document.getElementById('results');
    // clear search result

    // resulShow.innerHTML = '';

    // clear search result

    resulShow.textContent = '';

    // if no result

    if (data.length == 0) {
        const abc = document.getElementById('noResult');
        abc.innerText = 'No result found';
    }

    else {
        data.forEach(meal => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div  onclick="mealDetails(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="p-2 bg-opacity-10 bg-warning card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                     <p class="card-text">${meal.strCategory}</p >
                </div >
            </div >
        `;
            resulShow.appendChild(div)
        })
    }
}

const mealDetails = async id => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => goToOtherPage(data.meals[0]))

    const res = await fetch(url);
    const data = await res.json();
    goToOtherPage(data.meals[0])
}

const goToOtherPage = data => {

}