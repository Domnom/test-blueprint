const path = require('path');

module.exports = step("step-18")
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/card-list/card-list.playbook.mdx"))
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/board/board.playbook.mdx"))
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/frontend/src/components/card-list/card-list.bdd.hbs", "frontend/src/components/card-list/card-list.bdd.tsx")
						.withPartial("partial_1", "step-18/code/frontend/src/components/card-list/card-list.bdd_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-18/code/frontend/src/components/card-list/card-list.bdd_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card-list/card-list.test.hbs", "frontend/src/components/card-list/card-list.test.tsx")
						.withPartial("partial_1", "step-18/code/frontend/src/components/card-list/card-list.test_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-18/code/frontend/src/components/card-list/card-list.test_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-18/code/frontend/src/components/card-list/card-list.test_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-18/code/frontend/src/components/card-list/card-list.test_partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-18/code/frontend/src/components/card-list/card-list.test_partials/partial_5.hbs", 400, 100)
						.withPartial("partial_6", "step-18/code/frontend/src/components/card-list/card-list.test_partials/partial_6.hbs", 500, 100)
						.withPartial("partial_7", "step-18/code/frontend/src/components/card-list/card-list.test_partials/partial_7.hbs", 600, 100)
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/frontend/src/components/card-list/card-list.stories.hbs", "frontend/src/components/card-list/card-list.stories.tsx")
						.withPartial("partial_1", "step-18/code/frontend/src/components/card-list/card-list.stories_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-18/code/frontend/src/components/card-list/card-list.stories_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-18/code/frontend/src/components/card-list/card-list.stories_partials/partial_3.hbs", 200, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card-list/card-list.component.hbs", "frontend/src/components/card-list/card-list.component.tsx")
						.withPartial("partial_1", "step-18/code/frontend/src/components/card-list/card-list.component_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-18/code/frontend/src/components/card-list/card-list.component_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-18/code/frontend/src/components/card-list/card-list.component_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-18/code/frontend/src/components/card-list/card-list.component_partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-18/code/frontend/src/components/card-list/card-list.component_partials/partial_5.hbs", 400, 100)
						.withPartial("partial_6", "step-18/code/frontend/src/components/card-list/card-list.component_partials/partial_6.hbs", 500, 100)
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/frontend/src/components/board/board.bdd.hbs", "frontend/src/components/board/board.bdd.tsx")
						.withPartial("partial_1", "step-18/code/frontend/src/components/board/board.bdd_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-18/code/frontend/src/components/board/board.bdd_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/board.test.hbs", "frontend/src/components/board/board.test.tsx")
						.withPartial("partial_1", "step-18/code/frontend/src/components/board/board.test_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-18/code/frontend/src/components/board/board.test_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-18/code/frontend/src/components/board/board.test_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-18/code/frontend/src/components/board/board.test_partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-18/code/frontend/src/components/board/board.test_partials/partial_5.hbs", 400, 100)
						.withPartial("partial_6", "step-18/code/frontend/src/components/board/board.test_partials/partial_6.hbs", 500, 100)
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/frontend/src/components/board/board.stories.hbs", "frontend/src/components/board/board.stories.tsx")
						.withPartial("partial_1", "step-18/code/frontend/src/components/board/board.stories_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-18/code/frontend/src/components/board/board.stories_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/board.component.hbs", "frontend/src/components/board/board.component.tsx")
						.withPartial("partial_1", "step-18/code/frontend/src/components/board/board.component_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-18/code/frontend/src/components/board/board.component_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-18/code/frontend/src/components/board/board.component_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-18/code/frontend/src/components/board/board.component_partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-18/code/frontend/src/components/board/board.component_partials/partial_5.hbs", 400, 100)
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/frontend/src/components/board/board.styles.hbs", "frontend/src/components/board/board.styles.css")
						.withPartial("partial_1", "step-18/code/frontend/src/components/board/board.styles_partials/partial_1.hbs", 0, 100)
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
