

function switchTheValues(cats) {
    cats.forEach(item => {
        let temp = item["name"];
        item["name"] = item["owner"];
        item["owner"] = temp;
        console.log(`${item.owner} has a cat named ${item.name}, whose breed is ${item.breed}`)
    })
}
