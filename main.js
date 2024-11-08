document.addEventListener("DOMContentLoaded", function() {
    var grid = document.querySelector('.gridwrapper'); // The grid container
    var expandButton = document.getElementById('expandButton');
    var reduceButton = document.getElementById('reduceButton');
    var infoButton = document.getElementById('infoButton');
    var infoOverlay = document.getElementById('info-overlay');
    var grid = document.querySelector('.gridwrapper');
    adjustGridColumns(); // Adjust grid columns on load

    function updateMaxColumns() {
        var maxColumns;
        if (window.matchMedia("(max-width: 768px)").matches) {
            maxColumns = 3; // Mobile devices
        } else if (window.matchMedia("(max-width: 992px)").matches) {
            maxColumns = 5; // Tablets
        } else {
            maxColumns = 7; // Desktop and larger
        }
        return maxColumns;
    }    


    function adjustGridColumns() {
        var currentColumnCount = parseInt(window.getComputedStyle(grid).getPropertyValue('column-count'), 10);
        var maxColumns = updateMaxColumns();
    
        if (currentColumnCount > maxColumns) {
            grid.style.columnCount = maxColumns;
        }
    }

    window.addEventListener('resize', adjustGridColumns);



    expandButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action
        var currentColumnCount = parseInt(window.getComputedStyle(grid).getPropertyValue('column-count'), 10);
        var maxColumns = updateMaxColumns();
        if (currentColumnCount < maxColumns) {
            grid.style.columnCount = currentColumnCount + 1;
        }
    });

    const maxColumns = 7; // Adjust this number to your desired maximum

    reduceButton.addEventListener('click', function(event) {
        event.preventDefault();
        var currentColumnCount = parseInt(window.getComputedStyle(grid).getPropertyValue('column-count'), 10);
        if (currentColumnCount > 1) {
            grid.style.columnCount = currentColumnCount - 1;
        }
    });
    
    
    function updateButtonVisibility() {
        var sliderSection = document.getElementById('slideshow');
        var gridSection = document.getElementById('grid');
    
        var viewportMiddle = window.innerHeight / 2 + window.pageYOffset;
    
        var sliderSectionBounds = sliderSection.getBoundingClientRect();
        var gridSectionBounds = gridSection.getBoundingClientRect();
    
        if (viewportMiddle >= sliderSectionBounds.top + window.pageYOffset && viewportMiddle < gridSectionBounds.top + window.pageYOffset) {
            // Show buttons for slider section
            document.getElementById('expandButton').style.display = 'none';
            document.getElementById('reduceButton').style.display = 'none';
            document.getElementById('gridAnchor').style.display = 'flex';
        } else if (viewportMiddle >= gridSectionBounds.top + window.pageYOffset) {
            // Show buttons for grid section
            document.getElementById('expandButton').style.display = 'flex';
            document.getElementById('reduceButton').style.display = 'flex';
            document.getElementById('gridAnchor').style.display = 'none';
        }
    }
    
    document.addEventListener("DOMContentLoaded", updateButtonVisibility);
    document.addEventListener('scroll', updateButtonVisibility);
    

    
    
    

    var isOverlayOpen = false;

    // Event listener to toggle the overlay when clicking on the infoButton
    infoButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action
        event.stopPropagation(); // Stop the click from propagating to other elements
        var overlayStyle = window.getComputedStyle(infoOverlay).display;
        infoOverlay.style.display = (overlayStyle !== 'flex') ? 'flex' : 'none';
        isOverlayOpen = !isOverlayOpen; // Update the flag
        infoButton.textContent = (overlayStyle !== 'flex') ? 'CLOSE' : 'ABOUT';
    });

   
    // Event listener to close the overlay when clicking outside of it
    document.addEventListener('click', function(event) {
    // Check if the click was outside the infoOverlay and not on expandButton or reduceButton
    if (infoOverlay.style.display === 'flex' && 
        !infoOverlay.contains(event.target) &&
        !expandButton.contains(event.target) &&
        !reduceButton.contains(event.target)) {
        infoOverlay.style.display = 'none'; // Hide the overlay
        isOverlayOpen = false; // Update the flag
        infoButton.textContent = 'ABOUT'; // Change the button text back to ABOUT
    }
    });

    document.getElementById('darkmode').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action
        document.body.classList.toggle('dark-mode');
    });




