document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById('imageContainer');
    const chefImage = document.getElementById('chefImage');

    const chefImages = {
        chef1: 'ansungjae.jpeg',
        chef2: 'baekjongwon.jpeg',
        chef3: 'common-3.jpeg',  
        chef4: 'napoli.jpeg',
        chef5: 'triplestar.jpeg',
        chef6: 'imokase.jpeg',
        chef7: 'hidden.jpeg',
        chef8: 'gubsik.jpeg',
        chef9: 'cheolgabang.jpeg',
        chef10: 'edward.jpeg',
        chef11: 'pabri.jpeg'
    };

    Object.keys(chefImages).forEach(function(chefId) {
        const chefElement = document.getElementById(chefId);
        chefElement.addEventListener('click', function() {
            const imagePath = chefImages[chefId];
            chefImage.src = imagePath;  
            if (imageContainer.classList.contains('hidden')) {
                imageContainer.classList.remove('hidden');
            } else {
                imageContainer.classList.add('hidden');
                
            }
        });
    });
});
