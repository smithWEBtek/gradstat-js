$(function () {
	getCourseLog()
	// getNewCourseForm()
	getMyForm()
})

function getCourseLog() {
	$('a#course-log-link').on('click', function (event) {
		event.preventDefault()

		$.ajax({
			url: this.href,
			method: 'get',
			dataType: 'json'
		}).done(function (response) {

			$('div#course-log-data').html('')

			response.forEach(function (obj) {
				let course = new Course(obj)
				$('div#course-log-data').append(course.courseHTML())
			})

			// let myString  = JSON.stringify(response)
			// document.querySelector('div#course-log-data').innerHTML = JSON.stringify(response)
			//course-log-data

		})
	})
}


// obj = {id: 3, name: "Rails Static Request", time_spent: 44, completed: true, date: "2018-12-21", …}

class Course {
	constructor(obj) {
		this.name = obj.name
		this.time_spent = obj.time_spent
		this.completed = obj.completed
		this.date = obj.date
		this.student_id = obj.student_id
	}
}

Course.prototype.courseHTML = function () {
	return `<div>${this.name}</div>`
}

// function getNewCourseForm() {
// 	$('a#new-course-link').on('click', function (event) {
// 		event.preventDefault()
// 		$.ajax({
// 			url: this.href,
// 			method: 'get',
// 			dataType: 'html'
// 		}).done(function (response) {
// 			$('div#new-course-area').html(response)
// 		})
// 	})
// }

function getMyForm() {
	$('a#new-course-link').on('click', function (event) {
		event.preventDefault()
		$.ajax({
			url: '/myform',
			method: 'get',
			dataType: 'html'
		}).done(function (response) {
			$('div#new-course-area').html(response)
		})
	})
}