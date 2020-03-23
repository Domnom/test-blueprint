const path = require('path');

module.exports = step("step-09")
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/card/card.playbook.mdx"))
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/card/card.playbook.mdx"))
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.bdd.hbs", "frontend/src/components/card/card.bdd.tsx")
						.withPartial("partial_1", "step-09/code/frontend/src/components/card/card.bdd_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.component.hbs", "frontend/src/components/card/card.component.tsx")
						.withPartial("partial_1", "step-09/code/frontend/src/components/card/card.component_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-09/code/frontend/src/components/card/card.component_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-09/code/frontend/src/components/card/card.component_partials/partial_3.hbs", 200, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.stories.hbs", "frontend/src/components/card/card.stories.tsx")
						.withPartial("partial_1", "step-09/code/frontend/src/components/card/card.stories_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-09/code/frontend/src/components/card/card.stories_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-09/code/frontend/src/components/card/card.stories_partials/partial_3.hbs", 200, 100)
					.withTime({
						"start" : 100,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.template.hbs", "frontend/src/components/card/card.template.hbs")
						.withPartial("partial_1", "step-09/code/frontend/src/components/card/card.template_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-09/code/frontend/src/components/card/card.template_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-09/code/frontend/src/components/card/card.template_partials/partial_3.hbs", 200, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.template-wrapper.hbs", "frontend/src/components/card/card.template-wrapper.hbs")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.test.hbs", "frontend/src/components/card/card.test.tsx")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/package.hbs", "frontend/package.json")
						.withPartial("partial_1", "step-09/code/frontend/package_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/frontend/src/common/utils/test-helpers.hbs", "frontend/src/common/utils/test-helpers.ts")
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
