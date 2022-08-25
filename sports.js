
console.log("This is my index js file");

// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = 'a1aabaafad7d4cf9b2032116a2b9c045'

// Grab the news container
let newsaccordion = document.getElementById('newsaccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a1aabaafad7d4cf9b2032116a2b9c045`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                    <img src=" ${element["urlToImage"]}" width="auto" height="100px padding: 10px; ">   
                    &ensp;&ensp;&ensp;&ensp;<b>${element["title"]}</b>
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index} jcont"
                data-bs-parent="#newsaccordion">
                <div class="accordion-body">
                 ${element["content"]} 
                <button type="button" class="btn-btn btn dark" style="border-radius:10px; ">  
                           <a href="${element["url"]}" target="_blank"><p style="position:relative; left:20px; top:2px;color:blue">Read more here</p></a> 
                           </button>
                
                </div>
            </div>
        </div>`;
            newsHtml += news;
        });
        newsaccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

//grabbing the search
document.getElementById("mybutton").onclick = function (event){
    event.preventDefault()
    var search=document.getElementById("userInput").value;
    count= 1;
    console.log(search)
        // Create an ajax get request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=a1aabaafad7d4cf9b2032116a2b9c045`, true);
    
    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            console.log(articles);
            let newsHtml = "";
            articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                    <img src=" ${element["urlToImage"]}" width="auto" height="100px padding: 10px; ">   
                    &ensp;&ensp;&ensp;&ensp;<b>${element["title"]}</b>
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index} jcont"
                data-bs-parent="#newsaccordion">
                <div class="accordion-body">
                 ${element["content"]} 
                <button type="button" class="btn-btn btn dark" style="border-radius:10px; ">  
                           <a href="${element["url"]}" target="_blank"><p style="position:relative; left:20px; top:2px;color:blue">Read more here</p></a> 
                           </button>
                
                </div>
            </div>
        </div>`;
            newsHtml += news;
          });
            newsaccordion.innerHTML = newsHtml;
    
              }
        else {
            console.log("Some error occured")
        }
    }
    
    xhr.send()
    
    }    
