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
   var birthDay = checkOnBirthDay(event);

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
   let nameInput = $("[name=name]").val();
   let mobileInput = $("[name=mobile]").val();
   let privacyInput = $("[name=privacy]").val();
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
