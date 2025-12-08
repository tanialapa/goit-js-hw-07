
const categoriesList = document.querySelector("#categories");
//  console.log(categoriesList);

const items = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const title = item.querySelector("h2").textContent;
    
    const listLength = item.querySelectorAll('li').length;

    // console.log(item)
    console.log(`Category: ${title}`);
    console.log(`Elements: ${listLength}`);
})