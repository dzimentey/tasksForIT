
const getExecutionTime = () => {

    const getRandom = (range) => {
        return Math.trunc(Math.random() * (range * 1000))
    }
    const randomDelay = getRandom(3) // specify a range of random delay (from 0 to ...) in seconds

    const initTime = new Date().getTime()
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const finalTime = new Date().getTime()
            if (finalTime - initTime <= 2000) {
                resolve(`Execution time is ${(finalTime - initTime) / 1000} sec`)
            } else {
                reject('Execution time exceeded 2 seconds!')
            }
        }, randomDelay)
        })
        .then((response) => {
                console.log(response)
            }
        )
        .catch((error) => {
                console.error(error)
            }
        )
};

getExecutionTime()
