function Pattern5(rows) {
    for (let i = 1; i <= rows; i++) {
        if (i === 1) {
            console.log("*".repeat(7));
        } else {
            console.log(" ".repeat(6) + "*");
        }
    }
}

Pattern5(8);