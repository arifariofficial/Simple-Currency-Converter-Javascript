function sumTheArrays(naturalNumbers) {
    const even = naturalNumbers.even;
    const odd = naturalNumbers.odd;

    const sum = [];
    for (let i = 0; i < 5; i++) {
        sum.push(even[i] + odd[i]);
    }
    return sum;
}
