// Funcion anónima auto ejecutable
(() => {
    //Step 1; Intantiate de Ajax object XMLHttpRequest
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById('product-list-Ajax'),
        $fragment = document.createDocumentFragment();

    //Step 2; Events asigments Erro, abort, success etc..
    xhr.addEventListener("readystatechange", (e) => {
        //validation ejecution when 
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {

            //console.log("Éxito");
            let json = JSON.parse(xhr.responseText);

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
            $xhr.appendChild($fragment);
            //console.log(json)
        } else {
            let message = xhr.statusText || "Ocurrió un error";
            $xhr.innerHTML = `Error: ${xhr.status}: ${message}`;
            //console.log("Error")
        }
        //
    });

    //Step 3; Define the method or verb of HTTP GET, POST, PUT, DELETE etc... and define de API URL
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    //Step 4; Send the request
    //In this case the method was GET, the we do not need to send a request
    xhr.send();

})();