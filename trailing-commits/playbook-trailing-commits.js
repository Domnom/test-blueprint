const path = require('path');

module.exports = step("trailing-commits")
					.addCode("trailing-commits/code/account.hbs", "account.php")
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("trailing-commits/code/book_car.hbs", "book_car.php")
					.withTime({
						"start" : 200,
						"duration" : 200
					})
					.addCode("trailing-commits/code/header.hbs", "header.php")
					.withTime({
						"start" : 400,
						"duration" : 100
					})
					.addCode("trailing-commits/code/index.hbs", "index.php")
					.withTime({
						"start" : 500,
						"duration" : 200
					})
					.addCode("trailing-commits/code/login.hbs", "login.php")
					.withTime({
						"start" : 700,
						"duration" : 200
					})
					.addCode("trailing-commits/code/message_admin.hbs", "message_admin.php")
					.withTime({
						"start" : 900,
						"duration" : 200
					})
					.addCode("trailing-commits/code/pay.hbs", "pay.php")
					.withTime({
						"start" : 1100,
						"duration" : 200
					})
					.addCode("trailing-commits/code/signup.hbs", "signup.php")
					.withTime({
						"start" : 1300,
						"duration" : 300
					})
					.addCode("trailing-commits/code/status.hbs", "status.php")
					.withTime({
						"start" : 1600,
						"duration" : 200
					})
					.addCode("trailing-commits/code/success.hbs", "success.php")
					.withTime({
						"start" : 1800,
						"duration" : 100
					})
					.addCode("trailing-commits/code/wait.hbs", "wait.php")
					.withTime({
						"start" : 1900,
						"duration" : 200
					})
					.addCode("trailing-commits/code/css/main.hbs", "css/main.css")
					.withTime({
						"start" : 0,
						"duration" : 500
					})
					.addCode("trailing-commits/code/css/reset.hbs", "css/reset.css")
					.withTime({
						"start" : 500,
						"duration" : 100
					})
					.addCode("trailing-commits/code/css/responsive.hbs", "css/responsive.css")
					.withTime({
						"start" : 600,
						"duration" : 700
					})
					.addCode("trailing-commits/code/fonts/lato-bold.hbs", "fonts/lato-bold.eot")
					.withTime({
						"start" : 1300,
						"duration" : 1000
					})
					.addCode("trailing-commits/code/fonts/lato-bold.hbs", "fonts/lato-bold.svg")
					.withTime({
						"start" : 2300,
						"duration" : 8400
					})
					.addCode("trailing-commits/code/fonts/lato-bold.hbs", "fonts/lato-bold.ttf")
					.withTime({
						"start" : 10700,
						"duration" : 2000
					})
					.addCode("trailing-commits/code/fonts/lato-bold.hbs", "fonts/lato-bold.woff")
					.withTime({
						"start" : 12700,
						"duration" : 1100
					})
					.addCode("trailing-commits/code/fonts/lato-regular.hbs", "fonts/lato-regular.eot")
					.withTime({
						"start" : 13800,
						"duration" : 900
					})
					.addCode("trailing-commits/code/fonts/lato-regular.hbs", "fonts/lato-regular.svg")
					.withTime({
						"start" : 14700,
						"duration" : 8000
					})
					.addCode("trailing-commits/code/fonts/lato-regular.hbs", "fonts/lato-regular.ttf")
					.withTime({
						"start" : 22700,
						"duration" : 1900
					})
					.addCode("trailing-commits/code/fonts/lato-regular.hbs", "fonts/lato-regular.woff")
					.withTime({
						"start" : 24600,
						"duration" : 1100
					})
					.addCode("trailing-commits/code/fonts/p22_corinthia.hbs", "fonts/p22_corinthia.eot")
					.withTime({
						"start" : 25700,
						"duration" : 1200
					})
					.addCode("trailing-commits/code/fonts/p22_corinthia.hbs", "fonts/p22_corinthia.svg")
					.withTime({
						"start" : 26900,
						"duration" : 3700
					})
					.addCode("trailing-commits/code/fonts/p22_corinthia.hbs", "fonts/p22_corinthia.ttf")
					.withTime({
						"start" : 30600,
						"duration" : 2400
					})
					.addCode("trailing-commits/code/fonts/p22_corinthia.hbs", "fonts/p22_corinthia.woff")
					.withTime({
						"start" : 33000,
						"duration" : 1300
					})
					.addCode("trailing-commits/code/img/advanced_search_active.hbs", "img/advanced_search_active.png")
					.withTime({
						"start" : 34300,
						"duration" : 100
					})
					.addCode("trailing-commits/code/img/advanced_search_hover.hbs", "img/advanced_search_hover.png")
					.withTime({
						"start" : 34400,
						"duration" : 100
					})
					.addCode("trailing-commits/code/img/advanced_search_inactive.hbs", "img/advanced_search_inactive.png")
					.withTime({
						"start" : 34500,
						"duration" : 100
					})
					.addCode("trailing-commits/code/img/bg.hbs", "img/bg.jpg")
					.withTime({
						"start" : 34600,
						"duration" : 13400
					})
					.addCode("trailing-commits/code/img/calendar_icon.hbs", "img/calendar_icon.png")
					.withTime({
						"start" : 48000,
						"duration" : 100
					})
					.addCode("trailing-commits/code/img/close_menu_icon.hbs", "img/close_menu_icon.png")
					.withTime({
						"start" : 48100,
						"duration" : 100
					})
					.addCode("trailing-commits/code/img/hamburger_icon.hbs", "img/hamburger_icon.png")
					.withTime({
						"start" : 48200,
						"duration" : 100
					})
					.addCode("trailing-commits/code/img/hero.hbs", "img/hero.jpg")
					.withTime({
						"start" : 48300,
						"duration" : 11500
					})
					.addCode("trailing-commits/code/img/hero_small.hbs", "img/hero_small.jpg")
					.withTime({
						"start" : 59800,
						"duration" : 5600
					})
					.addCode("trailing-commits/code/img/logo.hbs", "img/logo.png")
					.withTime({
						"start" : 65400,
						"duration" : 100
					})
					.addCode("trailing-commits/code/img/property_1.hbs", "img/property_1.jpg")
					.withTime({
						"start" : 65500,
						"duration" : 900
					})
					.addCode("trailing-commits/code/img/property_2.hbs", "img/property_2.jpg")
					.withTime({
						"start" : 66400,
						"duration" : 1100
					})
					.addCode("trailing-commits/code/img/property_3.hbs", "img/property_3.jpg")
					.withTime({
						"start" : 67500,
						"duration" : 1500
					})
					.addCode("trailing-commits/code/img/search_arrow.hbs", "img/search_arrow.png")
					.withTime({
						"start" : 69000,
						"duration" : 100
					})
					.addCode("trailing-commits/code/img/social_media.hbs", "img/social_media.png")
					.withTime({
						"start" : 69100,
						"duration" : 100
					})
					.addCode("trailing-commits/code/js/jquery.hbs", "js/jquery.js")
					.withTime({
						"start" : 69200,
						"duration" : 3300
					})
					.addCode("trailing-commits/code/js/main.hbs", "js/main.js")
					.withTime({
						"start" : 72500,
						"duration" : 100
					})
					.addCode("trailing-commits/code/db/cars.hbs", "db/cars.sql")
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("trailing-commits/code/cars/car1.hbs", "cars/car1.jpg")
					.withTime({
						"start" : 0,
						"duration" : 19800
					})
					.addCode("trailing-commits/code/cars/car2.hbs", "cars/car2.jpg")
					.withTime({
						"start" : 19800,
						"duration" : 400
					})
					.addCode("trailing-commits/code/cars/car3.hbs", "cars/car3.jpg")
					.withTime({
						"start" : 20200,
						"duration" : 13400
					})
					.addCode("trailing-commits/code/cars/images (2).hbs", "cars/images (2).jpg")
					.withTime({
						"start" : 33600,
						"duration" : 300
					})
					.addCode("trailing-commits/code/cars/images (3).hbs", "cars/images (3).jpg")
					.withTime({
						"start" : 33900,
						"duration" : 300
					})
					.addCode("trailing-commits/code/cars/job.hbs", "cars/job.jpeg")
					.withTime({
						"start" : 34200,
						"duration" : 900
					})
					.addCode("trailing-commits/code/cars/sonkort2.hbs", "cars/sonkort2.png")
					.withTime({
						"start" : 35100,
						"duration" : 27800
					})
					.addCode("trailing-commits/code/cars/sonkortgold.hbs", "cars/sonkortgold.jpg")
					.withTime({
						"start" : 62900,
						"duration" : 1900
					})
					.addCode("trailing-commits/code/includes/config.hbs", "includes/config.php")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("trailing-commits/code/admin/add_cars.hbs", "admin/add_cars.php")
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("trailing-commits/code/admin/add_vehicles.hbs", "admin/add_vehicles.php")
					.withTime({
						"start" : 200,
						"duration" : 200
					})
					.addCode("trailing-commits/code/admin/approve.hbs", "admin/approve.php")
					.withTime({
						"start" : 400,
						"duration" : 100
					})
					.addCode("trailing-commits/code/admin/client_requests.hbs", "admin/client_requests.php")
					.withTime({
						"start" : 500,
						"duration" : 200
					})
					.addCode("trailing-commits/code/admin/delete.hbs", "admin/delete.php")
					.withTime({
						"start" : 700,
						"duration" : 100
					})
					.addCode("trailing-commits/code/admin/css/images/add-button.hbs", "admin/css/images/add-button.gif")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("trailing-commits/code/admin/css/images/button.hbs", "admin/css/images/button.gif")
					.withTime({
						"start" : 100,
						"duration" : 100
					})
					.addCode("trailing-commits/code/admin/css/images/close.hbs", "admin/css/images/close.gif")
					.withTime({
						"start" : 200,
						"duration" : 100
					})
					.addCode("trailing-commits/code/admin/css/images/del.hbs", "admin/css/images/del.gif")
					.withTime({
						"start" : 300,
						"duration" : 100
					})
					.addCode("trailing-commits/code/admin/css/images/edit.hbs", "admin/css/images/edit.gif")
					.withTime({
						"start" : 400,
						"duration" : 100
					})
					.addCode("trailing-commits/code/admin/css/images/footer.hbs", "admin/css/images/footer.gif")
					.withTime({
						"start" : 500,
						"duration" : 100
					})
					.addCode("trailing-commits/code/admin/css/images/header.hbs", "admin/css/images/header.gif")
					.withTime({
						"start" : 600,
						"duration" : 100
					})
					.addCode("trailing-commits/code/admin/css/images/msg-error.hbs", "admin/css/images/msg-error.gif")
					.withTime({
						"start" : 700,
						"duration" : 100
					})
					.addCode("trailing-commits/code/admin/css/images/msg-ok.hbs", "admin/css/images/msg-ok.gif")
					.withTime({
						"start" : 800,
						"duration" : 100
					})
					.addCode("trailing-commits/code/admin/css/images/pagging.hbs", "admin/css/images/pagging.gif")
					.withTime({
						"start" : 900,
						"duration" : 100
					})
					.addCode("trailing-commits/code/admin/css/images/tab.hbs", "admin/css/images/tab.gif")
					.withTime({
						"start" : 1000,
						"duration" : 100
					})
					.addCode("trailing-commits/code/admin/css/images/th.hbs", "admin/css/images/th.gif")
					.withTime({
						"start" : 1100,
						"duration" : 100
					})
					.addCode("trailing-commits/code/admin/css/style.hbs", "admin/css/style.css")
					.withTime({
						"start" : 1200,
						"duration" : 300
					})
					.addCode("trailing-commits/code/admin/delete_car.hbs", "admin/delete_car.php")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("trailing-commits/code/admin/delete_msg.hbs", "admin/delete_msg.php")
					.withTime({
						"start" : 100,
						"duration" : 100
					})
					.addCode("trailing-commits/code/admin/index.hbs", "admin/index.php")
					.withTime({
						"start" : 200,
						"duration" : 200
					})
					.addCode("trailing-commits/code/admin/indexx.hbs", "admin/indexx.php")
					.withTime({
						"start" : 400,
						"duration" : 200
					})
					.addCode("trailing-commits/code/admin/logout.hbs", "admin/logout.php")
					.withTime({
						"start" : 600,
						"duration" : 100
					})
					.addCode("trailing-commits/code/admin/menu.hbs", "admin/menu.php")
					.withTime({
						"start" : 700,
						"duration" : 100
					})
					.addCode("trailing-commits/code/includes/config.hbs", "includes/config.php")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
