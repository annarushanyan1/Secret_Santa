import "./Block.css"
import Search from './../../pictures/search.png';
import { useState } from "react";
function Block() {
    const [search_Name, set_search_name] = useState("");

    function handleKeyUp(event) {
        event.preventDefault();
        if (event.keyCode !== 13) {
            return
        }
        let APIKEY = "DMvml1LkEUy7dOtxuAxT5IQuRNPyVS2I";

        let input = document.getElementById("myInput");

        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=10&q=`;
        let str = input.value.trim();
        url = url.concat(str);
        console.log(url);
        fetching(url);
        set_search_name("")
    }
    async function fetching(url) {
        const response = await fetch(url).then(res => res.json())
        console.log("aaaa", response.data);
        console.log(response.data.length)
        if (response.data.length === 0) {
            alert("No Item");
            return
        }
        let length = response.data.length;
        for (let i = 0; i < length; i++) {
            let newFigure = document.createElement("div");
            newFigure.classList = "figure";
            let img = document.createElement("img");
            img.src = response.data[i].images.downsized.url;
            img.alt = response.data[i].title;
            newFigure.append(img);
            let aman = document.getElementById("items")
            aman.append(newFigure)
        }


    }



    return (
        <div className="Main_block">
            <div className="Search">
                <input type="text"
                    className="input_search"
                    id="myInput"
                    value={search_Name}
                    onChange={(e) => {
                        set_search_name(e.target.value)
                    }}
                    onKeyUp={handleKeyUp}
                />
                <img src={Search} className="search_image" alt="search" />
            </div>
            <div id="items">

            </div>
            <div id="items">
            </div>
        </div>
    );
}

export default Block;