import "./style.css";
console.log("Hello webpack!");

fetch('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                return response.json();
                console.log(response.json())
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });


            function appendData(data) {
              var mainContainer = document.getElementById("myData");
              for (var i = 0; i < data.length; i++) {
                  var div = document.createElement("div");
                  div.innerHTML = 'Name: ' + data[i].name;
                  mainContainer.appendChild(div);
              }}