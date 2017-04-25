window.addEventListener("load", function () {

	////////////////////////////////////////////////////////////////////////////
	//// элементы формы ////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////////////////////////
	//// AJAX (комментарии к слайд-шоу) ////////////////////////////////////////

	////////////////////////////////////////////////////////////////////////////
	//// AJAX (copyleft) ///////////////////////////////////////////////////////


	////////////////////////////////////////////////////////////////////////////////
	//////// выбор картинки по комментариям выпадающего списка (пример) ////////////
	////////////////////////////////////////////////////////////////////////////////


	if (location.protocol.trim().search(/file[ ]*:*/gi) !== 0) {

		var dropList = document.querySelectorAll("#img_ddlist select")[0];
		var imgDiv = dropList.previousElementSibling;

		var imgForDropList = document.createElement("img");
		imgDiv.appendChild(imgForDropList);

		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function () {

			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

				dropList.innerHTML = xmlhttp.responseText;
				dropList.addEventListener("change", function (ev) {
					imgForDropList.src = "img/" + ev.target.value;
				}, false);

				// удалить текстовый узел с надписью "not from web server"
				imgDiv.removeChild(imgDiv.firstChild);
				// стартовая картинка по умолчанию после первой загрузки
				imgForDropList.src = "img/" + dropList.children[0].value;

			}
		};

		xmlhttp.open("GET", "droplist.php", true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.send();
	} else {
		console.error("ресурс открыт в локальной файловой системе");
	}

}, false);
