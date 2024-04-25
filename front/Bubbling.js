   // Get the button by id
   const button = document.getElementById('changeColorButton');

   // Add click event listener to the button
   button.addEventListener('click', function() {
       // Get all divs by tag name
       const divs = document.getElementsByTagName('div');

       // Set a unique color for each div
       for (let i = 0; i < divs.length; i++) {
           divs[i].style.backgroundColor = getRandomColor();
       }
   });

   // Function to generate a random color
   function getRandomColor() {
       const letters = '0123456789ABCDEF';
       let color = '#';
       for (let i = 0; i < 6; i++) {
           color += letters[Math.floor(Math.random() * 16)];
       }
       return color;
   }