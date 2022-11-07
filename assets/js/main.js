//aggiungo persone disponibili
const team = [
    {
      name: "Wayne Barnett",
      role: "Founder & CEO",
      photo: "img/wayne-barnett-founder-ceo.jpg",
      qualities: ['Great Team Leader',
      'Always Untiring'
      ]
    },
    {
      name: "Angela Caroll",
      role: "Chief Editor",
      photo: "img/angela-caroll-chief-editor.jpg",
      qualities: ['Unconventional Girl']
    },
    {
      name: "Walter Gordon",
      role: "Office Manager",
      photo: "img/walter-gordon-office-manager.jpg",
      qualities: ['With clear Ideas']
    },
    {
      name: "Angela Lopez",
      role: "Social Media Manager",
      photo: "img/angela-lopez-social-media-manager.jpg",
      qualities: ['Little Angie']
    },
    {
      name: "Scott Estrada",
      role: "Developer",
      photo: "img/scott-estrada-developer.jpg",
      qualities: ['Problem Solver']
    },
    {
      name: "Barbara Ramos",
      role: "Graphic Designer",
      photo: "img/barbara-ramos-graphic-designer.jpg",
      qualities: ['Always Smiling']
    }
  ];

const teamContainer = document.querySelector('.row');
const addButton = document.querySelector('#btnAdd');
addButton.addEventListener('click', addNewMember);

printTeam();


function printTeam() {
  //resetto il teamContainer
  teamContainer.innerHTML = '';

  //stampo tutti i membri del mio team
  team.forEach(teamMember => drawTeamMember(teamMember))

}

function drawTeamMember(teamMember) {
    //Leggo il contenuto del container
  let prevContent = teamContainer.innerHTML;

    //prendo le informazione dal teamMember
  const name = teamMember.name;
  const role = teamMember.role;
  const photo = teamMember.photo;
  const qualities = teamMember.qualities;

   //genero l'output html
    prevContent += `
  <div class="col py-4">
    <div class="card" style="width: 20em;">
      <img src="${photo}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title text-center">${name}</h5>
        <p class="card-text text-center">${role}</p>
        <p class="card-adjectives text-center" style="font-size: 0.9rem">${qualities.join(' - ')}</p>
      </div>
    </div>
  </div>
 `;

  //lo aggiungo  all'html presente
  teamContainer.innerHTML = prevContent;
}

function addNewMember() {
 
    //Leggo il valore degli input
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const photo = document.getElementById('image').value;
    const qualities = document.getElementById('qualities').value;
  
    const arrNewQualities = qualities.split(',');
    const cleanNewQualities = arrNewQualities.map( quality => {
      return quality.trim();
    })
  
    console.log(cleanNewQualities);

    //Creo un oggetto con tutti i valori necessari
  const newTeamMember = {
    name: name,
    role: role,
    photo: photo,
    qualities: qualities.split(',')
  }

  console.log(newTeamMember)
   //Invio il nuovo oggetto a drawTeamMember
   drawTeamMember(newTeamMember);

   //Aggiungo l'elemento alla base dati
   team.push(newTeamMember);

  //  Resetto il form
  resetForm()

  function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('role').value = '';
    document.getElementById('image').value = '';
    document.getElementById('qualities').value = '';
  }
 }