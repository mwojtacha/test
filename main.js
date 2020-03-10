const app = {
    init: function () {
        apiUrl = "https://swapi.co/api/planets/";
        xhr = new XMLHttpRequest();
        this.elementsDOM();
        this.getDataAPI(apiUrl);
        this.bindEvents();
    },
    elementsDOM: function(){
        container = document.querySelector(".container");
        planetsList = document.querySelector(".planets");
        name = document.querySelector(".name");
        rotation = document.querySelector(".rotation");
        orbital = document.querySelector(".orbital");
    },
    getDataAPI: function(apiUrl){
        xhr.responseType = "json";
        xhr.open("GET", apiUrl, true);
        xhr.send();
    },
    bindEvents: function(){
        console.log(xhr);
        xhr.addEventListener("load", function(){
            if(xhr.status === 200){
                console.log(xhr.response);
                planetsData = xhr.response.results;
                console.log(planetsData);
                planetsData.map(
                    function(planet){
                        const card = document.createElement("div");
                        const planetName = document.createElement("h3");
                        const planetList = document.createElement("ul");

                        planetName.innerText = planet.name;

                        container.appendChild(card);
                        card.appendChild(planetName);
                        card.appendChild(planetList);

                        function addItem(text){
                            const Item = document.createElement("li");
                            Item.innerText = text;
                            planetList.appendChild(Item);
                        }
                        
                        addItem(`Orbita: ${planet.orbital_period} mln km`);
                        addItem(`Okres obrotu: ${planet.rotation_period} mln km`);
                        addItem(`Klimat: ${planet.climate} mln km`);

                    }
                )


                }
            });
        }
}
app.init();