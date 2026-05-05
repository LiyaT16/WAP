async function fetchData() {
    try {
        const response = await fetch('https://wrongurl.com');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Incorrect URL");
        console.log(error);
    }

}
fetchData();

