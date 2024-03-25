// The task is to fetch data on page load and show the data on the page in cards that you make.
// The cards need to have at least 4 properties about product

// 2.

const fetchQuote = async () => {
    try {
        const response = await fetch("https://randomuser.me/api/")
        const data = await response.json()
        return data.results
    } catch (error) {
console.log(error)
    }
    }

    console.log(data.results)

    //Nisam viseo znao profesore :)