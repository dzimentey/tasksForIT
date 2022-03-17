class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response
    }}


async function loadJson(url) {
    let response = await fetch(url);
    if (response.status === 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
}

const demoGithubUser = async () => {

    let user = {
        login: undefined
    }

    while (user.login === undefined) {
        let name = prompt("Login?", "iliakan")
        try {
            user = await loadJson(`https://api.github.com/users/${name}`)
            alert(`Full name: ${user.name}.`)
            console.log(user)
            return user

        } catch (err) {
            if (err instanceof HttpError && err.response.status === 404) {
                alert("We can’t find such user.")
            } else {
                console.log(err)
                throw err;
            }
        }
    }
}

demoGithubUser()


