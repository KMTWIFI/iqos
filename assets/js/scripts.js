$(function () {
	// const date = $("#date");
	// if (date) {
	//    date.datepicker({
	//       dateFormat: "dd-mm-yy",
	//       duration: "fast",
	//    });
	// }
	const birthDate = $(".birthdate.ar");
	if (birthDate.length) {
		birthDate.bootstrapBirthday({
			minAge: 21,
			widget: {
				wrapper: {
					tag: "div",
					class: "row",
				},
				wrapperYear: {
					use: true,
					tag: "span",
					class: "col",
				},
				wrapperMonth: {
					use: true,
					tag: "span",
					class: "col",
				},
				wrapperDay: {
					use: true,
					tag: "span",
					class: "col",
				},
				selectYear: {
					name: "birthday[year]",
					class: "form-control input-sm",
				},
				selectMonth: {
					name: "birthday[month]",
					class: "form-control input-sm",
				},
				selectDay: {
					name: "birthday[day]",
					class: "form-control input-sm",
				},
			},
			text: {
				dateFormat: "littleEndian",
				year: "سنة",
				month: "شهر",
				day: "يوم",
				months: {
					short: [
						"يناير",
						"فبراير",
						"مارس",
						"ابريل",
						"مايو",
						"يونيو",
						"يوليو",
						"اغسطس",
						"سبتمبر",
						"اكتوبر",
						"نوفمبر",
						"ديسمبر",
					],
					long: [
						"يناير",
						"فبراير",
						"مارس",
						"ابريل",
						"مايو",
						"يونيو",
						"يوليو",
						"اغسطس",
						"سبتمبر",
						"اكتوبر",
						"نوفمبر",
						"ديسمبر",
					],
				},
			},
		});
	}

	const customRadio = $(".custom__radio input[name='age']");
	const form = $(".form__btn");
	const btnLink = $(".btn__link");
	if (customRadio) {
		customRadio.on("change", function () {
			if ($(this).val() === "up-21") {
				form.fadeIn();
				btnLink.fadeOut();
			} else {
				btnLink.fadeIn();
				form.fadeOut();
			}
		});
	}
});

(function () {
	// $.validator.addMethod("customphone", function (value, element) {
	// 	return this.optional(element) || /^01[0125][0-9]{8}$/.test(value);
	// });

	$("#form_id").validate({
		rules: {
			birthday: {
				date: true,
			},
			name: "required",
			mobile: "required",
			privacy: "required",
		},
		errorPlacement: function (error, element) {
			var invalidElement = $(element)
				.parents(".form-group")
				.find(".invalid-feedback");
			invalidElement.each(function () {
				$(this).html(error);
				$(this).show();
			});
		},
	});

	("use strict");
})();

$("#form_id").on("submit", function (event) {
	const birthDay = checkOnBirthDay(event);
	const name = checkOnName(event);
	const mobile = checkOnMobile(event);

	if ($(this).valid() && birthDay && name && mobile) {
		return;
	}
	event.preventDefault();
});

$("#birthday").change(function (event) {
	checkOnBirthDay(event);
});
$("#name").change(function (event) {
	checkOnName(event);
});
$("#mobile").change(function (event) {
	checkOnMobile(event);
});

function checkOnBirthDay(event) {
	let birthday = $("[name=birthday]").val();

	if ($("[name=birthday]").length > 0) {
		if (birthday == null || birthday == "") {
			$("select").css("border-color", "#dc3545");
			$(".invalid-feedback").show();
			return false;
		} else {
			$("select").css("border-color", "green");
			$(".invalid-feedback").hide();

			return true;
		}
	}
	return true;
}

function checkOnName(event) {
	let nameInput = $("[name=name]").val();
	if ($("[name=name]").length > 0) {
		if (nameInput.length === 0) {
			$("[name=name]").css("border-color", "#dc3545");
			$("[name=name]").next().show();
			return false;
		} else {
			$("[name=name]").css("border-color", "green");
			$("[name=name]").next().hide();

			return true;
		}
	}
	return true;
}

function checkOnMobile(event) {
	let mobileInput = $("[name=mobile]").val();

	if ($("[name=mobile]").length > 0) {
		if (mobileInput.length === 0 || !mobileInput.match(/^01[0125][0-9]{8}$/)) {
			$("[name=mobile]").css("border-color", "#dc3545");
			$("[name=mobile]").next().show();
			return false;
		} else {
			$("[name=mobile]").css("border-color", "green");
			$("[name=mobile]").next().hide();

			return true;
		}
	}
	return true;
}
