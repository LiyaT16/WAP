async function fetchSequential() {
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const userData = await userResponse.json();
    console.log("User data:");
    console.log(userData);

    const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const postData = await postResponse.json();
    console.log("Post data:");
    console.log(postData);

}
fetchSequential();

console.log("--------------parallel--------------");

async function fetchParallel() {
    const [userResp, postResp] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users/1'),
        fetch('https://jsonplaceholder.typicode.com/posts/1')
    ]);
    const userData = await userResp.json();
    const postData = await postResp.json();
    console.log("User data:");
    console.log(userData);
    console.log("Post data:");
    console.log(postData);

}
fetchParallel();