function getTheSquare(arrayOfObjects) {
    arrayOfObjects.forEach(item => {
        item.square = Math.sqrt(item.source);
    })
    return arrayOfObjects;
}
