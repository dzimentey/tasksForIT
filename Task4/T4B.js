function makeDroids() {
    const droids = [];
    for (let i = 0; i < 10; i++) {
        const droid = () => {
            //console.log("D" + i);
            return `D${i}`
        };
        droids.push(droid()); }
    return droids;
}

for (let d of makeDroids()) {
        console.log(d)
}

// in result console will print:  D0 D1 D2 D3 D4 D5 D6 D7 D8 D9