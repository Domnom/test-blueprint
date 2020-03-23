const path = require('path');

module.exports = step("step-15")
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/card-list/card-list.playbook.mdx"))
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/frontend/package.hbs", "frontend/package.json")
						.withPartial("partial_1", "step-15/code/frontend/package_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-15/code/frontend/package_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/frontend/yarn.hbs", "frontend/yarn.lock")
						.withPartial("partial_1", "step-15/code/frontend/yarn_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-15/code/frontend/yarn_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-15/code/frontend/yarn_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-15/code/frontend/yarn_partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-15/code/frontend/yarn_partials/partial_5.hbs", 400, 100)
						.withPartial("partial_6", "step-15/code/frontend/yarn_partials/partial_6.hbs", 500, 100)
						.withPartial("partial_7", "step-15/code/frontend/yarn_partials/partial_7.hbs", 600, 100)
						.withPartial("partial_8", "step-15/code/frontend/yarn_partials/partial_8.hbs", 700, 100)
						.withPartial("partial_9", "step-15/code/frontend/yarn_partials/partial_9.hbs", 800, 100)
						.withPartial("partial_10", "step-15/code/frontend/yarn_partials/partial_10.hbs", 900, 100)
						.withPartial("partial_11", "step-15/code/frontend/yarn_partials/partial_11.hbs", 1000, 100)
						.withPartial("partial_12", "step-15/code/frontend/yarn_partials/partial_12.hbs", 1100, 100)
						.withPartial("partial_13", "step-15/code/frontend/yarn_partials/partial_13.hbs", 1200, 100)
						.withPartial("partial_14", "step-15/code/frontend/yarn_partials/partial_14.hbs", 1300, 100)
						.withPartial("partial_15", "step-15/code/frontend/yarn_partials/partial_15.hbs", 1400, 100)
						.withPartial("partial_16", "step-15/code/frontend/yarn_partials/partial_16.hbs", 1500, 100)
						.withPartial("partial_17", "step-15/code/frontend/yarn_partials/partial_17.hbs", 1600, 100)
						.withPartial("partial_18", "step-15/code/frontend/yarn_partials/partial_18.hbs", 1700, 100)
					.withTime({
						"start" : 200,
						"duration" : 16600
					})
					.addCode("/code/frontend/src/components/card-list/card-list.component.hbs", "frontend/src/components/card-list/card-list.component.tsx")
						.withPartial("partial_1", "step-15/code/frontend/src/components/card-list/card-list.component_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-15/code/frontend/src/components/card-list/card-list.component_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-15/code/frontend/src/components/card-list/card-list.component_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-15/code/frontend/src/components/card-list/card-list.component_partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-15/code/frontend/src/components/card-list/card-list.component_partials/partial_5.hbs", 400, 100)
						.withPartial("partial_6", "step-15/code/frontend/src/components/card-list/card-list.component_partials/partial_6.hbs", 500, 100)
						.withPartial("partial_7", "step-15/code/frontend/src/components/card-list/card-list.component_partials/partial_7.hbs", 600, 100)
						.withPartial("partial_8", "step-15/code/frontend/src/components/card-list/card-list.component_partials/partial_8.hbs", 700, 100)
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/frontend/src/components/card-list/card-list.bdd.hbs", "frontend/src/components/card-list/card-list.bdd.tsx")
						.withPartial("partial_1", "step-15/code/frontend/src/components/card-list/card-list.bdd_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-15/code/frontend/src/components/card-list/card-list.bdd_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card-list/card-list.test.hbs", "frontend/src/components/card-list/card-list.test.tsx")
						.withPartial("partial_1", "step-15/code/frontend/src/components/card-list/card-list.test_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-15/code/frontend/src/components/card-list/card-list.test_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-15/code/frontend/src/components/card-list/card-list.test_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-15/code/frontend/src/components/card-list/card-list.test_partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-15/code/frontend/src/components/card-list/card-list.test_partials/partial_5.hbs", 400, 100)
						.withPartial("partial_6", "step-15/code/frontend/src/components/card-list/card-list.test_partials/partial_6.hbs", 500, 100)
						.withPartial("partial_7", "step-15/code/frontend/src/components/card-list/card-list.test_partials/partial_7.hbs", 600, 100)
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/frontend/src/components/card-list/card-list.styles.hbs", "frontend/src/components/card-list/card-list.styles.css")
						.withPartial("partial_1", "step-15/code/frontend/src/components/card-list/card-list.styles_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card-list/card-list.stories.hbs", "frontend/src/components/card-list/card-list.stories.tsx")
						.withPartial("partial_1", "step-15/code/frontend/src/components/card-list/card-list.stories_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-15/code/frontend/src/components/card-list/card-list.stories_partials/partial_2.hbs", 100, 100)
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
