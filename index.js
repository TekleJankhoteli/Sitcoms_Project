let container=document.getElementById("container");
let sortButton=document.getElementById("sort");
let table=document.getElementById("table");
let forSort=true;

// style container
container.style.display="flex";
container.style.justifyContent="center";
container.style.alignItems="center";
container.style.flexDirection="column";


// style sortButtoon
sortButton.style.border="none";
sortButton.style.borderRadius="8px";
sortButton.style.backgroundColor="#D1D7E0";
sortButton.style.width="80px";
sortButton.style.marginTop="30px"

// style table
table.style.width="1000px";
table.style.height="500px";
table.style.textAlign="center";

// array
const sitcoms = [
    {
        image: "https://example.com/friends-image.jpg",
      name: "Friends",
      releaseYear: 1994,
      rating: 8.5,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "The Office",
      releaseYear: 2005,
      rating: 8.9,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "Parks and Recreation",
      releaseYear: 2009,
      rating: 8.6,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "Brooklyn Nine-Nine",
      releaseYear: 2013,
      rating: 8.4,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "How I Met Your Mother",
      releaseYear: 2005,
      rating: 8.3,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "The Big Bang Theory",
      releaseYear: 2007,
      rating: 8.1,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "Modern Family",
      releaseYear: 2009,
      rating: 8.4,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "The Simpsons",
      releaseYear: 1989,
      rating: 8.6,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "Seinfeld",
      releaseYear: 1989,
      rating: 8.8,
      url: "https://netflix.com/sitcom",
    },
    {
      name: "The IT Crowd",
      releaseYear: 2006,
      rating: 8.5,
      url: "https://netflix.com/sitcom",
    },
  ];


//   functions for create table and remove sitcome
  function createTable(sitcom) {
    let firstSitcome = document.createElement("tr");
    let firstSitcomeName = document.createElement("td");
    let firstSitcomeYear = document.createElement("td");
    let firstSitcomeRating = document.createElement("td");
    let firstSitcomeUrl = document.createElement("td");
    let removeButton = document.createElement("button");


    firstSitcomeName.textContent = sitcom.name;
    firstSitcomeYear.textContent = sitcom.releaseYear;
    firstSitcomeRating.textContent = sitcom.rating;

    let urlLink = document.createElement("a");
    urlLink.textContent = sitcom.url;
    urlLink.href = sitcom.url;
    urlLink.target = "_blank"; 

    firstSitcomeUrl.appendChild(urlLink);

    firstSitcomeName.style.backgroundColor="#dddddd";
    firstSitcomeYear.style.backgroundColor="#dddddd";
    firstSitcomeRating.style.backgroundColor="#dddddd";
    firstSitcomeUrl.style.backgroundColor="#dddddd";


    removeButton.style.marginTop="16px";
    removeButton.style.width = "30px";
    removeButton.style.height = "10px";
    removeButton.style.backgroundColor = "#802BB1";
    removeButton.style.border = 'none';
    removeButton.style.borderRadius = '10px';


    removeButton.addEventListener("click",function(){
    table.removeChild(firstSitcome)
})

removeButton.addEventListener("mouseover", function(){
    removeButton.style.cursor="pointer";
  

});
removeButton.addEventListener("mouseout", function(){
    removeButton.style.cursor="pointer";


});


    table.appendChild(firstSitcome);
    firstSitcome.appendChild(firstSitcomeName);
    firstSitcome.appendChild(firstSitcomeYear);
    firstSitcome.appendChild(firstSitcomeRating);
    firstSitcome.appendChild(firstSitcomeUrl);
    firstSitcome.appendChild(removeButton);
}


for (let i = 0; i < sitcoms.length; i++) {
    createTable(sitcoms[i]);
}

// function and EventListener for sort
function sortSitcomes(){
    forSort=!forSort;

    sitcoms.sort((x,y)=>(forSort ? x.rating -y.rating : y.rating - x.rating));

    let rowsToRemove = table.querySelectorAll('tr:not(:first-child)');
    rowsToRemove.forEach(row => {
        table.removeChild(row);
    });


for (let i = 0; i < sitcoms.length; i++) {
    createTable(sitcoms[i]);
}
}


sortButton.addEventListener("click",function(){
    sortSitcomes()
})

sortButton.addEventListener("mouseover", function(){
    sortButton.style.cursor="pointer";
    sortButton.style.backgroundColor="#dddddd";

});
sortButton.addEventListener("mouseout", function(){
    sortButton.style.cursor="pointer";
    sortButton.style.backgroundColor="#D1D7E0";

});

