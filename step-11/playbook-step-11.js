const path = require('path');

module.exports = step("step-11")
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/card-list/card-list.playbook.mdx"))
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card-list/card-list.hbs", "frontend/src/components/card-list/card-list.feature")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card-list/card-list.bdd.hbs", "frontend/src/components/card-list/card-list.bdd.tsx")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card-list/card-list.stories.hbs", "frontend/src/components/card-list/card-list.stories.tsx")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card-list/card-list.component.hbs", "frontend/src/components/card-list/card-list.component.tsx")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card-list/card-list.styles.hbs", "frontend/src/components/card-list/card-list.styles.css")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCli()
						.withCommand("git checkout -b feature/frontend/card-list")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
