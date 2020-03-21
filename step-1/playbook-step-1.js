const path = require('path');

module.exports = step("step-1")
					.addDescriptionFromMdFile(path.join(__dirname, "/description/README.md"))
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/init-file.hbs", "init-file.txt")
					.withTime({
						"start" : 100,
						"duration" : 100
					})
