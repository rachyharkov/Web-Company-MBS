function initiateSlickforWrapper()
{
	$('.card-slider-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
				slidesToScroll: 1
			}
            }
        ]
    });
}

function destroySlick()
{
	if ($('.card-slider-wrapper').hasClass('slick-initialized')) 
	{
		$('.card-slider-wrapper').slick('destroy');
		} 
}

document.addEventListener("DOMContentLoaded", function()
{		
	var page = window.location.hash.substr(1);
	if(page == "")
	{
		page = "home";
	}

	loadPage(page);

	function loadPage(page)
	{
		var xhttp = new XMLHttpRequest();

		xhttp.onloadstart = function () 
        {
			var loadingnya = document.getElementById("loading-ajax");
			loadingnya.style.display = "block";
        }

		xhttp.onreadystatechange = function()
		{
			if(this.readyState == 4)
			{
				var content = document.getElementById("content");
				var loadingnya = document.getElementById("loading-ajax");
				if(this.status == 200)
				{
					content.innerHTML = xhttp.responseText;
					destroySlick();		
					initiateSlickforWrapper();
				}
				else if(this.status == 404)
				{
					content.innerHTML = "<p style='height: 100%; width: 100%; text-align: center; padding-top: 250px;'>Halaman yang anda cari tidak ditemukan :(</p>";
					loding.set(100);
					loadingnya.id = "loading-ajax-end";
				}
				else
				{
					content.innerHTML = "<p style='height: 100%; width: 100%; text-align: center; padding-top: 250px;'>Ups.. Halaman yang anda inginkan tidak dapat diakses! :(</p>";
					loding.set(100);
					loadingnya.id = "loading-ajax-end";
				}
			}
		};
		xhttp.open("GET", "pages/" + page + ".html", true);
		xhttp.send();
	}

});

window.addEventListener("load", function(){
	var loadingnya = document.getElementById("loading-ajax");
	setTimeout(function(){
		loadingnya.id = "loading-ajax-end";
	},1000);
	console.log('loaded');
});