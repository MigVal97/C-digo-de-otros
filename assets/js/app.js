const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name'); //  # a name
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {   ////////// async
  $n.textContent = 'cargando...';
  try{  /////////////////////////////////////////////////////////// Se agrega try if
    const response = await fetch(`${usersEndpoint}/${username}`);
    if(!response.ok){
      throw new Error('Error en la respuesta de la API'); 
    }
  const data = await response.json(); //console.log(data);
  $n.textContent = data.name;
  $b.textContent = data.blog;
  $l.textContent = data.location;
  }catch(err){
    handleError(err);
  }    
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);