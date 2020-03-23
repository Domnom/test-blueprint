const path = require('path');

module.exports = step("step-17")
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/board/board.playbook.mdx"))
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/board.bdd.hbs", "frontend/src/components/board/board.bdd.tsx")
						.withPartial("partial_1", "step-17/code/frontend/src/components/board/board.bdd_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-17/code/frontend/src/components/board/board.bdd_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/board.stories.hbs", "frontend/src/components/board/board.stories.tsx")
						.withPartial("partial_1", "step-17/code/frontend/src/components/board/board.stories_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-17/code/frontend/src/components/board/board.stories_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-17/code/frontend/src/components/board/board.stories_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-17/code/frontend/src/components/board/board.stories_partials/partial_4.hbs", 300, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/board.test.hbs", "frontend/src/components/board/board.test.tsx")
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/frontend/src/components/board/board.component.hbs", "frontend/src/components/board/board.component.tsx")
						.withPartial("partial_1", "step-17/code/frontend/src/components/board/board.component_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-17/code/frontend/src/components/board/board.component_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-17/code/frontend/src/components/board/board.component_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-17/code/frontend/src/components/board/board.component_partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-17/code/frontend/src/components/board/board.component_partials/partial_5.hbs", 400, 100)
						.withPartial("partial_6", "step-17/code/frontend/src/components/board/board.component_partials/partial_6.hbs", 500, 100)
						.withPartial("partial_7", "step-17/code/frontend/src/components/board/board.component_partials/partial_7.hbs", 600, 100)
						.withPartial("partial_8", "step-17/code/frontend/src/components/board/board.component_partials/partial_8.hbs", 700, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCli()
						.withCommand("git checkout -b feature/frontend/board")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
