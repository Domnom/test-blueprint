const path = require('path');

module.exports = step("trailing-commits")
					.addCode("trailing-commits/code/temporary.hbs", "temporary.txt")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("trailing-commits/code/temporary.hbs", "temporary.txt")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCli()
						.withCommand("This is a file that contains unimportant information. This text should be the body of the commit")
						.withCommand("And this is the 3rd paragraph")
						.withCommand("This is the fourth
")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCli()
						.withCommand("I updated the temp file with even more info
")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
