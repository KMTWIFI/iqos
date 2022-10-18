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
			minAge: 22,
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
	jQuery.extend(jQuery.validator.messages, {
		required: "هذه الخانة مطلوبه.",
		remote: "الرجاء تصحيح هذا المجال.",
		email: "رجاء قم بإدخال بريد الكتروني صحيح.",
		url: "أدخل رابط صحيح من فضلك.",
		date: "ارجوك ادخل تاريخ صحيح.",
		dateISO: "الرجاء إدخال تاريخ صالح (ISO).",
		number: "من فضلك أدخل رقما صالحا.",
		digits: "الرجاء إدخال أرقام فقط.",
		creditcard: "الرجاء إدخال رقم بطاقة ائتمان صالحة.",
		equalTo: "من فظلك ادخل نفس القيمة مرة أخرى.",
		accept: "الرجاء إدخال قيمة بامتداد صالح.",
		maxlength: jQuery.validator.format("الرجاء إدخال ما لا يزيد عن {0} حرف."),
		minlength: jQuery.validator.format("الرجاء إدخال {0} حرف على الأقل."),
		rangelength: jQuery.validator.format(
			"الرجاء إدخال قيمة يتراوح طولها بين {0} و {1} حرفًا."
		),
		letterMaxlength: jQuery.validator.format(
			"الرجاء إدخال ما لا يزيد عن {0} حرف."
		),
		range: jQuery.validator.format("الرجاء إدخال قيمة بين {0} و {1}."),
		max: jQuery.validator.format("الرجاء إدخال قيمة أقل من أو تساوي {0}."),
		min: jQuery.validator.format("الرجاء إدخال قيمة أكبر من أو تساوي {0}."),
	});

	$("#form_id").validate({
		rules: {
			birthday: {
				date: true,
			},
		},
		errorPlacement: function (error, element) {
			var invalidElement = $(element)
				.parents(".form-group")
				.find(".invalid-feedback");
			invalidElement.each(function () {
				$(this).html(error);
				$(this).show();
			});
			// invalidElement.html(error);
			// invalidElement.show();
		},
	});

	("use strict");
})();

$("#form_id").on("submit", function (event) {
	var birthDay = checkOnBirthDay(event);
	console.log($(this).valid());
	if ($(this).valid() && birthDay) {
		return;
	}
	event.preventDefault();
});

$("#birthday").change(function (event) {
	checkOnBirthDay(event);
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
