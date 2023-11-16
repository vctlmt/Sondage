document.addEventListener('DOMContentLoaded', function () {
    // Options initiales
    let options = ['Option 1', 'Option 2', 'Option 3'];

    // Afficher les options existantes
    const optionsList = document.getElementById('options-list');
    options.forEach(option => addOptionElement(option));

    // Activer le glisser-déposer
    new Sortable(optionsList, {
        animation: 150,
        ghostClass: 'ghost',
        onEnd: updateOrder,
    });

    // Fonction pour ajouter une nouvelle option
    window.addOption = function () {
        const newOption = prompt('Entrez une nouvelle option :');
        if (newOption) {
            options.push(newOption);
            addOptionElement(newOption);
        }
    };

    // Fonction pour soumettre le sondage
    window.submitSurvey = function () {
        const sortedOptions = Array.from(optionsList.children).map(li => li.innerText);
        alert('Sondage soumis :\n' + sortedOptions.join('\n'));
    };

    // Fonction pour ajouter une option à la liste
    function addOptionElement(option) {
        const li = document.createElement('li');
        li.innerText = option;
        optionsList.appendChild(li);
    }

    // Fonction appelée lorsqu'un élément est déplacé
    function updateOrder() {
        options = Array.from(optionsList.children).map(li => li.innerText);
    }
});
