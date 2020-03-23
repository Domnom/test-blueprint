const path = require('path');

module.exports = step("step-01")
					.addDescriptionFromMdFile(path.join(__dirname, "/description/ProjectPlan.mdx"))
					.withTime({
						"start" : 100,
						"duration" : 400
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/readme.md"))
					.withTime({
						"start" : 700,
						"duration" : 400
					})
					.addCode("/code/.gitignore.hbs", ".gitignore")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/package-lock.hbs", "package-lock.json")
					.withTime({
						"start" : 500,
						"duration" : 100
					})
					.addCode("/code/package.hbs", "package.json")
					.withTime({
						"start" : 600,
						"duration" : 100
					})
					.addCode("/code/setup/cd.hbs", "setup/cd.sh")
					.withTime({
						"start" : 1100,
						"duration" : 100
					})
					.addCode("/code/setup/commitzen.hbs", "setup/commitzen.sh")
					.withTime({
						"start" : 1200,
						"duration" : 100
					})
					.addCode("/code/setup/storybook.hbs", "setup/storybook.sh")
					.withTime({
						"start" : 1300,
						"duration" : 200
					})
					.addCode("/code/setup/text.hbs", "setup/text.txt")
					.withTime({
						"start" : 1500,
						"duration" : 100
					})
