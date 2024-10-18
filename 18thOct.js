document.getElementById('animal-select').addEventListener('change', function() {
    var selectedAnimal = this.value;
    var imageContainer = document.getElementById('image-container');

    
    imageContainer.innerHTML = '';

    
    var image = document.createElement('img');
    image.src = 'images/'+ selectedAnimal + '.jpg'; 
    image.alt = selectedAnimal;

    // Append the image to the container
    imageContainer.appendChild(image);
});