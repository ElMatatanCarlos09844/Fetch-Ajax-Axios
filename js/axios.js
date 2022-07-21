// Funcion anónima auto ejecutable
(() => {
    const $ax = document.getElementById('product-list-Axios'),
        $fragment = document.createDocumentFragment();

    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {

            let json = res.data;
            json.forEach(element => {
                const $li = document.createElement("div");
                $li.className = "card mb-1";
                $li.innerHTML = `
                    <br>
                    <div class="card-header">User ${element.id}</div>
                    <div class="card-body">
                        <strong>User name:</strong> ${element.name}
                        <br>
                        <strong>Email:</strong> ${element.email}
                        <br>
                        <strong>Phone number:</strong> ${element.phone}
                    </div>
                    `;
                $fragment.appendChild($li);
            });
            //console.log($fragment)
            $ax.appendChild($fragment);
        })
        .catch((err) => {
            //console.log(err.response)
            let message = err.statusText || "Ocurrió un error";
            $ax.innerHTML = `Error: ${message}, ${err.message}`;
        })
        .finally(() => { console.log("This will be executed independently of the response"); })
})();


(() => {
    const $axios_async = document.getElementById('product-list-Axios-Async'),
        $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users"),
                json = await response.data;
            //console.log(response,json);
            //If the response is not ok then ejecute the catch by the error.            
            json.forEach(element => {
                const $li = document.createElement("div");
                $li.className = "card mb-1"
                $li.innerHTML = `
                    <br>
                    <div class="card-header">User ${element.id}</div>
                    <div class="card-body">
                        <strong>User name:</strong> ${element.name}
                        <br>
                        <strong>Email:</strong> ${element.email}
                        <br>
                        <strong>Phone number:</strong> ${element.phone}
                    </div>
                    `;
                $fragment.appendChild($li);
            });
            //$fetch.innerHTML = ""
            $axios_async.appendChild($fragment);
        } catch (err) {
            let message = err.statusText || "Ocurrió un error";
            $axios_async.innerHTML = `Error: ${message}, ${err.message}`;
        } finally {
            console.log("This will be executed independently of the response")
        }
    }

    getData();
})();