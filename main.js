


document.addEventListener("DOMContentLoaded", function() {
    
//     let container = document.createElement("div");
// container.style.height = "10vh";
// container.style.width = "10vw";
// container.style.padding = "45px";
// container.style.margin = "auto"
// container.classList.add("slick-carousel")
// document.body.appendChild(container)


document.body.style.backgroundColor = "black"
    
    
    let heading = document.createElement("h1");
    heading.textContent = "Valorant";
    heading.style.color = "tomato";
    heading.style.fontSize = "80px";
     heading.style.textAlign = "center";
     heading.style.fontFamily = "Valorant"
     document.body.prepend(heading);

     let div = document.createElement("div");
    
     div.style.display = "flex";
    div.style.justifyContent = "center";
     document.body.prepend(div);

     let agents = document.createElement('button');
     agents.textContent = "Agents";
     agents.style.padding = "20px"
     agents.style.height = "80px";
     agents.style.width = "150px";
     agents.style.marginRight = "50px";
     agents.style.fontFamily = "Valorant"
     agents.style.color = "tomato";
     agents.style.fontSize = "30px"
     div.appendChild(agents);
    $(agents).click(function() {
        $(".slick-carousel").toggle()
        $(agents).show();
        agentsSlider
    })

    let aContainer = document.createElement("div");
    aContainer.style.height = "10vh";
    aContainer.style.width = "10vw";
    aContainer.textContent = "This is the Agents Container"
    aContainer.style.padding = "45px";
    aContainer.style.margin = "auto"
    document.body.appendChild(aContainer);



     let maps = document.createElement('button');
     maps.textContent = "Maps";
     maps.style.padding = "20px"
     maps.style.height = "80px";
     maps.style.width = "150px";
     maps.style.marginRight = "50px";
     maps.style.fontFamily = "Valorant"
     maps.style.color = "tomato";
     maps.style.fontSize = "30px"
     div.appendChild(maps);
     $(maps).click(function() {
        $(".slick-carousel").hide();
        mapSlider
     })

    //  let mContainer = document.createElement("div");
    //  mContainer.style.height = "10vh";
    //  mContainer.style.width = "10vw";
    //  mContainer.textContent = "This is the Maps Container"
    //  mContainer.style.padding = "45px";
    //  mContainer.style.margin = "auto"
    //  document.body.appendChild(mContainer);

    //  let skins = document.createElement('button');
    //  skins.textContent = "Skins";
    //  skins.style.padding = "20px"
    //  skins.style.height = "80px";
    //  skins.style.width = "150px";
    //  skins.style.marginRight = "50px";
    //  skins.style.fontFamily = "fantasy"
    //  skins.style.color = "tomato";
    //  skins.style.fontSize = "30px"
    //  div.appendChild(skins)
    //  $(skins).click(function() {
    //     $(".slick-carousel").hide()
        
    //  })


   

    $(document).ready(function(){
        $('.slick-carousel').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        });
    });

    $(document).ready(function agentsSlider() {
        $('#valAgents').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
        });
    })

    
    $(document).ready(function mapSlider() {
        $('#maps').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
    })


});