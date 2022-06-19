// ##########################
//    Author : Aleksandr
// ##########################



$(document).ready(function(){

	//-------------------------------------------
	//	Описания функций




	let whoIsId1 = '#clientId';   //  первое сосотяние whoIs
	let whoIsId2 = '#businessId';	//	второе состояние whoIs
	let route1Class = '.route1';   //  блок, который видно при установленном whoIs
									//	в состояние whoIsId1
	let route2Class = '.route2';   //  блок, который видно при установленном whoIs
									//	в состояние whoIsId2
	$(route2Class).hide();			//	установка отображения по умолчанию
	let whoIsCurrent = whoIsId1;   //  defoult whoIs


    function whoIsSelect(whoIsNext = '#clientId'){

		whoIsCurrent = whoIsNext;

		if(whoIsNext === whoIsId1){
			$(route2Class).hide();
			$(route1Class).show();
        }else{
			$(route1Class).hide();
			$(route2Class).show();
		}
	
    }	//	whoIsSelect(whoIsNext = '#clientId'){





	function hideWarns(){

        $("#phoneId").removeClass("inputFieldWarn")
        $("#phoneWarn").fadeOut(400);

	}	//	hideWarns(){






	let slicePhoneId;

	function validPhone(phoneId = '#phoneId'){

		phoneId = $("#phoneId").val();


		if(phoneId.length == 0){

            $("#phoneId").addClass("inputFieldWarn");
			$('#phoneWarn').html('<div class="">Введите номер телефона. Он нужен для регистрации</div>');
			$("#phoneWarn").fadeIn(200);

		} else{

			if(phoneId[0] === "+"){

				slicePhoneId = phoneId.slice(1, phoneId.length);

				if(slicePhoneId.match(/\D/g)){
                    $("#phoneId").addClass("inputFieldWarn");
					$('#phoneWarn').html('<div class="">Номер телефона может содержать только цифры после знака "+"</div>');
					$("#phoneWarn").fadeIn(200);

				}else{

					let msgPart;

					switch (13 - phoneId.length) {
						case 0:
                            $("#phoneId").removeClass("inputFieldWarn")
							// $('#phoneWarn').html('<div class="bg-success">Номер введен в правильном формате.<br> Функция вернула True!</div>');
                            // $("#phoneWarn").fadeIn(200);
							return true;
							break;
						case 1:
							msgPart = "Допишите одну цифру";
							break;
						case 2:
							msgPart = "Допишите две цифры";
							break;
						case 3:
							msgPart = "Допишите три цифры";
							break;
						case 4:
							msgPart = "Допишите четыре цифры";
							break;
						case 5:
							msgPart = "Допишите пять цифр";
							break;
						case 6:
							msgPart = "Допишите шесть цифр";
							break;
						case 7:
							msgPart = "Допишите семь цифр";
							break;
						case 8:
							msgPart = "Допишите восемь цифр";
							break;
						case 9:
							msgPart = "Допишите девять цифр";
							break;
						case 10:
							msgPart = "Допишите десять цифр";
							break;
						case 11:
							msgPart = "Допишите одиннадцать цифр";
							break;
						case 12:
							msgPart = "Введите двенадцать цифр";
							break;
					}

                    $("#phoneId").addClass("inputFieldWarn");
                    $('#phoneWarn').html('<div class="">Номер введен не полностью. ' + msgPart + '</div>');
					$("#phoneWarn").fadeIn(200);

					return false;
				}	//	if(phoneId.match(/\D/g)){

			}else{
                $("#phoneId").addClass("inputFieldWarn");
                $('#phoneWarn').html('<div class="">Номер телефона должен начинаться со знака <b>"+"</b></div>');
				$("#phoneWarn").fadeIn(200);

			}	//	else{	if(phoneId[0] === "+"){
		}	// if(phoneId.length == 0){

	}	//	validPhone(){



	


	function goToSlide2(){

		$("#Slide1").fadeOut(400);
		
		setTimeout(function () {
			$("#Slide2").fadeIn(400);
		}, 404); 

		$("#img1").fadeOut(400);
		$("#img2").fadeIn(400);

	}	//function goToSlide2()






	let smsCodeValue;

	function validSmscode(id = '#smsCodeId', reqСharQuant = 4){

		smsCodeValue = $(id).val();

		if(smsCodeValue.length == reqСharQuant){
			$(id).removeClass("inputFieldWarn")
			return true;
		}else{
			$(id).addClass("inputFieldWarn");
			return false;
		}

	}	//	validSmscode(smsCode)






	function goToSlide3(){

		$("#Slide2").fadeOut(400);
		setTimeout(function () {
			$("#Slide3").fadeIn(400);
		}, 404); 
		
		$("#img2").fadeOut(400);
		$("#img3").fadeIn(400);
		
	}	//function goToSlide3()




	let fieldValue;

	function checkField(id, reqСharQuant = 1){

		fieldValue = $(id).val();

		console.log('id = ' + id);
		console.log('fieldValue = ' + fieldValue);
		
		if(fieldValue.length >= reqСharQuant){
			$(id).removeClass("inputFieldWarn")
			return true;
		}else{
			$(id).addClass("inputFieldWarn");
			return false;
		}

	}	//	checkField(id, reqСharQuant = 1){











	function goToSlide4(){

		$("#Slide3").fadeOut(400);
		setTimeout(function () {
			$("#Slide4").fadeIn(400);
		}, 404); 

		$("#img3").fadeOut(400);
		$("#img4").fadeIn(400);
		
	}	//function goToSlide4()
	


	function goToSlide5(){

		$("#Slide4").fadeOut(400);
		setTimeout(function () {
			$("#Slide5").fadeIn(400);
		}, 404);

		$("#img4").fadeOut(400);
		$("#img5").fadeIn(400);

	}	//function goToSlide5()

	

	function goToSlide6(){

		$("#Slide5").fadeOut(400);
		setTimeout(function () {
			$("#Slide6").fadeIn(400);
		}, 404); 

		$("#img5").fadeOut(400);
		$("#img6").fadeIn(400);

	}	//function goToSlide6()


			








	//-------------------------------------------
	//	Запуск функций








	$('#phoneId').keydown(function() {
		hideWarns();
	});





	$(whoIsId1).click(function(){
        whoIsSelect(whoIsId1);
	});
    $(whoIsId2).click(function(){
        whoIsSelect(whoIsId2);
	});




    
	let phoneId = '#phoneId';	//	id поля, которое нужно проверить

	$("#Button1").click(function(){
		if( validPhone(phoneId) ){
			// Заблокировать поле
			$(phoneId).prop('disabled', true);
			goToSlide2();
		}
    });




	


	$( "#phoneId" ).change(function() {
		validPhone();
	});




	

	let smsCodeId = '#smsCodeId';	//	id поля, которое нужно проверить
	let smsCharQuant = 5;	//	требуемое количество символов в поле "СМС-код"

	$("#Button2").click(function(){
		if( validSmscode(smsCodeId, smsCharQuant) ){
			// Заблокировать поле
			$(smsCodeId).prop('disabled', true);
			goToSlide3();
		}
    });











	let pointsToGo;

	$("#Button3").click(function(){

		let organisation;
		let firstNameId;
		let lastNameId;
		let emailId;

		pointsToGo = 0;

		if(whoIsCurrent === whoIsId1){

			firstNameId = "#firstNameC";
			lastNameId = "#lastNameC";
			emailId = "#emailC";


			if( checkField(firstNameId, 1)){pointsToGo = pointsToGo + 1}
			if( checkField(lastNameId, 1)){pointsToGo = pointsToGo + 1}
			if( checkField(emailId, 1)){pointsToGo = pointsToGo + 1}

			if( pointsToGo == 3 ){
				// Заблокировать поле
				$(firstNameId).prop('disabled', true);
				$(lastNameId).prop('disabled', true);
				$(emailId).prop('disabled', true);
				goToSlide4();
			}

        }else{

			firstNameId = "#firstNameB";
			lastNameId = "#lastNameB";
			emailId = "#emailB";
			organisation = "#organisation";

			if( checkField(firstNameId, 1)){pointsToGo = pointsToGo + 1}
			if( checkField(lastNameId, 1)){pointsToGo = pointsToGo + 1}
			if( checkField(emailId, 1)){pointsToGo = pointsToGo + 1}
			if( checkField(organisation, 1)){pointsToGo = pointsToGo + 1}
			
			console.log('pointsToGo = ' + pointsToGo);

			if( pointsToGo == 4 ){
				// Заблокировать поле
				$(firstNameId).prop('disabled', true);
				$(lastNameId).prop('disabled', true);
				$(emailId).prop('disabled', true);
				$(organisation).prop('disabled', true);
				goToSlide4();

			}
	
		}
		
	});




	let fieldId1;
	let fieldId2;

    $("#Button4").click(function(){


		pointsToGo = 0;

		if(whoIsCurrent === whoIsId1){
			fieldId1 = "#refCodeC";
			fieldId2 = "#promoCode";

			if( checkField(fieldId1, 1)){pointsToGo = pointsToGo + 1}
			if( checkField(fieldId2, 1)){pointsToGo = pointsToGo + 1}
			
			console.log('pointsToGo = ' + pointsToGo);
	
			if( pointsToGo == 2 ){
				// Заблокировать поле
				$(fieldId1).prop('disabled', true);
				$(fieldId2).prop('disabled', true);
				goToSlide5();
			}

        }else{
			fieldId1 = "#taxNumber";

			if( checkField(fieldId1, 1)){
				$(fieldId1).prop('disabled', true);
				goToSlide5();
			}

		}


	});



    $("#Button5").click(function(){

		pointsToGo = 0;

		fieldId1 = "#passId1";
		fieldId2 = "#passId2";
		
		if( checkField(fieldId1, 1)){pointsToGo = pointsToGo + 1}
		if( checkField(fieldId2, 1)){pointsToGo = pointsToGo + 1}
		
		// ####################################################
		//		нужно делать проверку (сравнивать пароли)
		// ####################################################

		if( pointsToGo == 2 ){
			// Заблокировать поле
			$(fieldId1).prop('disabled', true);
			$(fieldId2).prop('disabled', true);
			goToSlide6();
		}

	});












    $("#Button6").click(function(){
		window.location.href = '../';
	});











	$(".closeMsg").click(function(){$(".msg").hide();});
















// функции для этапа тестирования




	$("#BackToSlide1").click(function(){

		//$("#Slide2").hide('slide', {direction: 'left'}, 800);
		$("#Slide2").fadeOut(400);

		setTimeout(function () {
			//$("#Slide1").show('slide', {direction: 'left'}, 800);
			$("#Slide1").fadeIn(400);
		}, 404); 

		$("#img2").fadeOut(400);
		$("#img1").fadeIn(400);
		// alert('BackToSlide1');
    });

    $("#BackToSlide2").click(function(){

		//$('.mainArea').css('background-image','url("../../wp-content/images/aGirl.png")' );
		// alert('BackToSlide2');

		//$("#Slide3").hide('slide', {direction: 'left'}, 800);
		$("#Slide3").fadeOut(400);

		setTimeout(function () {
			//$("#Slide2").show('slide', {direction: 'left'}, 800);
			$("#Slide2").fadeIn(400);
		}, 404); 

		$("#img3").fadeOut(400);
		$("#img2").fadeIn(400);

	});
	
	$("#BackToSlide3").click(function(){

		//$('.mainArea').css('background-image','url("../../wp-content/images/aGirl3.png")' );
		//alert('BackToSlide3');

		//$("#Slide4").hide('slide', {direction: 'left'}, 800);
		$("#Slide4").fadeOut(400);

		setTimeout(function () {
			//$("#Slide3").show('slide', {direction: 'left'}, 800);
			$("#Slide3").fadeIn(400);
		}, 404); 

		$("#img4").fadeOut(400);
		$("#img3").fadeIn(400);

	});
	
	$("#BackToSlide4").click(function(){

		//$('.mainArea').css('background-image','url("../../wp-content/images/aGirl4.png")' );
		//alert('BackToSlide3');

		//$("#Slide5").hide('slide', {direction: 'left'}, 800);
		$("#Slide5").fadeOut(400);

		setTimeout(function () {
			//$("#Slide4").show('slide', {direction: 'left'}, 800);
			$("#Slide4").fadeIn(400);
		}, 404); 

		$("#img5").fadeOut(400);
		$("#img4").fadeIn(400);

	});

	$("#BackToSlide5").click(function(){

		//$('.mainArea').css('background-image','url("../../wp-content/images/aGirl5.png")' );
		//alert('BackToSlide3');

		//$("#Slide5").hide('slide', {direction: 'left'}, 800);
		$("#Slide6").fadeOut(400);

		setTimeout(function () {
			//$("#Slide4").show('slide', {direction: 'left'}, 800);
			$("#Slide5").fadeIn(400);
		}, 404); 

		$("#img6").fadeOut(400);
		$("#img5").fadeIn(400);

	});















});



