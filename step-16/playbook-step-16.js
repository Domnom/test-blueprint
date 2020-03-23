const path = require('path');

module.exports = step("step-16")
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/board/board.playbook.mdx"))
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card-list/card-list.styles.hbs", "frontend/src/components/card-list/card-list.styles.css")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/board.hbs", "frontend/src/components/board/board.feature")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/board.bdd.hbs", "frontend/src/components/board/board.bdd.tsx")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/board.stories.hbs", "frontend/src/components/board/board.stories.tsx")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/board.component.hbs", "frontend/src/components/board/board.component.tsx")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/board.styles.hbs", "frontend/src/components/board/board.styles.css")
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
