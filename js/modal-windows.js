	(function() {
	var loginShow = document.querySelector(".login");
    var loginPopup = document.querySelector(".login-popup");
    var closeLoginPopup = document.querySelector(".popup-close");

	var mapShow = document.querySelector(".open-modal-map");
    var map = document.querySelector(".modal-map");
    var closeMap = document.querySelector(".closing-map");
		
	if (map) {
			mapShow.addEventListener("click", function(event) {
				event.preventDefault();
				map.classList.add("modal-map-show");
			})

			closeMap.addEventListener("click", function(event) {
				event.preventDefault();
				map.classList.remove("modal-map-show");
			})

			window.addEventListener("keydown", function(event) {
				if (event.keyCode === 27) {
					if (map.classList.contains("modal-map-show")) {
						map.classList.remove("modal-map-show");
					}
				}
			});
		};
		
	if (loginPopup)	{
		loginShow.addEventListener("click", function(event) {
				event.preventDefault();
				loginPopup.classList.add("login-popup-show");
			})

			closeLoginPopup.addEventListener("click", function(event) {
				event.preventDefault();
				loginPopup.classList.remove("login-popup-show");
			})

			window.addEventListener("keydown", function(event) {
				if (event.keyCode === 27) {
					if (loginPopup.classList.contains("login-popup-show")) {
						loginPopup.classList.remove("login-popup-show");
						
					}
				}
			});
	};
	})();