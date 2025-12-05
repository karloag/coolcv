document.addEventListener("DOMContentLoaded",function(){

    const experienceData=[
    { 
        title: "Asistente Administrador", 
        company:" Depto. Planeación ITT", 
        date:" Enero 2025 - Ago 2025",
        responsabilities:" Gestión datos desde una fuente hacia la plataforma SITEC, obteniendo un registro correcto del personal.",
        
    },

        { 
        title: " Desarrollador Drupal", 
        company:" Colegio de la Frontera Norte ", 
        date:" Feb 2023-Marzo 2023",
        responsabilities:" Voluntariado en diseño de UX/UI y desarrollo HTML, CSS y SVG. Integracion de modulos drupal mediante API REST "
      },
        
];
  const educationData=[
     {  degree:"Ingenieria en Informatica", 
        school:" Instituto Tecnologico de Torreon",
        year:" Grad Est 2026" },
  ]; 
  const skillsData=[
    {
      firstSkill: "c#",
      secondSkill: " Javascript",
     thirdSkill: " SQL",
     fourthSkill: " diseño UI/UX"
  }, 
];

const portfolioData = [
    
    {
      title: "Streamer Dashboard",
      desc: "Pagina hecha con React Typescript / Javascript y Tailwind CSS que se communica a un server NODE hecho con JS el cual solita  el estado actual(activo-inactivo) de un grupo definido de Streamers mediante la API correspondiente",
      img: "images/list.png",
      link: "",
    },
    {
      title: "Nansweeet Bakery",
      desc: "Pagina de producto para una panaderia hecha con React,Typescriot y CSS con la funcion de cambio de lenguaje mediante JSON. Depliegue serverless con Netlify",
      img: "images/nansweet.png",
      link: "",
    },
  ];
  console.log("portfolioData items:", portfolioData.length);

function populatePortfolio(listId, data) {
  const list = document.getElementById(listId);
  if (!list) return;
  list.innerHTML = "";
  data.forEach((item, i) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = item.img;                 
    img.alt = item.title || "";
    img.loading = "lazy";
    img.width = 540;                    
    img.height = 260;

    const title = document.createElement("p");
    title.innerHTML = `<strong>${item.title}</strong>`;

    const desc = document.createElement("p");
    desc.textContent = item.desc || "";

    li.appendChild(img);

    if (item.link) {
      const a = document.createElement("a");
      a.href = item.link;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.appendChild(title);
      li.appendChild(a);
    } else {
      li.appendChild(title);
    }

    li.appendChild(desc);
    list.appendChild(li);

    if (i < data.length - 1) {
      const hr = document.createElement("hr");
      list.appendChild(hr);
    }
  });
}

function populateList(listId, data) {
    const list = document.getElementById(listId);
        for(var i=0; i < data.length; i++) {
            const listItem = document.createElement("li"); 
            const propertyItem = document.createElement("p");
            propertyItem.innerHTML = Object.values(data[i]); 
            listItem.appendChild(propertyItem);
            if (i >= 1 && data.length>1){
                const lineBreak=document.createElement("p");
                lineBreak.innerHTML="<hr>";
                list.appendChild(lineBreak);
            };
            list.appendChild(listItem);
        };             
    };
populateList("experience-list",experienceData);
populateList("education-list",educationData);
populatePortfolio("portfolio-list",portfolioData);
populateList("skills-list",skillsData);
});

