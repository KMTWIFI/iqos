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
