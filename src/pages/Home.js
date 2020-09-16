import getData from "../utils/getData";

const home = async () => {
  const Characters = await getData();

  const view = `
  <div class="Characters">
    ${Characters.results
      .map(
        (character) => `

        <div class="card" style="width: 18rem;">
          <img src="${character.image}" class="card-img-top" alt="...">
          <div class="card-body">
           <h5 class="card-title">${character.name}</h5>
           <a href="#/${character.id}/" class="btn btn-primary">Ver detalles</a>
           </div>
        </div>

         
          `
      )
      .join("")}
  </div>
     `;

  return view;
};
export default home;