document.getElementById('gridAnchor').addEventListener('click', function(event) {
    event.preventDefault();
    var gridSection = document.getElementById('grid');
    var topPosition = gridSection.offsetTop - 0; // Subtract the top margin

    window.scrollTo({ top: topPosition, behavior: 'smooth' });
});




});



document.addEventListener('DOMContentLoaded', function () {
    const imageDetails = [
        { src: "img/Atlantique-HW-Text-Pages-v3.webp", fit: "cover", mobileFit: "cover", type: "image" },
        { src: "img/Natalia-Cornudella-3.webp", fit: "cover", mobileFit: "cover", type: "image" },
        { src: "img/05-02_HW_Pacific-Key-v2.webp", fit: "cover", mobileFit: "cover", type: "image" },
        { src: "img/Delarge-web-Portada.webp", fit: "cover", mobileFit: "contain", type: "image" },
        { src: "img/Julia-Spinola-Invite-FINAL.webp", fit: "cover", mobileFit: "cover", type: "image" },
        { src: "img/VIETA AUDIO ELECTRONICA.webp", fit: "contain", mobileFit: "contain", type: "image" },
        { src: "img/Xavier-Guillen-Viz-1.webp", fit: "cover", mobileFit: "cover", type: "image" },
        { src: "img/Carner-Ibiza.webp", fit: "contain", mobileFit: "contain", type: "image" },
        { src: "img/Delarge-Main-Slideshow.webp", fit: "cover", mobileFit: "cover", type: "image" },
        { src: "img/tfg-1.webp", fit: "cover", mobileFit: "cover", type: "image" },
        { src: "img/Atlantic-Info.webp", fit: "cover", mobileFit: "cover", type: "image" },
        { src: "img/Adria-Escribano-Portada.webp", fit: "cover", mobileFit: "contain", type: "image" },
        { src: "img/Topol-Title-Pink-Portada.webp", fit: "cover", mobileFit: "cover", type: "image" },
        { src: "img/Camperlab-Seoul-2.webp", fit: "cover", mobileFit: "cover", type: "image" },
        { src: "img/Xavier-Guillen-Viz-4.webp", fit: "cover", mobileFit: "cover", type: "image" },
        { src: "img/Anells-Triptic+logo.webp", fit: "cover", mobileFit: "cover", type: "image" },
        { src: "img/Julia-Spinola-Invite-Color-1 copy.webp", fit: "cover", mobileFit: "contain", type: "image" },
        { src: "img/Portfolio-Julia_Espinola-01.webp", fit: "cover", mobileFit: "cover", type: "image" },
        { src: "img/eina_2021-2.webp", fit: "cover", mobileFit: "cover", type: "image" },
        { src: "img/tfg-detall-3.webp", fit: "contain", mobileFit: "contain", type: "image" },
        { src: "img/kids-portada-FINAL-5.webp", fit: "cover", mobileFit: "contain", type: "image" },
    ];
    let currentImageIndex = 0;
    let interval;
    let isMouseDown = false;
    const wrapper = document.querySelector('.slideshow-wrapper');

    function loadImage(imageDetail) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = function() {
                resolve(img);
            };
            img.onerror = reject;
            img.src = imageDetail.src;
        });
    }

    function loadVideo(videoDetail) {
        return new Promise((resolve, reject) => {
            let video = document.createElement('video');
            video.onloadeddata = function() {
                resolve(video);
            };
            video.onerror = reject;
            video.src = videoDetail.src;
            video.style.objectFit = 'cover';
            video.style.width = '100%';
            video.style.height = '100%';
            video.autoplay = true;
            video.loop = false;
            video.muted = true;
        });
    }

    function isMobile() {
        return window.matchMedia("(max-width: 768px)").matches;
    }

    async function updateImage() {
        const imageDetail = imageDetails[currentImageIndex];
        try {
            if (imageDetail.type === "image") {
                await loadImage(imageDetail);
                const imgElement = wrapper.querySelector('img') || document.createElement('img');
                imgElement.src = imageDetail.src;
                imgElement.style.objectFit = isMobile() ? imageDetail.mobileFit : imageDetail.fit;
                if (!wrapper.contains(imgElement)) {
                    wrapper.innerHTML = '';
                    wrapper.appendChild(imgElement);
                }
                startSlideshow();
            } else if (imageDetail.type === "video") {
                const videoElement = await loadVideo(imageDetail);
                videoElement.style.objectFit = isMobile() ? imageDetail.mobileFit : imageDetail.fit;
                videoElement.onended = function() {
                    currentImageIndex = (currentImageIndex + 1) % imageDetails.length;
                    updateImage();
                };
                wrapper.innerHTML = '';
                wrapper.appendChild(videoElement);
                videoElement.play();
                stopSlideshow();
            }
        } catch (error) {
            console.error("Error loading media: ", error);
        }
    }

    function startSlideshow() {
        if (!interval) {
            interval = setInterval(() => {
                currentImageIndex = (currentImageIndex + 1) % imageDetails.length;
                updateImage();
            }, 5000);
        }
    }

    function stopSlideshow() {
        clearInterval(interval);
        interval = null;
    }

    wrapper.addEventListener('click', function (event) {
        if (!isMouseDown) {
            const rect = wrapper.getBoundingClientRect();
            const x = event.clientX - rect.left; // x position within the element
            if (x < rect.width / 2) {
                // Clicked on the left side, go to the previous image
                currentImageIndex = (currentImageIndex - 1 + imageDetails.length) % imageDetails.length;
            } else {
                // Clicked on the right side, go to the next image
                currentImageIndex = (currentImageIndex + 1) % imageDetails.length;
            }
            updateImage();
        }
    });

    wrapper.addEventListener('mousemove', function (event) {
        const rect = wrapper.getBoundingClientRect();
        const x = event.clientX - rect.left; // x position within the element
        if (x < rect.width / 2) {
            wrapper.style.cursor = 'w-resize';
        } else {
            wrapper.style.cursor = 'e-resize';
        }
    });

    wrapper.addEventListener('mousedown', function () {
        isMouseDown = true;
        stopSlideshow();
    });

    wrapper.addEventListener('mouseup', function () {
        isMouseDown = false;
        startSlideshow();
    });

    wrapper.addEventListener('mouseleave', function () {
        isMouseDown = false;
        startSlideshow();
    });

    updateImage();
    startSlideshow();
});







document.querySelectorAll('.info-section').forEach(section => {
    section.addEventListener('mouseenter', () => {
        document.querySelector('.info-wrapper').classList.add('hover-effect');
    });
    section.addEventListener('mouseleave', () => {
        document.querySelector('.info-wrapper').classList.remove('hover-effect');
    });
});


document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        // Get the project info from data attributes
        const num = item.getAttribute('data-num');
        const type = item.getAttribute('data-type');
        const year = item.getAttribute('data-year');
        const client = item.getAttribute('data-client');

        // Update the project info element with the data
        const projectInfoDiv = document.getElementById('project-info');
        projectInfoDiv.querySelector('#num-value').textContent = num; // Update NUM
        projectInfoDiv.querySelector('#type h1').textContent = type;
        projectInfoDiv.querySelector('#year h1').textContent = year;
        projectInfoDiv.querySelector('#client h1').textContent = client;

        // Show the project info div
        projectInfoDiv.style.display = 'grid';
    });

    item.addEventListener('mouseleave', function() {
        // Hide the project info div
        const projectInfoDiv = document.getElementById('project-info');
        projectInfoDiv.style.display = 'none';
    });
});

  

  