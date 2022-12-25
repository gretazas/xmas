// Change @media screens max-width 825px

function handleTabletChange(mediaQuery) {

    if (mediaQuery.matches) {
        document.getElementById('responsive').innerHTML = `
                <div class="col-5 card-body m-5">
                    <div class="row ">
                        <img src="/media/girls_art.jpg" alt="Flowers" style="width:200p;">
                    </div>
                    
                    <div class="row">
                        <img src="/media/abigaile.jpg" alt="Flowers">
                    </div>
                    
                    <div class="row">  
                        <img src="/media/laura-christmas.jpg" alt="Flowers">
                    </div>

                    <div class="row"> 
                        <img src="/media/laura.jpg" alt="Flowers">
                    </div>
                </div>
       `
    }
}

let mediaQuery = window.matchMedia('(max-width: 825px)');
handleTabletChange(mediaQuery);
mediaQuery.addEventListener("change", () => {
    this.handleTabletChange();
});

// Change @media screens max-width 438px

function handleTabletChange(mediaQuery1) {

    if (mediaQuery1.matches) {
        document.getElementById('responsive').innerHTML = `
                <div class="col-4 card-body m-5">
                    <div class="row">
                        <img src="/media/girls_art.jpg" alt="Flowers">
                    </div>
                    
                    <div class="row">
                        <img src="/media/abigaile.jpg" alt="Flowers">
                    </div>
                    
                    <div class="row">  
                        <img src="/media/laura-christmas.jpg" alt="Flowers">
                    </div>

                    <div class="row"> 
                        <img src="/media/laura.jpg" alt="Flowers">
                    </div>
                </div>
       `
    }
}

let mediaQuery1 = window.matchMedia('(max-width: 438px)');
handleTabletChange(mediaQuery1);
mediaQuery1.addEventListener("change", () => {
    this.handleTabletChange();
});