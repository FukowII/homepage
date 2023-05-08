const getData = async () => {
    try {
      const response = await fetch("https://equal-midnight-decade.glitch.me/data.json"); // recupere les donnes du JSON 
      const data = await response.json();
      console.log("1");
      displayVoiture(data.Voiture);
    } catch (erreur) {
      console.error("erreur", erreur);
    }
  };
  
  const Voiturecata = document.querySelector("#Catalogue"); // on selectionne l'id catalogue


 const displayVoiture = (list) => {
  const VoitureContainer = document.querySelector("#Catalogue");
  VoitureContainer.classList.add('grid', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3', 'gap-4');

  // Nouvelle div pour la carte sélectionnée
  const selectedVoitureDiv = document.createElement('div');
  selectedVoitureDiv.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'h-full', 'bg-gray-800', 'bg-opacity-75', 'flex', 'items-center', 'justify-center', 'hidden');
  document.body.appendChild(selectedVoitureDiv);

  list.forEach((voiture, i) => {
    const voitureCard = document.createElement('div');
    voitureCard.classList.add('cursor-pointer', 'hover:scale-105', 'transition', 'border-2', 'shadow-lg', 'text-center', 'flex', 'items-center', 'justify-center', 'flex-col');
    voitureCard.innerHTML = `
      <img class="w-full h-40 object-cover" src="${voiture.img}"/>
      <div class="rounded-xl p-4 flex flex-col justify-center items-center text-2xl font-bold">${voiture.name}</div>
      <div class="rounded-xl p-4 flex flex-col justify-center items-center text-lg"> A partir de :  ${voiture.prix}€</div>
      <div class="rounded-xl p-4 flex flex-col justify-center items-center text-sm">${voiture?.description?.slice(0, 100)}</div>
      <a href="" class="w-full inline-flex justify-center text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base">Louer !</a>
    `;

    // Ajouter l'écouteur de clic à la carte
    voitureCard.addEventListener('click', () => {
      // Afficher la carte sélectionnée
      selectedVoitureDiv.innerHTML = `
        <div class="bg-white w-4/5 h-4/5 p-4 rounded-lg">
          <img class="w-full h-40 object-cover" src="${voiture.img}"/>
          <div class="text-2xl font-bold">${voiture.name}</div>
          <div class="text-lg"> A partir de :  ${voiture.prix}€</div>
          <div class="text-sm">${voiture?.description}</div>
        </div>
      `;
      selectedVoitureDiv.classList.remove('hidden');
    });

    VoitureContainer.appendChild(voitureCard);
  });

  // Ajouter un écouteur de clic sur la div de la carte sélectionnée pour la cacher lorsque l'utilisateur clique en dehors de la carte
  selectedVoitureDiv.addEventListener('click', (event) => {
    if (event.target === selectedVoitureDiv) {
      selectedVoitureDiv.classList.add('hidden');
    }
  });
};




  getData(); // ca sinon ca marche pas 
  