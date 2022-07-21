// Funcion anónima auto ejecutable
(() => {
    const $fetch = document.getElementById('product-list-Fetch'),
        $fragment = document.createDocumentFragment();

    //then is the true part ande catch is the false part
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => (
        res.ok ? res.json() : Promise.reject(res) //validate that the promise.ok is true o false
    )).then(json => {
        console.log("Respuesta: ", json)
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
        $fetch.appendChild($fragment);
    }).catch((err) => {
        let message = err.statusText || "Ocurrió un error";
        $fetch.innerHTML = `Error: ${err.status} ${message}`;
    }).finally(() => {
        console.log("Me vale madres que salió aún así lo voy a ejecutar")
    });
})();

(() => {
    const $fetch = document.getElementById('product-list-Fetch-Async'),
        $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users"),
                json = await response.json();

            //If the response is not ok then ejecute the catch by the error.
            if (!response.ok) throw { status: response.status, statusText: response.statusText }
            console.log("Fetch Async Await", response, json);
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
                //console.log($li);
            });
            //$fetch.innerHTML = ""
            $fetch.appendChild($fragment);
        } catch (err) {
            $fetch.innerHTML = `Error ${err.status}: "Ocurrió un error al solicitar los datos" ${err.statusText}`;
        } finally {

        }
    }

    getData();
})();