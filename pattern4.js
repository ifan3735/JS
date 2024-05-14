function Pattern4(rows) {
    const middleRow = Math.ceil(rows / 2);
    for (let i = 1; i <= rows; i++) {
        let spaces, stars;
        if (i <= middleRow) {
            spaces = middleRow - i;
            stars = 2 * i - 1;
        } else {
            spaces = i - middleRow;
            stars = 2 * (rows - i) + 1;
        }
        console.log(" ".repeat(spaces) + "*".repeat(stars));
    }
}

Pattern4(9);