const path = require('path');

module.exports = step("step-20")
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/card-list/card-list.playbook.mdx"))
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/board/board.playbook.mdx"))
					.withTime({
						"start" : 0,
						"duration" : 300
					})
					.addCode("/code/frontend/src/components/card-list/card-list.bdd.hbs", "frontend/src/components/card-list/card-list.bdd.tsx")
						.withPartial("partial_1", "step-20/code/frontend/src/components/card-list/card-list.bdd_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-20/code/frontend/src/components/card-list/card-list.bdd_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-20/code/frontend/src/components/card-list/card-list.bdd_partials/partial_3.hbs", 200, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card-list/card-list.test.hbs", "frontend/src/components/card-list/card-list.test.tsx")
						.withPartial("partial_1", "step-20/code/frontend/src/components/card-list/card-list.test_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-20/code/frontend/src/components/card-list/card-list.test_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-20/code/frontend/src/components/card-list/card-list.test_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-20/code/frontend/src/components/card-list/card-list.test_partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-20/code/frontend/src/components/card-list/card-list.test_partials/partial_5.hbs", 400, 100)
						.withPartial("partial_6", "step-20/code/frontend/src/components/card-list/card-list.test_partials/partial_6.hbs", 500, 100)
						.withPartial("partial_7", "step-20/code/frontend/src/components/card-list/card-list.test_partials/partial_7.hbs", 600, 100)
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/frontend/src/components/card-list/card-list.stories.hbs", "frontend/src/components/card-list/card-list.stories.tsx")
						.withPartial("partial_1", "step-20/code/frontend/src/components/card-list/card-list.stories_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-20/code/frontend/src/components/card-list/card-list.stories_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-20/code/frontend/src/components/card-list/card-list.stories_partials/partial_3.hbs", 200, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card-list/card-list.component.hbs", "frontend/src/components/card-list/card-list.component.tsx")
						.withPartial("partial_1", "step-20/code/frontend/src/components/card-list/card-list.component_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-20/code/frontend/src/components/card-list/card-list.component_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-20/code/frontend/src/components/card-list/card-list.component_partials/partial_3.hbs", 200, 100)
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/frontend/src/components/card-list/card-list.styles.hbs", "frontend/src/components/card-list/card-list.styles.css")
						.withPartial("partial_1", "step-20/code/frontend/src/components/card-list/card-list.styles_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/board.bdd.hbs", "frontend/src/components/board/board.bdd.tsx")
						.withPartial("partial_1", "step-20/code/frontend/src/components/board/board.bdd_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-20/code/frontend/src/components/board/board.bdd_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-20/code/frontend/src/components/board/board.bdd_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-20/code/frontend/src/components/board/board.bdd_partials/partial_4.hbs", 300, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/board.test.hbs", "frontend/src/components/board/board.test.tsx")
						.withPartial("partial_1", "step-20/code/frontend/src/components/board/board.test_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-20/code/frontend/src/components/board/board.test_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-20/code/frontend/src/components/board/board.test_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-20/code/frontend/src/components/board/board.test_partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-20/code/frontend/src/components/board/board.test_partials/partial_5.hbs", 400, 100)
						.withPartial("partial_6", "step-20/code/frontend/src/components/board/board.test_partials/partial_6.hbs", 500, 100)
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/frontend/src/components/board/board.stories.hbs", "frontend/src/components/board/board.stories.tsx")
						.withPartial("partial_1", "step-20/code/frontend/src/components/board/board.stories_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-20/code/frontend/src/components/board/board.stories_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-20/code/frontend/src/components/board/board.stories_partials/partial_3.hbs", 200, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/board.component.hbs", "frontend/src/components/board/board.component.tsx")
						.withPartial("partial_1", "step-20/code/frontend/src/components/board/board.component_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-20/code/frontend/src/components/board/board.component_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-20/code/frontend/src/components/board/board.component_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-20/code/frontend/src/components/board/board.component_partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-20/code/frontend/src/components/board/board.component_partials/partial_5.hbs", 400, 100)
						.withPartial("partial_6", "step-20/code/frontend/src/components/board/board.component_partials/partial_6.hbs", 500, 100)
						.withPartial("partial_7", "step-20/code/frontend/src/components/board/board.component_partials/partial_7.hbs", 600, 100)
						.withPartial("partial_8", "step-20/code/frontend/src/components/board/board.component_partials/partial_8.hbs", 700, 100)
						.withPartial("partial_9", "step-20/code/frontend/src/components/board/board.component_partials/partial_9.hbs", 800, 100)
						.withPartial("partial_10", "step-20/code/frontend/src/components/board/board.component_partials/partial_10.hbs", 900, 300)
					.withTime({
						"start" : 0,
						"duration" : 800
					})
					.addCli()
						.withCommand("git checkout -b feature/frontend/board")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
