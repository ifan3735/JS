function Pattern5(rows) {
    for (let i = 8; i >= rows; i--) {
        if (i === 8) {
            console.log("*".repeat(7));
        } else {
            console.log("*");
        }
    }
}

Pattern5(1)