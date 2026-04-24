document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");


  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialDate: "2020-09-12",
    initialView: "timeGridWeek",
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
    },
    height: "auto",
    navLinks: false,
    editable: true,
    selectable: true,
    selectMirror: true,
    nowIndicator: true,
    events: [
      {
        id: 1,
        title: "Carla Packard",
        subTitle: "Ux Designer",
        image: "../assets/images/avtar/3.jpg",
        hours: 0o6,
        task: 0o2,
        classNames: ["common-style", "bg-primary-light"],
        start: "2020-09-06T00:00:00",
      },
      {
        id: 2,
        title: "Wade Warren",
        subTitle: "Ux Designer",
        image: "../assets/images/avtar/4.jpg",
        hours: 0o4,
        task: 0o3,
        classNames: ["common-style", "bg-secondary-light"],
        start: "2020-09-08T01:00:00",
      },
      {
        id: 3,
        title: "Andrew Black",
        subTitle: "Web designer",
        image: "../assets/images/avtar/7.jpg",
        hours: 0o7,
        task: 0o6,
        classNames: ["common-style", "success-light"],
        start: "2020-09-06T02:00:00",
      },
      {
        id: 4,
        title: "Wade Warren",
        subTitle: "Web designer",
        image: "../assets/images/avtar/7.jpg",
        hours: 0o2,
        task: 0o4,
        classNames: ["common-style", "bg-secondary-light"],
        start: "2020-09-08T03:00:00",
      },
      {
        id: 5,
        title: "Carla Packard",
        subTitle: "Web designer",
        image: "../assets/images/avtar/7.jpg",
        hours: 0o6,
        task: 0o5,
        classNames: ["common-style", "bg-primary-light"],
        start: "2020-09-11T00:00:00",
      },
      {
        id: 6,
        title: "Andrew Black",
        subTitle: "Web designer",
        image: "../assets/images/avtar/7.jpg",
        hours: 0o3,
        task: 0o2,
        classNames: ["common-style", "success-light"],
        start: "2020-09-11T02:00:00",
      },
    ],
  });

  calendar.render();
});
