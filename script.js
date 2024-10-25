document.addEventListener("DOMContentLoaded",function(){
const experienceData=[
    { title: "Drupal Developer", company:" COLEF ", date:" Feb 2023-March 2023"},
    {responsabilities:"UX/UI Design, HTML SVG Coding"}, 
  
    
];
const educationData=[
    { degree:"Ingenieria en Informatica", school:"Instituto Tecnologico de Tijuana", year:"2023"},
]; 
const skillsData=[{first_skill: "First element",second_skill: "Second element "}, 
];

function populateList(listId, data) {
    const list = document.getElementById(listId);
    
        for(var i=0;i<data.length;i++) {
            const listItem = document.createElement("li"); 
            const propertyItem = document.createElement("p");
            propertyItem.innerHTML = Object.values(data[i]); 
            listItem.appendChild(propertyItem);
            list.appendChild(listItem);
            if (i%2!==0 && data.length>2){
                const lineBreak=document.createElement("p");
                lineBreak.innerHTML="<hr>";
                list.appendChild(lineBreak);
            };
        };             
    };
populateList("experience-list",experienceData);
populateList("education-list",educationData);
populateList("skills-list",skillsData);



});

