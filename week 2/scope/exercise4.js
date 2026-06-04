const pot = "red pot with earth in it"

const getSeed = function () {
    return "brown seed";
}

const plant = function () {
    const seed = getSeed();
    console.log("Planting the " + seed + " inside a " + pot);
}

plant()
