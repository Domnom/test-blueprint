module.exports = step("step-1")
				.addDescriptionFromMdFile(path.join(__dirname, "step-1/description/README.md"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-1/code/init-file.hbs", "init-file.txt")
				.withTime({
					"start" : 100,
					"duration" : 100
				})
