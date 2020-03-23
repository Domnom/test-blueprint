const path = require('path');

module.exports = step("step-24")
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/card-list/card-list.playbook.mdx"))
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card-list/card-list.stories.hbs", "frontend/src/components/card-list/card-list.stories.tsx")
						.withPartial("partial_1", "step-24/code/frontend/src/components/card-list/card-list.stories_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-24/code/frontend/src/components/card-list/card-list.stories_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-24/code/frontend/src/components/card-list/card-list.stories_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-24/code/frontend/src/components/card-list/card-list.stories_partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-24/code/frontend/src/components/card-list/card-list.stories_partials/partial_5.hbs", 400, 100)
						.withPartial("partial_6", "step-24/code/frontend/src/components/card-list/card-list.stories_partials/partial_6.hbs", 500, 100)
						.withPartial("partial_7", "step-24/code/frontend/src/components/card-list/card-list.stories_partials/partial_7.hbs", 600, 100)
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/frontend/src/components/card-list/card-list.component.hbs", "frontend/src/components/card-list/card-list.component.tsx")
						.withPartial("partial_1", "step-24/code/frontend/src/components/card-list/card-list.component_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-24/code/frontend/src/components/card-list/card-list.component_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-24/code/frontend/src/components/card-list/card-list.component_partials/partial_3.hbs", 200, 100)
					.withTime({
						"start" : 0,
						"duration" : 300
					})
					.addCli()
						.withCommand("git checkout -b feature/frontend/card-list")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
