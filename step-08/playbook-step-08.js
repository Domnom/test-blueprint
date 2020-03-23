const path = require('path');

module.exports = step("step-08")
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/card/card.playbook.mdx"))
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.bdd.hbs", "frontend/src/components/card/card.bdd.tsx")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.hbs", "frontend/src/components/card/card.feature")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.component.hbs", "frontend/src/components/card/card.component.tsx")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.stories.hbs", "frontend/src/components/card/card.stories.tsx")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.styles.hbs", "frontend/src/components/card/card.styles.css")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.template.hbs", "frontend/src/components/card/card.template.hbs")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.template.hbs", "frontend/src/components/card/card.template.json")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.template-wrapper.hbs", "frontend/src/components/card/card.template-wrapper.hbs")
					.withTime({
						"start" : 0,
						"duration" : 0
					})
					.addCode("/code/frontend/package.hbs", "frontend/package.json")
						.withPartial("partial_1", "step-08/code/frontend/package_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-08/code/frontend/package_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/frontend/jest.config.hbs", "frontend/jest.config.js")
						.withPartial("partial_1", "step-08/code/frontend/jest.config_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/tsconfig.hbs", "frontend/tsconfig.json")
						.withPartial("partial_1", "step-08/code/frontend/tsconfig_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCli()
						.withCommand("git checkout -b feature/frontend/test-setup")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
