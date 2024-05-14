function Pattern3(rows) {
    for (let i = 1; i <= rows * 2 - 1; i++) {
        let spaces = Math.abs(rows - i);
        let stars = rows - spaces;
        console.log(" ".repeat(spaces) + "*".repeat(stars));
    }
}

Pattern3(5);