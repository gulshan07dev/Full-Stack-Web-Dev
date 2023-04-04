async function fetchData() {
    try {
        const [todoResponse, postResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/todos/1'),
            fetch('https://jsonplaceholder.typicode.com/posts/1')
        ]);

        const [todoData, postData] = await Promise.all([
            todoResponse.json(),
            postResponse.json()
        ]);

        const result = {
            todo: todoData,
            post: postData
        };

        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchData();