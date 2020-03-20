const path = require("path");

playbook("LOOK IVE CHANGED TODO - Get the name from github url")
	.addCategory("TODO - Create a category name")
		.addScene("TODO - Create a scene name")
			.addStep("step-1")
				.addDescriptionFromMdFile(path.join(__dirname, "step-1/description/ProjectPlan.mdx"))
				.withTime({
					"start" : 100,
					"duration" : 400
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-1/description/readme.md"))
				.withTime({
					"start" : 700,
					"duration" : 400
				})
				.addCode("step-1/code/.gitignore.hbs", ".gitignore")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-1/code/package-lock.hbs", "package-lock.json")
				.withTime({
					"start" : 500,
					"duration" : 100
				})
				.addCode("step-1/code/package.hbs", "package.json")
				.withTime({
					"start" : 600,
					"duration" : 100
				})
				.addCode("step-1/code/setup/cd.hbs", "setup/cd.sh")
				.withTime({
					"start" : 1100,
					"duration" : 100
				})
				.addCode("step-1/code/setup/commitzen.hbs", "setup/commitzen.sh")
				.withTime({
					"start" : 1200,
					"duration" : 100
				})
				.addCode("step-1/code/setup/storybook.hbs", "setup/storybook.sh")
				.withTime({
					"start" : 1300,
					"duration" : 200
				})
				.addCode("step-1/code/setup/text.hbs", "setup/text.txt")
				.withTime({
					"start" : 1500,
					"duration" : 100
				})
			.addStep("step-2")
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/docs/01_setup/01_setup_01_webpack.mdx"))
				.withTime({
					"start" : 500,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/docs/01_setup/01_setup_02_typescript.mdx"))
				.withTime({
					"start" : 600,
					"duration" : 200
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/docs/01_setup/01_setup_04_storybook.mdx"))
				.withTime({
					"start" : 800,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/docs/01_setup/01_setup_lerna.mdx"))
				.withTime({
					"start" : 900,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/docs/ProjectPlan.mdx"))
				.withTime({
					"start" : 1000,
					"duration" : 400
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/src/components/card/card.playbook.mdx"))
				.withTime({
					"start" : 2500,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/ProjectPlan.mdx"))
				.withTime({
					"start" : 100,
					"duration" : 400
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/frontend/readme.md"))
				.withTime({
					"start" : 1200,
					"duration" : 400
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/frontend/src/components/card/card.playbook.mdx"))
				.withTime({
					"start" : 1800,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/backend/readme.md"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/readme.md"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/backend/readme.md"))
				.withTime({
					"start" : 100,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/backend/readme.md"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/backend/readme.md"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-2/description/backend/server/README.md"))
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-2/code/.storybook/addons.hbs", ".storybook/addons.js")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-2/code/.storybook/config.hbs", ".storybook/config.js")
				.withTime({
					"start" : 100,
					"duration" : 100
				})
				.addCode("step-2/code/.storybook/webpack.config.hbs", ".storybook/webpack.config.js")
				.withTime({
					"start" : 200,
					"duration" : 100
				})
				.addCode("step-2/code/.webpack/loaders/example-loader.hbs", ".webpack/loaders/example-loader.js")
				.withTime({
					"start" : 300,
					"duration" : 100
				})
				.addCode("step-2/code/.webpack/plugins/FileListPlugin.hbs", ".webpack/plugins/FileListPlugin.js")
				.withTime({
					"start" : 400,
					"duration" : 100
				})
				.addCode("step-2/code/package.hbs", "package.json")
					.withPartial("partial_1", "step-2/code/package_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-2/code/package_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-2/code/package_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-2/code/package_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-2/code/package_partials/partial_5.hbs", 400, 100)
				.withTime({
					"start" : 1400,
					"duration" : 100
				})
				.addCode("step-2/code/setup/_template_.hbs", "setup/_template_.sh")
				.withTime({
					"start" : 1500,
					"duration" : 100
				})
				.addCode("step-2/code/setup/gitignore.hbs", "setup/gitignore.sh")
				.withTime({
					"start" : 1600,
					"duration" : 100
				})
				.addCode("step-2/code/setup/storybook.hbs", "setup/storybook.sh")
					.withPartial("partial_1", "step-2/code/setup/storybook_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-2/code/setup/storybook_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 1700,
					"duration" : 200
				})
				.addCode("step-2/code/setup/typescript.hbs", "setup/typescript.sh")
				.withTime({
					"start" : 1900,
					"duration" : 100
				})
				.addCode("step-2/code/setup/webpack-loaders.hbs", "setup/webpack-loaders.sh")
				.withTime({
					"start" : 2000,
					"duration" : 100
				})
				.addCode("step-2/code/setup/webpack-plugins.hbs", "setup/webpack-plugins.sh")
				.withTime({
					"start" : 2100,
					"duration" : 100
				})
				.addCode("step-2/code/setup/webpack.hbs", "setup/webpack.sh")
				.withTime({
					"start" : 2200,
					"duration" : 100
				})
				.addCode("step-2/code/src/components/card/card.bdd.hbs", "src/components/card/card.bdd.tsx")
				.withTime({
					"start" : 2300,
					"duration" : 0
				})
				.addCode("step-2/code/src/components/card/card.component.hbs", "src/components/card/card.component.tsx")
				.withTime({
					"start" : 2300,
					"duration" : 100
				})
				.addCode("step-2/code/src/components/card/card.container.hbs", "src/components/card/card.container.tsx")
				.withTime({
					"start" : 2400,
					"duration" : 100
				})
				.addCode("step-2/code/src/components/card/card.redux.hbs", "src/components/card/card.redux.tsx")
				.withTime({
					"start" : 2600,
					"duration" : 0
				})
				.addCode("step-2/code/src/components/card/card.stories.hbs", "src/components/card/card.stories.tsx")
				.withTime({
					"start" : 2600,
					"duration" : 300
				})
				.addCode("step-2/code/src/components/card/card.styles.hbs", "src/components/card/card.styles.tsx")
				.withTime({
					"start" : 2900,
					"duration" : 0
				})
				.addCode("step-2/code/src/components/card/card.test.hbs", "src/components/card/card.test.tsx")
				.withTime({
					"start" : 2900,
					"duration" : 0
				})
				.addCode("step-2/code/src/example-stories/example.actions.stories.hbs", "src/example-stories/example.actions.stories.tsx")
				.withTime({
					"start" : 2900,
					"duration" : 100
				})
				.addCode("step-2/code/src/example-stories/example.knobs.stories.hbs", "src/example-stories/example.knobs.stories.tsx")
				.withTime({
					"start" : 3000,
					"duration" : 300
				})
				.addCode("step-2/code/src/index.hbs", "src/index.css")
				.withTime({
					"start" : 3300,
					"duration" : 100
				})
				.addCode("step-2/code/src/index.hbs", "src/index.html")
				.withTime({
					"start" : 3400,
					"duration" : 100
				})
				.addCode("step-2/code/src/index.hbs", "src/index.tsx")
				.withTime({
					"start" : 3500,
					"duration" : 100
				})
				.addCode("step-2/code/tsconfig.hbs", "tsconfig.json")
				.withTime({
					"start" : 3600,
					"duration" : 200
				})
				.addCode("step-2/code/webpack.common.hbs", "webpack.common.js")
				.withTime({
					"start" : 3800,
					"duration" : 200
				})
				.addCode("step-2/code/webpack.dev.hbs", "webpack.dev.js")
				.withTime({
					"start" : 4000,
					"duration" : 100
				})
				.addCode("step-2/code/webpack.prod.hbs", "webpack.prod.js")
				.withTime({
					"start" : 4100,
					"duration" : 100
				})
				.addCode("step-2/code/package.hbs", "package.json")
					.withPartial("partial_1", "step-2/code/package_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-2/code/package_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-2/code/package_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-2/code/package_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-2/code/package_partials/partial_5.hbs", 400, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-2/code/setup/docker.hbs", "setup/docker.sh")
				.withTime({
					"start" : 100,
					"duration" : 0
				})
				.addCode("step-2/code/.gitignore.hbs", ".gitignore")
					.withPartial("partial_1", "step-2/code/.gitignore_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/.storybook/addons.hbs", "frontend/.storybook/addons.js")
				.withTime({
					"start" : 500,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/.storybook/config.hbs", "frontend/.storybook/config.js")
				.withTime({
					"start" : 600,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/.storybook/webpack.config.hbs", "frontend/.storybook/webpack.config.js")
				.withTime({
					"start" : 700,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/.webpack/loaders/example-loader.hbs", "frontend/.webpack/loaders/example-loader.js")
				.withTime({
					"start" : 800,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/.webpack/plugins/FileListPlugin.hbs", "frontend/.webpack/plugins/FileListPlugin.js")
				.withTime({
					"start" : 900,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/package-lock.hbs", "frontend/package-lock.json")
				.withTime({
					"start" : 1000,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/package.hbs", "frontend/package.json")
				.withTime({
					"start" : 1100,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/src/components/card/card.bdd.hbs", "frontend/src/components/card/card.bdd.tsx")
				.withTime({
					"start" : 1600,
					"duration" : 0
				})
				.addCode("step-2/code/frontend/src/components/card/card.component.hbs", "frontend/src/components/card/card.component.tsx")
				.withTime({
					"start" : 1600,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/src/components/card/card.container.hbs", "frontend/src/components/card/card.container.tsx")
				.withTime({
					"start" : 1700,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/src/components/card/card.redux.hbs", "frontend/src/components/card/card.redux.tsx")
				.withTime({
					"start" : 1900,
					"duration" : 0
				})
				.addCode("step-2/code/frontend/src/components/card/card.stories.hbs", "frontend/src/components/card/card.stories.tsx")
				.withTime({
					"start" : 1900,
					"duration" : 300
				})
				.addCode("step-2/code/frontend/src/components/card/card.styles.hbs", "frontend/src/components/card/card.styles.tsx")
				.withTime({
					"start" : 2200,
					"duration" : 0
				})
				.addCode("step-2/code/frontend/src/components/card/card.test.hbs", "frontend/src/components/card/card.test.tsx")
				.withTime({
					"start" : 2200,
					"duration" : 0
				})
				.addCode("step-2/code/frontend/src/example-stories/example.actions.stories.hbs", "frontend/src/example-stories/example.actions.stories.tsx")
				.withTime({
					"start" : 2200,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/src/example-stories/example.knobs.stories.hbs", "frontend/src/example-stories/example.knobs.stories.tsx")
				.withTime({
					"start" : 2300,
					"duration" : 300
				})
				.addCode("step-2/code/frontend/src/index.hbs", "frontend/src/index.css")
				.withTime({
					"start" : 2600,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/src/index.hbs", "frontend/src/index.html")
				.withTime({
					"start" : 2700,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/src/index.hbs", "frontend/src/index.tsx")
				.withTime({
					"start" : 2800,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/tsconfig.hbs", "frontend/tsconfig.json")
				.withTime({
					"start" : 2900,
					"duration" : 200
				})
				.addCode("step-2/code/frontend/webpack.common.hbs", "frontend/webpack.common.js")
				.withTime({
					"start" : 3100,
					"duration" : 200
				})
				.addCode("step-2/code/frontend/webpack.dev.hbs", "frontend/webpack.dev.js")
				.withTime({
					"start" : 3300,
					"duration" : 100
				})
				.addCode("step-2/code/frontend/webpack.prod.hbs", "frontend/webpack.prod.js")
				.withTime({
					"start" : 3400,
					"duration" : 100
				})
				.addCode("step-2/code/.gitignore.hbs", ".gitignore")
					.withPartial("partial_1", "step-2/code/.gitignore_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-2/code/.gitignore_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-2/code/backend/.gitignore.hbs", "backend/.gitignore")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-2/code/backend/.gitignore.hbs", "backend/.gitignore")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-2/code/backend/Dockerfile.hbs", "backend/Dockerfile.dev")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/nest-cli.hbs", "backend/server/nest-cli.json")
				.withTime({
					"start" : 200,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/nodemon-debug.hbs", "backend/server/nodemon-debug.json")
				.withTime({
					"start" : 300,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/nodemon.hbs", "backend/server/nodemon.json")
				.withTime({
					"start" : 400,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/package.hbs", "backend/server/package.json")
				.withTime({
					"start" : 500,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/app.controller.spec.hbs", "backend/server/src/app.controller.spec.ts")
				.withTime({
					"start" : 600,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/app.controller.hbs", "backend/server/src/app.controller.ts")
				.withTime({
					"start" : 700,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/app.module.hbs", "backend/server/src/app.module.ts")
				.withTime({
					"start" : 800,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/app.service.hbs", "backend/server/src/app.service.ts")
				.withTime({
					"start" : 900,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/http/exceptions/Validation.exception.hbs", "backend/server/src/common/http/exceptions/Validation.exception.ts")
				.withTime({
					"start" : 1000,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/http/exceptions/index.hbs", "backend/server/src/common/http/exceptions/index.ts")
				.withTime({
					"start" : 1100,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/http/exceptions/not-found.exception.spec.hbs", "backend/server/src/common/http/exceptions/not-found.exception.spec.ts")
				.withTime({
					"start" : 1200,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/http/exceptions/not-found.exception.hbs", "backend/server/src/common/http/exceptions/not-found.exception.ts")
				.withTime({
					"start" : 1300,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/http/exceptions/not-unique.exception.spec.hbs", "backend/server/src/common/http/exceptions/not-unique.exception.spec.ts")
				.withTime({
					"start" : 1400,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/http/exceptions/not-unique.exception.hbs", "backend/server/src/common/http/exceptions/not-unique.exception.ts")
				.withTime({
					"start" : 1500,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/http/exceptions/validation.exception.spec.hbs", "backend/server/src/common/http/exceptions/validation.exception.spec.ts")
				.withTime({
					"start" : 1600,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/http/responses/index.hbs", "backend/server/src/common/http/responses/index.ts")
				.withTime({
					"start" : 1700,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/http/responses/success.response.hbs", "backend/server/src/common/http/responses/success.response.ts")
				.withTime({
					"start" : 1800,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/interceptors/error-handling.interceptor.hbs", "backend/server/src/common/interceptors/error-handling.interceptor.ts")
				.withTime({
					"start" : 1900,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/recipes/swagger/swagger.util.hbs", "backend/server/src/common/recipes/swagger/swagger.util.ts")
				.withTime({
					"start" : 2000,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/common/utils/error.util.spec.hbs", "backend/server/src/common/utils/error.util.spec.ts")
				.withTime({
					"start" : 2100,
					"duration" : 400
				})
				.addCode("step-2/code/backend/server/src/common/utils/error.util.hbs", "backend/server/src/common/utils/error.util.ts")
				.withTime({
					"start" : 2500,
					"duration" : 200
				})
				.addCode("step-2/code/backend/server/src/common/utils/test-helper.util.hbs", "backend/server/src/common/utils/test-helper.util.ts")
				.withTime({
					"start" : 2700,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/src/main.hbs", "backend/server/src/main.ts")
				.withTime({
					"start" : 2800,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/test/app.e2e-spec.hbs", "backend/server/test/app.e2e-spec.ts")
				.withTime({
					"start" : 2900,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/test/jest-e2e.hbs", "backend/server/test/jest-e2e.json")
				.withTime({
					"start" : 3000,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/tsconfig.build.hbs", "backend/server/tsconfig.build.json")
				.withTime({
					"start" : 3100,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/tsconfig.hbs", "backend/server/tsconfig.json")
				.withTime({
					"start" : 3200,
					"duration" : 100
				})
				.addCode("step-2/code/backend/server/tslint.hbs", "backend/server/tslint.json")
				.withTime({
					"start" : 3300,
					"duration" : 100
				})
				.addCli()
					.withCommand("git checkout -b feature/backend")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-3")
				.addCode("step-3/code/docker-compose.hbs", "docker-compose.yml")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-3/code/backend/server/src/app.module.hbs", "backend/server/src/app.module.ts")
					.withPartial("partial_1", "step-3/code/backend/server/src/app.module_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-3/code/backend/server/src/app.module_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCli()
					.withCommand("git checkout -b feature/docker-compose")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-4")
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/ProjectPlan.mdx"))
				.withTime({
					"start" : 100,
					"duration" : 800
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/frontend/src/components/board/Board.playbook.mdx"))
				.withTime({
					"start" : 3900,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/frontend/src/components/cardlist/CardList.playbook.mdx"))
				.withTime({
					"start" : 5200,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/frontend/src/components/draggablecard/DraggableCard.playbook.mdx"))
				.withTime({
					"start" : 6200,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/backend/readme.md"))
				.withTime({
					"start" : 300,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/backend/server/README.md"))
				.withTime({
					"start" : 400,
					"duration" : 200
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/ProjectPlan.mdx"))
				.withTime({
					"start" : 100,
					"duration" : 800
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/frontend/src/components/board/Board.playbook.mdx"))
				.withTime({
					"start" : 3900,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/frontend/src/components/cardlist/CardList.playbook.mdx"))
				.withTime({
					"start" : 5200,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/frontend/src/components/draggablecard/DraggableCard.playbook.mdx"))
				.withTime({
					"start" : 6200,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/backend/readme.md"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/common/helpers/readme.md"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/ProjectPlan.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 900
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/01_setup/01_setup_03_lerna.mdx"))
				.withTime({
					"start" : 900,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/01_setup/01_setup_05_docker.mdx"))
				.withTime({
					"start" : 1000,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/01_setup/01_setup_06_jest.mdx"))
				.withTime({
					"start" : 1100,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/01_setup/01_setup_07_cypress.mdx"))
				.withTime({
					"start" : 1200,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/01_setup/01_setup_08_cicd.mdx"))
				.withTime({
					"start" : 1300,
					"duration" : 200
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/02_frontend/01_Card.mdx"))
				.withTime({
					"start" : 1500,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/02_frontend/02_CardList.mdx"))
				.withTime({
					"start" : 1600,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/02_frontend/03_Board.mdx"))
				.withTime({
					"start" : 1700,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/02_frontend/04_Routes_and_Pages.mdx"))
				.withTime({
					"start" : 1800,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/02_frontend/05_CRUD_Boards.mdx"))
				.withTime({
					"start" : 1900,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/02_frontend/06_CRUD_CardLists.mdx"))
				.withTime({
					"start" : 2000,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/02_frontend/07_CRUD_Cards.mdx"))
				.withTime({
					"start" : 2100,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/02_frontend/08_Auth_Pages.mdx"))
				.withTime({
					"start" : 2200,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/02_frontend/09_Interactions_DnDCards.mdx"))
				.withTime({
					"start" : 2300,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/02_frontend/10_TrelloAPI.mdx"))
				.withTime({
					"start" : 2400,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/03_backend/01_NestJs_and_swagger.mdx"))
				.withTime({
					"start" : 2500,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/03_backend/02_TrelloAPI_Proxy.mdx"))
				.withTime({
					"start" : 2600,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/03_backend/03_CRUD_Boards.mdx"))
				.withTime({
					"start" : 2700,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/03_backend/04_CRUD_CardList.mdx"))
				.withTime({
					"start" : 2800,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/05_cicd/05_setup_01_cicd.mdx"))
				.withTime({
					"start" : 2900,
					"duration" : 200
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/05_cicd/05_setup_02_env.mdx"))
				.withTime({
					"start" : 3100,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/05_cicd/05_setup_03_aws.mdx"))
				.withTime({
					"start" : 3200,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/docs/05_cicd/05_setup_04_circle.mdx"))
				.withTime({
					"start" : 3300,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-4/description/readme.md"))
				.withTime({
					"start" : 0,
					"duration" : 900
				})
				.addCode("step-4/code/common/helpers/lexicographic.util.spec.hbs", "common/helpers/lexicographic.util.spec.ts")
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-4/code/common/helpers/lexicographic.util.hbs", "common/helpers/lexicographic.util.ts")
				.withTime({
					"start" : 200,
					"duration" : 300
				})
				.addCode("step-4/code/.gitignore.hbs", ".gitignore")
					.withPartial("partial_1", "step-4/code/.gitignore_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/.storybook/addons.hbs", "frontend/.storybook/addons.js")
					.withPartial("partial_1", "step-4/code/frontend/.storybook/addons_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 900,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/.storybook/webpack.config.hbs", "frontend/.storybook/webpack.config.js")
					.withPartial("partial_1", "step-4/code/frontend/.storybook/webpack.config_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/.storybook/webpack.config_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/frontend/.storybook/webpack.config_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 1000,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/__sample.hbs", "frontend/__sample.sh")
				.withTime({
					"start" : 1100,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/package.hbs", "frontend/package.json")
					.withPartial("partial_1", "step-4/code/frontend/package_partials/partial_1.hbs", 0, 200)
					.withPartial("partial_2", "step-4/code/frontend/package_partials/partial_2.hbs", 200, 100)
				.withTime({
					"start" : 1200,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/@uikit/alerts/alert.stories.hbs", "frontend/src/@uikit/alerts/alert.stories.tsx")
				.withTime({
					"start" : 1400,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/@uikit/buttons/button.stories.hbs", "frontend/src/@uikit/buttons/button.stories.tsx")
				.withTime({
					"start" : 1500,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/@uikit/forms/form.stories.hbs", "frontend/src/@uikit/forms/form.stories.tsx")
				.withTime({
					"start" : 1600,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/@uikit/layouts/layout.stories.hbs", "frontend/src/@uikit/layouts/layout.stories.tsx")
				.withTime({
					"start" : 1700,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/@uikit/modals/modal.stories.hbs", "frontend/src/@uikit/modals/modal.stories.tsx")
				.withTime({
					"start" : 1800,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/@uikit/textboxes/textboxes.stories.hbs", "frontend/src/@uikit/textboxes/textboxes.stories.tsx")
				.withTime({
					"start" : 1900,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/assets/css/app.hbs", "frontend/src/assets/css/app.css")
				.withTime({
					"start" : 2000,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/assets/images/b.hbs", "frontend/src/assets/images/b.jpg")
				.withTime({
					"start" : 2200,
					"duration" : 800
				})
				.addCode("step-4/code/frontend/src/assets/images/b.hbs", "frontend/src/assets/images/b.png")
				.withTime({
					"start" : 3000,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/assets/images/del.hbs", "frontend/src/assets/images/del.png")
				.withTime({
					"start" : 3200,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/assets/images/dots.hbs", "frontend/src/assets/images/dots.png")
				.withTime({
					"start" : 3300,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/assets/images/gal.hbs", "frontend/src/assets/images/gal.png")
				.withTime({
					"start" : 3400,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/assets/images/noavatar.hbs", "frontend/src/assets/images/noavatar.png")
				.withTime({
					"start" : 3500,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.bdd.hbs", "frontend/src/components/board/Board.bdd.tsx")
				.withTime({
					"start" : 3600,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.component.hbs", "frontend/src/components/board/Board.component.tsx")
				.withTime({
					"start" : 3700,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.container.hbs", "frontend/src/components/board/Board.container.tsx")
				.withTime({
					"start" : 3800,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.redux.hbs", "frontend/src/components/board/Board.redux.tsx")
				.withTime({
					"start" : 4000,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.stories.hbs", "frontend/src/components/board/Board.stories.tsx")
				.withTime({
					"start" : 4100,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/components/board/Board.styles.hbs", "frontend/src/components/board/Board.styles.tsx")
				.withTime({
					"start" : 4300,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.test.hbs", "frontend/src/components/board/Board.test.tsx")
				.withTime({
					"start" : 4400,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/card/card.component.hbs", "frontend/src/components/card/card.component.tsx")
					.withPartial("partial_1", "step-4/code/frontend/src/components/card/card.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/src/components/card/card.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/frontend/src/components/card/card.component_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-4/code/frontend/src/components/card/card.component_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-4/code/frontend/src/components/card/card.component_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-4/code/frontend/src/components/card/card.component_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-4/code/frontend/src/components/card/card.component_partials/partial_7.hbs", 600, 100)
				.withTime({
					"start" : 4500,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/components/card/card.stories.hbs", "frontend/src/components/card/card.stories.tsx")
					.withPartial("partial_1", "step-4/code/frontend/src/components/card/card.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/src/components/card/card.stories_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/frontend/src/components/card/card.stories_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-4/code/frontend/src/components/card/card.stories_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-4/code/frontend/src/components/card/card.stories_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-4/code/frontend/src/components/card/card.stories_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-4/code/frontend/src/components/card/card.stories_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-4/code/frontend/src/components/card/card.stories_partials/partial_8.hbs", 700, 100)
					.withPartial("partial_9", "step-4/code/frontend/src/components/card/card.stories_partials/partial_9.hbs", 800, 100)
					.withPartial("partial_10", "step-4/code/frontend/src/components/card/card.stories_partials/partial_10.hbs", 900, 100)
					.withPartial("partial_11", "step-4/code/frontend/src/components/card/card.stories_partials/partial_11.hbs", 1000, 100)
					.withPartial("partial_12", "step-4/code/frontend/src/components/card/card.stories_partials/partial_12.hbs", 1100, 100)
					.withPartial("partial_13", "step-4/code/frontend/src/components/card/card.stories_partials/partial_13.hbs", 1200, 100)
					.withPartial("partial_14", "step-4/code/frontend/src/components/card/card.stories_partials/partial_14.hbs", 1300, 100)
					.withPartial("partial_15", "step-4/code/frontend/src/components/card/card.stories_partials/partial_15.hbs", 1400, 100)
					.withPartial("partial_16", "step-4/code/frontend/src/components/card/card.stories_partials/partial_16.hbs", 1500, 100)
				.withTime({
					"start" : 4700,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.bdd.hbs", "frontend/src/components/cardlist/CardList.bdd.tsx")
				.withTime({
					"start" : 4900,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.component.hbs", "frontend/src/components/cardlist/CardList.component.tsx")
				.withTime({
					"start" : 5000,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.container.hbs", "frontend/src/components/cardlist/CardList.container.tsx")
				.withTime({
					"start" : 5100,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.redux.hbs", "frontend/src/components/cardlist/CardList.redux.tsx")
				.withTime({
					"start" : 5300,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.stories.hbs", "frontend/src/components/cardlist/CardList.stories.tsx")
				.withTime({
					"start" : 5400,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.styles.hbs", "frontend/src/components/cardlist/CardList.styles.tsx")
				.withTime({
					"start" : 5600,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.test.hbs", "frontend/src/components/cardlist/CardList.test.tsx")
				.withTime({
					"start" : 5700,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.bdd.hbs", "frontend/src/components/draggablecard/DraggableCard.bdd.tsx")
				.withTime({
					"start" : 5800,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.component.hbs", "frontend/src/components/draggablecard/DraggableCard.component.tsx")
				.withTime({
					"start" : 5900,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.container.hbs", "frontend/src/components/draggablecard/DraggableCard.container.tsx")
				.withTime({
					"start" : 6000,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.redux.hbs", "frontend/src/components/draggablecard/DraggableCard.redux.tsx")
				.withTime({
					"start" : 6300,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.stories.hbs", "frontend/src/components/draggablecard/DraggableCard.stories.tsx")
				.withTime({
					"start" : 6400,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.styles.hbs", "frontend/src/components/draggablecard/DraggableCard.styles.tsx")
				.withTime({
					"start" : 6500,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.test.hbs", "frontend/src/components/draggablecard/DraggableCard.test.tsx")
				.withTime({
					"start" : 6600,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/config/index.hbs", "frontend/src/config/index.ts")
				.withTime({
					"start" : 6700,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/example-stories/example.actions.stories.hbs", "frontend/src/example-stories/example.actions.stories.tsx")
					.withPartial("partial_1", "step-4/code/frontend/src/example-stories/example.actions.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/src/example-stories/example.actions.stories_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 6800,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/example-stories/example.knobs.stories.hbs", "frontend/src/example-stories/example.knobs.stories.tsx")
					.withPartial("partial_1", "step-4/code/frontend/src/example-stories/example.knobs.stories_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 6900,
					"duration" : 300
				})
				.addCode("step-4/code/frontend/tsconfig.hbs", "frontend/tsconfig.json")
					.withPartial("partial_1", "step-4/code/frontend/tsconfig_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 7200,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/webpack.common.hbs", "frontend/webpack.common.js")
					.withPartial("partial_1", "step-4/code/frontend/webpack.common_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/webpack.common_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/frontend/webpack.common_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-4/code/frontend/webpack.common_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-4/code/frontend/webpack.common_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-4/code/frontend/webpack.common_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-4/code/frontend/webpack.common_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-4/code/frontend/webpack.common_partials/partial_8.hbs", 700, 100)
					.withPartial("partial_9", "step-4/code/frontend/webpack.common_partials/partial_9.hbs", 800, 100)
					.withPartial("partial_10", "step-4/code/frontend/webpack.common_partials/partial_10.hbs", 900, 100)
					.withPartial("partial_11", "step-4/code/frontend/webpack.common_partials/partial_11.hbs", 1000, 100)
					.withPartial("partial_12", "step-4/code/frontend/webpack.common_partials/partial_12.hbs", 1100, 100)
					.withPartial("partial_13", "step-4/code/frontend/webpack.common_partials/partial_13.hbs", 1200, 100)
					.withPartial("partial_14", "step-4/code/frontend/webpack.common_partials/partial_14.hbs", 1300, 100)
					.withPartial("partial_15", "step-4/code/frontend/webpack.common_partials/partial_15.hbs", 1400, 100)
					.withPartial("partial_16", "step-4/code/frontend/webpack.common_partials/partial_16.hbs", 1500, 100)
				.withTime({
					"start" : 7400,
					"duration" : 200
				})
				.addCode("step-4/code/setup/_template_.hbs", "setup/_template_.sh")
					.withPartial("partial_1", "step-4/code/setup/_template__partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/setup/_template__partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/setup/_template__partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-4/code/setup/_template__partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-4/code/setup/_template__partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-4/code/setup/_template__partials/partial_6.hbs", 500, 100)
				.withTime({
					"start" : 7600,
					"duration" : 100
				})
				.addCode("step-4/code/setup/aws.hbs", "setup/aws.sh")
				.withTime({
					"start" : 7700,
					"duration" : 100
				})
				.addCode("step-4/code/setup/cicd.hbs", "setup/cicd.sh")
				.withTime({
					"start" : 7800,
					"duration" : 100
				})
				.addCode("step-4/code/setup/commitzen.hbs", "setup/commitzen.sh")
					.withPartial("partial_1", "step-4/code/setup/commitzen_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 7900,
					"duration" : 100
				})
				.addCode("step-4/code/setup/cypress.hbs", "setup/cypress.sh")
				.withTime({
					"start" : 8000,
					"duration" : 100
				})
				.addCode("step-4/code/setup/docker.hbs", "setup/docker.sh")
				.withTime({
					"start" : 8100,
					"duration" : 100
				})
				.addCode("step-4/code/setup/gitignore.hbs", "setup/gitignore.sh")
					.withPartial("partial_1", "step-4/code/setup/gitignore_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 8200,
					"duration" : 100
				})
				.addCode("step-4/code/setup/jest.hbs", "setup/jest.sh")
				.withTime({
					"start" : 8300,
					"duration" : 100
				})
				.addCode("step-4/code/setup/semantic-release.hbs", "setup/semantic-release.sh")
				.withTime({
					"start" : 8400,
					"duration" : 100
				})
				.addCode("step-4/code/setup/storybook.hbs", "setup/storybook.sh")
					.withPartial("partial_1", "step-4/code/setup/storybook_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/setup/storybook_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 8500,
					"duration" : 200
				})
				.addCode("step-4/code/setup/sxd/component.hbs", "setup/sxd/component.sh")
				.withTime({
					"start" : 8700,
					"duration" : 200
				})
				.addCode("step-4/code/setup/sxd/components/component.bdd.tsx.hbs", "setup/sxd/components/component.bdd.tsx.template")
				.withTime({
					"start" : 8900,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.container.tsx.hbs", "setup/sxd/components/component.container.tsx.template")
				.withTime({
					"start" : 9000,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.playbook.mdx.hbs", "setup/sxd/components/component.playbook.mdx.template")
				.withTime({
					"start" : 9100,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.redux.tsx.hbs", "setup/sxd/components/component.redux.tsx.template")
				.withTime({
					"start" : 9200,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.stories.tsx.hbs", "setup/sxd/components/component.stories.tsx.template")
				.withTime({
					"start" : 9300,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.styles.tsx.hbs", "setup/sxd/components/component.styles.tsx.template")
				.withTime({
					"start" : 9400,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.test.tsx.hbs", "setup/sxd/components/component.test.tsx.template")
				.withTime({
					"start" : 9500,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.tsx.hbs", "setup/sxd/components/component.tsx.template")
				.withTime({
					"start" : 9600,
					"duration" : 100
				})
				.addCode("step-4/code/setup/typescript.hbs", "setup/typescript.sh")
					.withPartial("partial_1", "step-4/code/setup/typescript_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/setup/typescript_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 9700,
					"duration" : 100
				})
				.addCode("step-4/code/setup/webpack-loaders.hbs", "setup/webpack-loaders.sh")
					.withPartial("partial_1", "step-4/code/setup/webpack-loaders_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 9800,
					"duration" : 100
				})
				.addCode("step-4/code/setup/webpack-plugins.hbs", "setup/webpack-plugins.sh")
					.withPartial("partial_1", "step-4/code/setup/webpack-plugins_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 9900,
					"duration" : 100
				})
				.addCode("step-4/code/setup/webpack.hbs", "setup/webpack.sh")
					.withPartial("partial_1", "step-4/code/setup/webpack_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/setup/webpack_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 10000,
					"duration" : 100
				})
				.addCode("step-4/code/.gitignore.hbs", ".gitignore")
					.withPartial("partial_1", "step-4/code/.gitignore_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-4/code/backend/.gitignore.hbs", "backend/.gitignore")
				.withTime({
					"start" : 100,
					"duration" : 100
				})
				.addCode("step-4/code/backend/Dockerfile.hbs", "backend/Dockerfile.dev")
				.withTime({
					"start" : 200,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/nest-cli.hbs", "backend/server/nest-cli.json")
				.withTime({
					"start" : 600,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/nodemon-debug.hbs", "backend/server/nodemon-debug.json")
				.withTime({
					"start" : 700,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/nodemon.hbs", "backend/server/nodemon.json")
				.withTime({
					"start" : 800,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/package.hbs", "backend/server/package.json")
				.withTime({
					"start" : 900,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/app.controller.spec.hbs", "backend/server/src/app.controller.spec.ts")
				.withTime({
					"start" : 1000,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/app.controller.hbs", "backend/server/src/app.controller.ts")
				.withTime({
					"start" : 1100,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/app.module.hbs", "backend/server/src/app.module.ts")
				.withTime({
					"start" : 1200,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/app.service.hbs", "backend/server/src/app.service.ts")
				.withTime({
					"start" : 1300,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/http/exceptions/Validation.exception.hbs", "backend/server/src/common/http/exceptions/Validation.exception.ts")
				.withTime({
					"start" : 1400,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/http/exceptions/index.hbs", "backend/server/src/common/http/exceptions/index.ts")
				.withTime({
					"start" : 1500,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/http/exceptions/not-found.exception.spec.hbs", "backend/server/src/common/http/exceptions/not-found.exception.spec.ts")
				.withTime({
					"start" : 1600,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/http/exceptions/not-found.exception.hbs", "backend/server/src/common/http/exceptions/not-found.exception.ts")
				.withTime({
					"start" : 1700,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/http/exceptions/not-unique.exception.spec.hbs", "backend/server/src/common/http/exceptions/not-unique.exception.spec.ts")
				.withTime({
					"start" : 1800,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/http/exceptions/not-unique.exception.hbs", "backend/server/src/common/http/exceptions/not-unique.exception.ts")
				.withTime({
					"start" : 1900,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/http/exceptions/validation.exception.spec.hbs", "backend/server/src/common/http/exceptions/validation.exception.spec.ts")
				.withTime({
					"start" : 2000,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/http/responses/index.hbs", "backend/server/src/common/http/responses/index.ts")
				.withTime({
					"start" : 2100,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/http/responses/success.response.hbs", "backend/server/src/common/http/responses/success.response.ts")
				.withTime({
					"start" : 2200,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/interceptors/error-handling.interceptor.hbs", "backend/server/src/common/interceptors/error-handling.interceptor.ts")
				.withTime({
					"start" : 2300,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/recipes/swagger/swagger.util.hbs", "backend/server/src/common/recipes/swagger/swagger.util.ts")
				.withTime({
					"start" : 2400,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/common/utils/error.util.spec.hbs", "backend/server/src/common/utils/error.util.spec.ts")
				.withTime({
					"start" : 2500,
					"duration" : 400
				})
				.addCode("step-4/code/backend/server/src/common/utils/error.util.hbs", "backend/server/src/common/utils/error.util.ts")
				.withTime({
					"start" : 2900,
					"duration" : 200
				})
				.addCode("step-4/code/backend/server/src/common/utils/test-helper.util.hbs", "backend/server/src/common/utils/test-helper.util.ts")
				.withTime({
					"start" : 3100,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/src/main.hbs", "backend/server/src/main.ts")
				.withTime({
					"start" : 3200,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/test/app.e2e-spec.hbs", "backend/server/test/app.e2e-spec.ts")
				.withTime({
					"start" : 3300,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/test/jest-e2e.hbs", "backend/server/test/jest-e2e.json")
				.withTime({
					"start" : 3400,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/tsconfig.build.hbs", "backend/server/tsconfig.build.json")
				.withTime({
					"start" : 3500,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/tsconfig.hbs", "backend/server/tsconfig.json")
				.withTime({
					"start" : 3600,
					"duration" : 100
				})
				.addCode("step-4/code/backend/server/tslint.hbs", "backend/server/tslint.json")
				.withTime({
					"start" : 3700,
					"duration" : 100
				})
				.addCode("step-4/code/docker-compose.hbs", "docker-compose.yml")
				.withTime({
					"start" : 3800,
					"duration" : 100
				})
				.addCode("step-4/code/.gitignore.hbs", ".gitignore")
					.withPartial("partial_1", "step-4/code/.gitignore_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/.storybook/addons.hbs", "frontend/.storybook/addons.js")
					.withPartial("partial_1", "step-4/code/frontend/.storybook/addons_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 900,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/.storybook/webpack.config.hbs", "frontend/.storybook/webpack.config.js")
					.withPartial("partial_1", "step-4/code/frontend/.storybook/webpack.config_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/.storybook/webpack.config_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/frontend/.storybook/webpack.config_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 1000,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/__sample.hbs", "frontend/__sample.sh")
				.withTime({
					"start" : 1100,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/package.hbs", "frontend/package.json")
					.withPartial("partial_1", "step-4/code/frontend/package_partials/partial_1.hbs", 0, 200)
					.withPartial("partial_2", "step-4/code/frontend/package_partials/partial_2.hbs", 200, 100)
				.withTime({
					"start" : 1200,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/@uikit/alerts/alert.stories.hbs", "frontend/src/@uikit/alerts/alert.stories.tsx")
				.withTime({
					"start" : 1400,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/@uikit/buttons/button.stories.hbs", "frontend/src/@uikit/buttons/button.stories.tsx")
				.withTime({
					"start" : 1500,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/@uikit/forms/form.stories.hbs", "frontend/src/@uikit/forms/form.stories.tsx")
				.withTime({
					"start" : 1600,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/@uikit/layouts/layout.stories.hbs", "frontend/src/@uikit/layouts/layout.stories.tsx")
				.withTime({
					"start" : 1700,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/@uikit/modals/modal.stories.hbs", "frontend/src/@uikit/modals/modal.stories.tsx")
				.withTime({
					"start" : 1800,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/@uikit/textboxes/textboxes.stories.hbs", "frontend/src/@uikit/textboxes/textboxes.stories.tsx")
				.withTime({
					"start" : 1900,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/assets/css/app.hbs", "frontend/src/assets/css/app.css")
				.withTime({
					"start" : 2000,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/assets/images/b.hbs", "frontend/src/assets/images/b.jpg")
				.withTime({
					"start" : 2200,
					"duration" : 800
				})
				.addCode("step-4/code/frontend/src/assets/images/b.hbs", "frontend/src/assets/images/b.png")
				.withTime({
					"start" : 3000,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/assets/images/del.hbs", "frontend/src/assets/images/del.png")
				.withTime({
					"start" : 3200,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/assets/images/dots.hbs", "frontend/src/assets/images/dots.png")
				.withTime({
					"start" : 3300,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/assets/images/gal.hbs", "frontend/src/assets/images/gal.png")
				.withTime({
					"start" : 3400,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/assets/images/noavatar.hbs", "frontend/src/assets/images/noavatar.png")
				.withTime({
					"start" : 3500,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.bdd.hbs", "frontend/src/components/board/Board.bdd.tsx")
				.withTime({
					"start" : 3600,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.component.hbs", "frontend/src/components/board/Board.component.tsx")
				.withTime({
					"start" : 3700,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.container.hbs", "frontend/src/components/board/Board.container.tsx")
				.withTime({
					"start" : 3800,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.redux.hbs", "frontend/src/components/board/Board.redux.tsx")
				.withTime({
					"start" : 4000,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.stories.hbs", "frontend/src/components/board/Board.stories.tsx")
				.withTime({
					"start" : 4100,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/components/board/Board.styles.hbs", "frontend/src/components/board/Board.styles.tsx")
				.withTime({
					"start" : 4300,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/board/Board.test.hbs", "frontend/src/components/board/Board.test.tsx")
				.withTime({
					"start" : 4400,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/card/card.component.hbs", "frontend/src/components/card/card.component.tsx")
					.withPartial("partial_1", "step-4/code/frontend/src/components/card/card.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/src/components/card/card.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/frontend/src/components/card/card.component_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-4/code/frontend/src/components/card/card.component_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-4/code/frontend/src/components/card/card.component_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-4/code/frontend/src/components/card/card.component_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-4/code/frontend/src/components/card/card.component_partials/partial_7.hbs", 600, 100)
				.withTime({
					"start" : 4500,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/components/card/card.stories.hbs", "frontend/src/components/card/card.stories.tsx")
					.withPartial("partial_1", "step-4/code/frontend/src/components/card/card.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/src/components/card/card.stories_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/frontend/src/components/card/card.stories_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-4/code/frontend/src/components/card/card.stories_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-4/code/frontend/src/components/card/card.stories_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-4/code/frontend/src/components/card/card.stories_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-4/code/frontend/src/components/card/card.stories_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-4/code/frontend/src/components/card/card.stories_partials/partial_8.hbs", 700, 100)
					.withPartial("partial_9", "step-4/code/frontend/src/components/card/card.stories_partials/partial_9.hbs", 800, 100)
					.withPartial("partial_10", "step-4/code/frontend/src/components/card/card.stories_partials/partial_10.hbs", 900, 100)
					.withPartial("partial_11", "step-4/code/frontend/src/components/card/card.stories_partials/partial_11.hbs", 1000, 100)
					.withPartial("partial_12", "step-4/code/frontend/src/components/card/card.stories_partials/partial_12.hbs", 1100, 100)
					.withPartial("partial_13", "step-4/code/frontend/src/components/card/card.stories_partials/partial_13.hbs", 1200, 100)
					.withPartial("partial_14", "step-4/code/frontend/src/components/card/card.stories_partials/partial_14.hbs", 1300, 100)
					.withPartial("partial_15", "step-4/code/frontend/src/components/card/card.stories_partials/partial_15.hbs", 1400, 100)
					.withPartial("partial_16", "step-4/code/frontend/src/components/card/card.stories_partials/partial_16.hbs", 1500, 100)
				.withTime({
					"start" : 4700,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.bdd.hbs", "frontend/src/components/cardlist/CardList.bdd.tsx")
				.withTime({
					"start" : 4900,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.component.hbs", "frontend/src/components/cardlist/CardList.component.tsx")
				.withTime({
					"start" : 5000,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.container.hbs", "frontend/src/components/cardlist/CardList.container.tsx")
				.withTime({
					"start" : 5100,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.redux.hbs", "frontend/src/components/cardlist/CardList.redux.tsx")
				.withTime({
					"start" : 5300,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.stories.hbs", "frontend/src/components/cardlist/CardList.stories.tsx")
				.withTime({
					"start" : 5400,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.styles.hbs", "frontend/src/components/cardlist/CardList.styles.tsx")
				.withTime({
					"start" : 5600,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/cardlist/CardList.test.hbs", "frontend/src/components/cardlist/CardList.test.tsx")
				.withTime({
					"start" : 5700,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.bdd.hbs", "frontend/src/components/draggablecard/DraggableCard.bdd.tsx")
				.withTime({
					"start" : 5800,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.component.hbs", "frontend/src/components/draggablecard/DraggableCard.component.tsx")
				.withTime({
					"start" : 5900,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.container.hbs", "frontend/src/components/draggablecard/DraggableCard.container.tsx")
				.withTime({
					"start" : 6000,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.redux.hbs", "frontend/src/components/draggablecard/DraggableCard.redux.tsx")
				.withTime({
					"start" : 6300,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.stories.hbs", "frontend/src/components/draggablecard/DraggableCard.stories.tsx")
				.withTime({
					"start" : 6400,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.styles.hbs", "frontend/src/components/draggablecard/DraggableCard.styles.tsx")
				.withTime({
					"start" : 6500,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/components/draggablecard/DraggableCard.test.hbs", "frontend/src/components/draggablecard/DraggableCard.test.tsx")
				.withTime({
					"start" : 6600,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/config/index.hbs", "frontend/src/config/index.ts")
				.withTime({
					"start" : 6700,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/example-stories/example.actions.stories.hbs", "frontend/src/example-stories/example.actions.stories.tsx")
					.withPartial("partial_1", "step-4/code/frontend/src/example-stories/example.actions.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/src/example-stories/example.actions.stories_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 6800,
					"duration" : 100
				})
				.addCode("step-4/code/frontend/src/example-stories/example.knobs.stories.hbs", "frontend/src/example-stories/example.knobs.stories.tsx")
					.withPartial("partial_1", "step-4/code/frontend/src/example-stories/example.knobs.stories_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 6900,
					"duration" : 300
				})
				.addCode("step-4/code/frontend/tsconfig.hbs", "frontend/tsconfig.json")
					.withPartial("partial_1", "step-4/code/frontend/tsconfig_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 7200,
					"duration" : 200
				})
				.addCode("step-4/code/frontend/webpack.common.hbs", "frontend/webpack.common.js")
					.withPartial("partial_1", "step-4/code/frontend/webpack.common_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/frontend/webpack.common_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/frontend/webpack.common_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-4/code/frontend/webpack.common_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-4/code/frontend/webpack.common_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-4/code/frontend/webpack.common_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-4/code/frontend/webpack.common_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-4/code/frontend/webpack.common_partials/partial_8.hbs", 700, 100)
					.withPartial("partial_9", "step-4/code/frontend/webpack.common_partials/partial_9.hbs", 800, 100)
					.withPartial("partial_10", "step-4/code/frontend/webpack.common_partials/partial_10.hbs", 900, 100)
					.withPartial("partial_11", "step-4/code/frontend/webpack.common_partials/partial_11.hbs", 1000, 100)
					.withPartial("partial_12", "step-4/code/frontend/webpack.common_partials/partial_12.hbs", 1100, 100)
					.withPartial("partial_13", "step-4/code/frontend/webpack.common_partials/partial_13.hbs", 1200, 100)
					.withPartial("partial_14", "step-4/code/frontend/webpack.common_partials/partial_14.hbs", 1300, 100)
					.withPartial("partial_15", "step-4/code/frontend/webpack.common_partials/partial_15.hbs", 1400, 100)
					.withPartial("partial_16", "step-4/code/frontend/webpack.common_partials/partial_16.hbs", 1500, 100)
				.withTime({
					"start" : 7400,
					"duration" : 200
				})
				.addCode("step-4/code/setup/_template_.hbs", "setup/_template_.sh")
					.withPartial("partial_1", "step-4/code/setup/_template__partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/setup/_template__partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-4/code/setup/_template__partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-4/code/setup/_template__partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-4/code/setup/_template__partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-4/code/setup/_template__partials/partial_6.hbs", 500, 100)
				.withTime({
					"start" : 7600,
					"duration" : 100
				})
				.addCode("step-4/code/setup/aws.hbs", "setup/aws.sh")
				.withTime({
					"start" : 7700,
					"duration" : 100
				})
				.addCode("step-4/code/setup/cicd.hbs", "setup/cicd.sh")
				.withTime({
					"start" : 7800,
					"duration" : 100
				})
				.addCode("step-4/code/setup/commitzen.hbs", "setup/commitzen.sh")
					.withPartial("partial_1", "step-4/code/setup/commitzen_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 7900,
					"duration" : 100
				})
				.addCode("step-4/code/setup/cypress.hbs", "setup/cypress.sh")
				.withTime({
					"start" : 8000,
					"duration" : 100
				})
				.addCode("step-4/code/setup/docker.hbs", "setup/docker.sh")
				.withTime({
					"start" : 8100,
					"duration" : 100
				})
				.addCode("step-4/code/setup/gitignore.hbs", "setup/gitignore.sh")
					.withPartial("partial_1", "step-4/code/setup/gitignore_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 8200,
					"duration" : 100
				})
				.addCode("step-4/code/setup/jest.hbs", "setup/jest.sh")
				.withTime({
					"start" : 8300,
					"duration" : 100
				})
				.addCode("step-4/code/setup/semantic-release.hbs", "setup/semantic-release.sh")
				.withTime({
					"start" : 8400,
					"duration" : 100
				})
				.addCode("step-4/code/setup/storybook.hbs", "setup/storybook.sh")
					.withPartial("partial_1", "step-4/code/setup/storybook_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/setup/storybook_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 8500,
					"duration" : 200
				})
				.addCode("step-4/code/setup/sxd/component.hbs", "setup/sxd/component.sh")
				.withTime({
					"start" : 8700,
					"duration" : 200
				})
				.addCode("step-4/code/setup/sxd/components/component.bdd.tsx.hbs", "setup/sxd/components/component.bdd.tsx.template")
				.withTime({
					"start" : 8900,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.container.tsx.hbs", "setup/sxd/components/component.container.tsx.template")
				.withTime({
					"start" : 9000,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.playbook.mdx.hbs", "setup/sxd/components/component.playbook.mdx.template")
				.withTime({
					"start" : 9100,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.redux.tsx.hbs", "setup/sxd/components/component.redux.tsx.template")
				.withTime({
					"start" : 9200,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.stories.tsx.hbs", "setup/sxd/components/component.stories.tsx.template")
				.withTime({
					"start" : 9300,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.styles.tsx.hbs", "setup/sxd/components/component.styles.tsx.template")
				.withTime({
					"start" : 9400,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.test.tsx.hbs", "setup/sxd/components/component.test.tsx.template")
				.withTime({
					"start" : 9500,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sxd/components/component.tsx.hbs", "setup/sxd/components/component.tsx.template")
				.withTime({
					"start" : 9600,
					"duration" : 100
				})
				.addCode("step-4/code/setup/typescript.hbs", "setup/typescript.sh")
					.withPartial("partial_1", "step-4/code/setup/typescript_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/setup/typescript_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 9700,
					"duration" : 100
				})
				.addCode("step-4/code/setup/webpack-loaders.hbs", "setup/webpack-loaders.sh")
					.withPartial("partial_1", "step-4/code/setup/webpack-loaders_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 9800,
					"duration" : 100
				})
				.addCode("step-4/code/setup/webpack-plugins.hbs", "setup/webpack-plugins.sh")
					.withPartial("partial_1", "step-4/code/setup/webpack-plugins_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 9900,
					"duration" : 100
				})
				.addCode("step-4/code/setup/webpack.hbs", "setup/webpack.sh")
					.withPartial("partial_1", "step-4/code/setup/webpack_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-4/code/setup/webpack_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 10000,
					"duration" : 100
				})
				.addCode("step-4/code/setup/docker.hbs", "setup/docker.sh")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-4/code/setup/jest.hbs", "setup/jest.sh")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sdk/package.hbs", "setup/sdk/package.json")
				.withTime({
					"start" : 900,
					"duration" : 100
				})
				.addCode("step-4/code/setup/sdk/playbook.hello.hbs", "setup/sdk/playbook.hello.json")
				.withTime({
					"start" : 1000,
					"duration" : 1300
				})
				.addCode("step-4/code/setup/sdk/playbook.hbs", "setup/sdk/playbook.json")
				.withTime({
					"start" : 2300,
					"duration" : 200
				})
				.addCode("step-4/code/setup/sdk/playbook.sdk.hbs", "setup/sdk/playbook.sdk.js")
				.withTime({
					"start" : 2500,
					"duration" : 400
				})
				.addCode("step-4/code/setup/sdk/screenscrape-mozilla-js-v2.hbs", "setup/sdk/screenscrape-mozilla-js-v2.js")
				.withTime({
					"start" : 2900,
					"duration" : 200
				})
				.addCode("step-4/code/setup/sdk/screenscrape-mozilla-js.hbs", "setup/sdk/screenscrape-mozilla-js.js")
				.withTime({
					"start" : 3100,
					"duration" : 100
				})
				.addCli()
					.withCommand("git checkout -b feature/plan")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-5")
				.addCode("step-5/code/setup/jest.hbs", "setup/jest.sh")
					.withPartial("partial_1", "step-5/code/setup/jest_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCli()
					.withCommand("git checkout -b feature/setup/jest-and-docker")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-6")
				.addDescriptionFromMdFile(path.join(__dirname, "step-6/description/docs/01_setup/01_setup_06_jest.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 300
				})
				.addCode("step-6/code/frontend/package.hbs", "frontend/package.json")
					.withPartial("partial_1", "step-6/code/frontend/package_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-6/code/frontend/package_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-6/code/frontend/package_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-6/code/frontend/package_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-6/code/frontend/package_partials/partial_5.hbs", 400, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-6/code/frontend/jest.config.hbs", "frontend/jest.config.js")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-6/code/frontend/tsconfig.hbs", "frontend/tsconfig.json")
					.withPartial("partial_1", "step-6/code/frontend/tsconfig_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-6/code/frontend/tsconfig_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-6/code/frontend/tsconfig_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-6/code/frontend/tsconfig_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-6/code/frontend/tsconfig_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-6/code/frontend/tsconfig_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-6/code/frontend/tsconfig_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-6/code/frontend/tsconfig_partials/partial_8.hbs", 700, 100)
					.withPartial("partial_9", "step-6/code/frontend/tsconfig_partials/partial_9.hbs", 800, 100)
					.withPartial("partial_10", "step-6/code/frontend/tsconfig_partials/partial_10.hbs", 900, 100)
					.withPartial("partial_11", "step-6/code/frontend/tsconfig_partials/partial_11.hbs", 1000, 100)
					.withPartial("partial_12", "step-6/code/frontend/tsconfig_partials/partial_12.hbs", 1100, 100)
					.withPartial("partial_13", "step-6/code/frontend/tsconfig_partials/partial_13.hbs", 1200, 100)
					.withPartial("partial_14", "step-6/code/frontend/tsconfig_partials/partial_14.hbs", 1300, 100)
					.withPartial("partial_15", "step-6/code/frontend/tsconfig_partials/partial_15.hbs", 1400, 100)
					.withPartial("partial_16", "step-6/code/frontend/tsconfig_partials/partial_16.hbs", 1500, 100)
					.withPartial("partial_17", "step-6/code/frontend/tsconfig_partials/partial_17.hbs", 1600, 100)
					.withPartial("partial_18", "step-6/code/frontend/tsconfig_partials/partial_18.hbs", 1700, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCli()
					.withCommand("git checkout -b feature/frontend/test-setup")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-7")
				.addCli()
					.withCommand("git checkout -b feature/frontend/setup-done")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-8")
				.addDescriptionFromMdFile(path.join(__dirname, "step-8/description/frontend/src/components/card/card.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-8/code/frontend/src/components/card/card.bdd.hbs", "frontend/src/components/card/card.bdd.tsx")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-8/code/frontend/src/components/card/card.hbs", "frontend/src/components/card/card.feature")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-8/code/frontend/src/components/card/card.component.hbs", "frontend/src/components/card/card.component.tsx")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-8/code/frontend/src/components/card/card.stories.hbs", "frontend/src/components/card/card.stories.tsx")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-8/code/frontend/src/components/card/card.styles.hbs", "frontend/src/components/card/card.styles.css")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-8/code/frontend/src/components/card/card.template.hbs", "frontend/src/components/card/card.template.hbs")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-8/code/frontend/src/components/card/card.template.hbs", "frontend/src/components/card/card.template.json")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-8/code/frontend/src/components/card/card.template-wrapper.hbs", "frontend/src/components/card/card.template-wrapper.hbs")
				.withTime({
					"start" : 0,
					"duration" : 0
				})
				.addCode("step-8/code/frontend/package.hbs", "frontend/package.json")
					.withPartial("partial_1", "step-8/code/frontend/package_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-8/code/frontend/package_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-8/code/frontend/jest.config.hbs", "frontend/jest.config.js")
					.withPartial("partial_1", "step-8/code/frontend/jest.config_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-8/code/frontend/tsconfig.hbs", "frontend/tsconfig.json")
					.withPartial("partial_1", "step-8/code/frontend/tsconfig_partials/partial_1.hbs", 0, 100)
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
			.addStep("step-9")
				.addDescriptionFromMdFile(path.join(__dirname, "step-9/description/frontend/src/components/card/card.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-9/description/frontend/src/components/card/card.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-9/code/frontend/src/components/card/card.bdd.hbs", "frontend/src/components/card/card.bdd.tsx")
					.withPartial("partial_1", "step-9/code/frontend/src/components/card/card.bdd_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-9/code/frontend/src/components/card/card.component.hbs", "frontend/src/components/card/card.component.tsx")
					.withPartial("partial_1", "step-9/code/frontend/src/components/card/card.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-9/code/frontend/src/components/card/card.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-9/code/frontend/src/components/card/card.component_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-9/code/frontend/src/components/card/card.stories.hbs", "frontend/src/components/card/card.stories.tsx")
					.withPartial("partial_1", "step-9/code/frontend/src/components/card/card.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-9/code/frontend/src/components/card/card.stories_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-9/code/frontend/src/components/card/card.stories_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 100,
					"duration" : 100
				})
				.addCode("step-9/code/frontend/src/components/card/card.template.hbs", "frontend/src/components/card/card.template.hbs")
					.withPartial("partial_1", "step-9/code/frontend/src/components/card/card.template_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-9/code/frontend/src/components/card/card.template_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-9/code/frontend/src/components/card/card.template_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-9/code/frontend/src/components/card/card.template-wrapper.hbs", "frontend/src/components/card/card.template-wrapper.hbs")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-9/code/frontend/src/components/card/card.test.hbs", "frontend/src/components/card/card.test.tsx")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-9/code/frontend/package.hbs", "frontend/package.json")
					.withPartial("partial_1", "step-9/code/frontend/package_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-9/code/frontend/src/common/utils/test-helpers.hbs", "frontend/src/common/utils/test-helpers.ts")
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
			.addStep("step-10")
				.addCli()
					.withCommand("git checkout -b feature/frontend/card")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-11")
				.addDescriptionFromMdFile(path.join(__dirname, "step-11/description/frontend/src/components/card-list/card-list.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-11/code/frontend/src/components/card-list/card-list.hbs", "frontend/src/components/card-list/card-list.feature")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-11/code/frontend/src/components/card-list/card-list.bdd.hbs", "frontend/src/components/card-list/card-list.bdd.tsx")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-11/code/frontend/src/components/card-list/card-list.stories.hbs", "frontend/src/components/card-list/card-list.stories.tsx")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-11/code/frontend/src/components/card-list/card-list.component.hbs", "frontend/src/components/card-list/card-list.component.tsx")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-11/code/frontend/src/components/card-list/card-list.styles.hbs", "frontend/src/components/card-list/card-list.styles.css")
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
			.addStep("step-12")
				.addCode("step-12/code/setup/create_playbook.hbs", "setup/create_playbook.sh")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCli()
					.withCommand("git checkout -b feature/common/lexicographic-order-generator")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-13")
				.addCli()
					.withCommand("git checkout -b feature/plan")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-14")
				.addDescriptionFromMdFile(path.join(__dirname, "step-14/description/frontend/src/components/card-list/card-list.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-14/code/frontend/src/components/card-list/card-list.bdd.hbs", "frontend/src/components/card-list/card-list.bdd.tsx")
					.withPartial("partial_1", "step-14/code/frontend/src/components/card-list/card-list.bdd_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-14/code/frontend/src/components/card-list/card-list.stories.hbs", "frontend/src/components/card-list/card-list.stories.tsx")
					.withPartial("partial_1", "step-14/code/frontend/src/components/card-list/card-list.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-14/code/frontend/src/components/card-list/card-list.stories_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-14/code/frontend/src/components/card-list/card-list.stories_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-14/code/frontend/src/components/card-list/card-list.component.hbs", "frontend/src/components/card-list/card-list.component.tsx")
					.withPartial("partial_1", "step-14/code/frontend/src/components/card-list/card-list.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-14/code/frontend/src/components/card-list/card-list.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-14/code/frontend/src/components/card-list/card-list.component_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-14/code/frontend/src/components/card-list/card-list.component_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-14/code/frontend/src/components/card-list/card-list.component_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-14/code/frontend/src/components/card-list/card-list.component_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-14/code/frontend/src/components/card-list/card-list.component_partials/partial_7.hbs", 600, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-14/code/frontend/src/components/card-list/card-list.test.hbs", "frontend/src/components/card-list/card-list.test.tsx")
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-14/code/frontend/src/components/card-list/card-list.styles.hbs", "frontend/src/components/card-list/card-list.styles.css")
					.withPartial("partial_1", "step-14/code/frontend/src/components/card-list/card-list.styles_partials/partial_1.hbs", 0, 100)
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
			.addStep("step-15")
				.addDescriptionFromMdFile(path.join(__dirname, "step-15/description/frontend/src/components/card-list/card-list.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-15/code/frontend/package.hbs", "frontend/package.json")
					.withPartial("partial_1", "step-15/code/frontend/package_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-15/code/frontend/package_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-15/code/frontend/src/components/card-list/card-list.component.hbs", "frontend/src/components/card-list/card-list.component.tsx")
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
				.addCode("step-15/code/frontend/src/components/card-list/card-list.bdd.hbs", "frontend/src/components/card-list/card-list.bdd.tsx")
					.withPartial("partial_1", "step-15/code/frontend/src/components/card-list/card-list.bdd_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-15/code/frontend/src/components/card-list/card-list.bdd_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-15/code/frontend/src/components/card-list/card-list.test.hbs", "frontend/src/components/card-list/card-list.test.tsx")
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
				.addCode("step-15/code/frontend/src/components/card-list/card-list.styles.hbs", "frontend/src/components/card-list/card-list.styles.css")
					.withPartial("partial_1", "step-15/code/frontend/src/components/card-list/card-list.styles_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-15/code/frontend/src/components/card-list/card-list.stories.hbs", "frontend/src/components/card-list/card-list.stories.tsx")
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
			.addStep("step-16")
				.addDescriptionFromMdFile(path.join(__dirname, "step-16/description/frontend/src/components/board/board.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-16/code/frontend/src/components/card-list/card-list.styles.hbs", "frontend/src/components/card-list/card-list.styles.css")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-16/code/frontend/src/components/board/board.hbs", "frontend/src/components/board/board.feature")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-16/code/frontend/src/components/board/board.bdd.hbs", "frontend/src/components/board/board.bdd.tsx")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-16/code/frontend/src/components/board/board.stories.hbs", "frontend/src/components/board/board.stories.tsx")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-16/code/frontend/src/components/board/board.component.hbs", "frontend/src/components/board/board.component.tsx")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-16/code/frontend/src/components/board/board.styles.hbs", "frontend/src/components/board/board.styles.css")
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
			.addStep("step-17")
				.addDescriptionFromMdFile(path.join(__dirname, "step-17/description/frontend/src/components/board/board.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-17/code/frontend/src/components/board/board.bdd.hbs", "frontend/src/components/board/board.bdd.tsx")
					.withPartial("partial_1", "step-17/code/frontend/src/components/board/board.bdd_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-17/code/frontend/src/components/board/board.bdd_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-17/code/frontend/src/components/board/board.stories.hbs", "frontend/src/components/board/board.stories.tsx")
					.withPartial("partial_1", "step-17/code/frontend/src/components/board/board.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-17/code/frontend/src/components/board/board.stories_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-17/code/frontend/src/components/board/board.stories_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-17/code/frontend/src/components/board/board.stories_partials/partial_4.hbs", 300, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-17/code/frontend/src/components/board/board.test.hbs", "frontend/src/components/board/board.test.tsx")
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-17/code/frontend/src/components/board/board.component.hbs", "frontend/src/components/board/board.component.tsx")
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
			.addStep("step-18")
				.addDescriptionFromMdFile(path.join(__dirname, "step-18/description/frontend/src/components/card-list/card-list.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-18/description/frontend/src/components/board/board.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-18/code/frontend/src/components/card-list/card-list.bdd.hbs", "frontend/src/components/card-list/card-list.bdd.tsx")
					.withPartial("partial_1", "step-18/code/frontend/src/components/card-list/card-list.bdd_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-18/code/frontend/src/components/card-list/card-list.bdd_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-18/code/frontend/src/components/card-list/card-list.test.hbs", "frontend/src/components/card-list/card-list.test.tsx")
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
				.addCode("step-18/code/frontend/src/components/card-list/card-list.stories.hbs", "frontend/src/components/card-list/card-list.stories.tsx")
					.withPartial("partial_1", "step-18/code/frontend/src/components/card-list/card-list.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-18/code/frontend/src/components/card-list/card-list.stories_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-18/code/frontend/src/components/card-list/card-list.stories_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-18/code/frontend/src/components/card-list/card-list.component.hbs", "frontend/src/components/card-list/card-list.component.tsx")
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
				.addCode("step-18/code/frontend/src/components/board/board.bdd.hbs", "frontend/src/components/board/board.bdd.tsx")
					.withPartial("partial_1", "step-18/code/frontend/src/components/board/board.bdd_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-18/code/frontend/src/components/board/board.bdd_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-18/code/frontend/src/components/board/board.test.hbs", "frontend/src/components/board/board.test.tsx")
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
				.addCode("step-18/code/frontend/src/components/board/board.stories.hbs", "frontend/src/components/board/board.stories.tsx")
					.withPartial("partial_1", "step-18/code/frontend/src/components/board/board.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-18/code/frontend/src/components/board/board.stories_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-18/code/frontend/src/components/board/board.component.hbs", "frontend/src/components/board/board.component.tsx")
					.withPartial("partial_1", "step-18/code/frontend/src/components/board/board.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-18/code/frontend/src/components/board/board.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-18/code/frontend/src/components/board/board.component_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-18/code/frontend/src/components/board/board.component_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-18/code/frontend/src/components/board/board.component_partials/partial_5.hbs", 400, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-18/code/frontend/src/components/board/board.styles.hbs", "frontend/src/components/board/board.styles.css")
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
			.addStep("step-19")
				.addDescriptionFromMdFile(path.join(__dirname, "step-19/description/frontend/src/components/board/board.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-19/code/frontend/src/common/utils/lexicographic.util.hbs", "frontend/src/common/utils/lexicographic.util.ts")
				.withTime({
					"start" : 0,
					"duration" : 300
				})
				.addCode("step-19/code/frontend/src/components/board/board.stories.hbs", "frontend/src/components/board/board.stories.tsx")
					.withPartial("partial_1", "step-19/code/frontend/src/components/board/board.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-19/code/frontend/src/components/board/board.stories_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-19/code/frontend/src/components/board/board.stories_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-19/code/frontend/src/components/board/board.bdd.hbs", "frontend/src/components/board/board.bdd.tsx")
					.withPartial("partial_1", "step-19/code/frontend/src/components/board/board.bdd_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-19/code/frontend/src/components/board/board.bdd_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-19/code/frontend/src/components/board/board.bdd_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-19/code/frontend/src/components/board/board.test.hbs", "frontend/src/components/board/board.test.tsx")
					.withPartial("partial_1", "step-19/code/frontend/src/components/board/board.test_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-19/code/frontend/src/components/board/board.test_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-19/code/frontend/src/components/board/board.test_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-19/code/frontend/src/components/board/board.test_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-19/code/frontend/src/components/board/board.test_partials/partial_5.hbs", 400, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-19/code/frontend/src/components/board/board.component.hbs", "frontend/src/components/board/board.component.tsx")
					.withPartial("partial_1", "step-19/code/frontend/src/components/board/board.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-19/code/frontend/src/components/board/board.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-19/code/frontend/src/components/board/board.component_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-19/code/frontend/src/components/board/board.component_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-19/code/frontend/src/components/board/board.component_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-19/code/frontend/src/components/board/board.component_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-19/code/frontend/src/components/board/board.component_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-19/code/frontend/src/components/board/board.component_partials/partial_8.hbs", 700, 100)
					.withPartial("partial_9", "step-19/code/frontend/src/components/board/board.component_partials/partial_9.hbs", 800, 100)
					.withPartial("partial_10", "step-19/code/frontend/src/components/board/board.component_partials/partial_10.hbs", 900, 200)
				.withTime({
					"start" : 0,
					"duration" : 400
				})
				.addCli()
					.withCommand("git checkout -b feature/frontend/board")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-20")
				.addDescriptionFromMdFile(path.join(__dirname, "step-20/description/frontend/src/components/card-list/card-list.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-20/description/frontend/src/components/board/board.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 300
				})
				.addCode("step-20/code/frontend/src/components/card-list/card-list.bdd.hbs", "frontend/src/components/card-list/card-list.bdd.tsx")
					.withPartial("partial_1", "step-20/code/frontend/src/components/card-list/card-list.bdd_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-20/code/frontend/src/components/card-list/card-list.bdd_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-20/code/frontend/src/components/card-list/card-list.bdd_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-20/code/frontend/src/components/card-list/card-list.test.hbs", "frontend/src/components/card-list/card-list.test.tsx")
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
				.addCode("step-20/code/frontend/src/components/card-list/card-list.stories.hbs", "frontend/src/components/card-list/card-list.stories.tsx")
					.withPartial("partial_1", "step-20/code/frontend/src/components/card-list/card-list.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-20/code/frontend/src/components/card-list/card-list.stories_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-20/code/frontend/src/components/card-list/card-list.stories_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-20/code/frontend/src/components/card-list/card-list.component.hbs", "frontend/src/components/card-list/card-list.component.tsx")
					.withPartial("partial_1", "step-20/code/frontend/src/components/card-list/card-list.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-20/code/frontend/src/components/card-list/card-list.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-20/code/frontend/src/components/card-list/card-list.component_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-20/code/frontend/src/components/card-list/card-list.styles.hbs", "frontend/src/components/card-list/card-list.styles.css")
					.withPartial("partial_1", "step-20/code/frontend/src/components/card-list/card-list.styles_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-20/code/frontend/src/components/board/board.bdd.hbs", "frontend/src/components/board/board.bdd.tsx")
					.withPartial("partial_1", "step-20/code/frontend/src/components/board/board.bdd_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-20/code/frontend/src/components/board/board.bdd_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-20/code/frontend/src/components/board/board.bdd_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-20/code/frontend/src/components/board/board.bdd_partials/partial_4.hbs", 300, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-20/code/frontend/src/components/board/board.test.hbs", "frontend/src/components/board/board.test.tsx")
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
				.addCode("step-20/code/frontend/src/components/board/board.stories.hbs", "frontend/src/components/board/board.stories.tsx")
					.withPartial("partial_1", "step-20/code/frontend/src/components/board/board.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-20/code/frontend/src/components/board/board.stories_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-20/code/frontend/src/components/board/board.stories_partials/partial_3.hbs", 200, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-20/code/frontend/src/components/board/board.component.hbs", "frontend/src/components/board/board.component.tsx")
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
			.addStep("step-21")
				.addDescriptionFromMdFile(path.join(__dirname, "step-21/description/frontend/src/components/card-list/card-list.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addDescriptionFromMdFile(path.join(__dirname, "step-21/description/frontend/src/components/board/board.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 300
				})
				.addCode("step-21/code/frontend/src/components/card-list/card-list.test.hbs", "frontend/src/components/card-list/card-list.test.tsx")
					.withPartial("partial_1", "step-21/code/frontend/src/components/card-list/card-list.test_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-21/code/frontend/src/components/card-list/card-list.component.hbs", "frontend/src/components/card-list/card-list.component.tsx")
					.withPartial("partial_1", "step-21/code/frontend/src/components/card-list/card-list.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-21/code/frontend/src/components/card-list/card-list.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-21/code/frontend/src/components/card-list/card-list.component_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-21/code/frontend/src/components/card-list/card-list.component_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-21/code/frontend/src/components/card-list/card-list.component_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-21/code/frontend/src/components/card-list/card-list.component_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-21/code/frontend/src/components/card-list/card-list.component_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-21/code/frontend/src/components/card-list/card-list.component_partials/partial_8.hbs", 700, 100)
				.withTime({
					"start" : 0,
					"duration" : 300
				})
				.addCode("step-21/code/frontend/src/components/board/board.component.hbs", "frontend/src/components/board/board.component.tsx")
					.withPartial("partial_1", "step-21/code/frontend/src/components/board/board.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-21/code/frontend/src/components/board/board.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-21/code/frontend/src/components/board/board.component_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-21/code/frontend/src/components/board/board.component_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-21/code/frontend/src/components/board/board.component_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-21/code/frontend/src/components/board/board.component_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-21/code/frontend/src/components/board/board.component_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-21/code/frontend/src/components/board/board.component_partials/partial_8.hbs", 700, 100)
					.withPartial("partial_9", "step-21/code/frontend/src/components/board/board.component_partials/partial_9.hbs", 800, 100)
					.withPartial("partial_10", "step-21/code/frontend/src/components/board/board.component_partials/partial_10.hbs", 900, 100)
					.withPartial("partial_11", "step-21/code/frontend/src/components/board/board.component_partials/partial_11.hbs", 1000, 100)
					.withPartial("partial_12", "step-21/code/frontend/src/components/board/board.component_partials/partial_12.hbs", 1100, 100)
					.withPartial("partial_13", "step-21/code/frontend/src/components/board/board.component_partials/partial_13.hbs", 1200, 100)
					.withPartial("partial_14", "step-21/code/frontend/src/components/board/board.component_partials/partial_14.hbs", 1300, 100)
					.withPartial("partial_15", "step-21/code/frontend/src/components/board/board.component_partials/partial_15.hbs", 1400, 100)
					.withPartial("partial_16", "step-21/code/frontend/src/components/board/board.component_partials/partial_16.hbs", 1500, 100)
					.withPartial("partial_17", "step-21/code/frontend/src/components/board/board.component_partials/partial_17.hbs", 1600, 100)
					.withPartial("partial_18", "step-21/code/frontend/src/components/board/board.component_partials/partial_18.hbs", 1700, 100)
					.withPartial("partial_19", "step-21/code/frontend/src/components/board/board.component_partials/partial_19.hbs", 1800, 100)
					.withPartial("partial_20", "step-21/code/frontend/src/components/board/board.component_partials/partial_20.hbs", 1900, 100)
					.withPartial("partial_21", "step-21/code/frontend/src/components/board/board.component_partials/partial_21.hbs", 2000, 100)
					.withPartial("partial_22", "step-21/code/frontend/src/components/board/board.component_partials/partial_22.hbs", 2100, 100)
					.withPartial("partial_23", "step-21/code/frontend/src/components/board/board.component_partials/partial_23.hbs", 2200, 100)
					.withPartial("partial_24", "step-21/code/frontend/src/components/board/board.component_partials/partial_24.hbs", 2300, 100)
					.withPartial("partial_25", "step-21/code/frontend/src/components/board/board.component_partials/partial_25.hbs", 2400, 100)
					.withPartial("partial_26", "step-21/code/frontend/src/components/board/board.component_partials/partial_26.hbs", 2500, 100)
					.withPartial("partial_27", "step-21/code/frontend/src/components/board/board.component_partials/partial_27.hbs", 2600, 100)
					.withPartial("partial_28", "step-21/code/frontend/src/components/board/board.component_partials/partial_28.hbs", 2700, 100)
					.withPartial("partial_29", "step-21/code/frontend/src/components/board/board.component_partials/partial_29.hbs", 2800, 100)
					.withPartial("partial_30", "step-21/code/frontend/src/components/board/board.component_partials/partial_30.hbs", 2900, 100)
					.withPartial("partial_31", "step-21/code/frontend/src/components/board/board.component_partials/partial_31.hbs", 3000, 100)
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
			.addStep("step-22")
				.addCode("step-22/code/frontend/package.hbs", "frontend/package.json")
					.withPartial("partial_1", "step-22/code/frontend/package_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-22/code/frontend/package_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-22/code/frontend/src/services/react-beautiful-dnd/responders.service.test.hbs", "frontend/src/services/react-beautiful-dnd/responders.service.test.ts")
				.withTime({
					"start" : 0,
					"duration" : 1100
				})
				.addCode("step-22/code/frontend/src/services/react-beautiful-dnd/responders.service.hbs", "frontend/src/services/react-beautiful-dnd/responders.service.ts")
				.withTime({
					"start" : 0,
					"duration" : 500
				})
				.addCli()
					.withCommand("git checkout -b feature/frontend/services/react-beautiful-dnd")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-23")
				.addDescriptionFromMdFile(path.join(__dirname, "step-23/description/frontend/src/components/board/board.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-23/code/frontend/src/components/board/board.component.hbs", "frontend/src/components/board/board.component.tsx")
					.withPartial("partial_1", "step-23/code/frontend/src/components/board/board.component_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-23/code/frontend/src/components/board/board.component_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-23/code/frontend/src/components/board/board.component_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-23/code/frontend/src/components/board/board.component_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-23/code/frontend/src/components/board/board.component_partials/partial_5.hbs", 400, 100)
					.withPartial("partial_6", "step-23/code/frontend/src/components/board/board.component_partials/partial_6.hbs", 500, 100)
					.withPartial("partial_7", "step-23/code/frontend/src/components/board/board.component_partials/partial_7.hbs", 600, 100)
					.withPartial("partial_8", "step-23/code/frontend/src/components/board/board.component_partials/partial_8.hbs", 700, 100)
					.withPartial("partial_9", "step-23/code/frontend/src/components/board/board.component_partials/partial_9.hbs", 800, 100)
					.withPartial("partial_10", "step-23/code/frontend/src/components/board/board.component_partials/partial_10.hbs", 900, 100)
					.withPartial("partial_11", "step-23/code/frontend/src/components/board/board.component_partials/partial_11.hbs", 1000, 100)
				.withTime({
					"start" : 0,
					"duration" : 400
				})
				.addCode("step-23/code/frontend/src/components/board/board.stories.hbs", "frontend/src/components/board/board.stories.tsx")
					.withPartial("partial_1", "step-23/code/frontend/src/components/board/board.stories_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-23/code/frontend/src/components/board/board.stories_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-23/code/frontend/src/components/board/board.stories_partials/partial_3.hbs", 200, 100)
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
			.addStep("step-24")
				.addDescriptionFromMdFile(path.join(__dirname, "step-24/description/frontend/src/components/card-list/card-list.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-24/code/frontend/src/components/card-list/card-list.stories.hbs", "frontend/src/components/card-list/card-list.stories.tsx")
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
				.addCode("step-24/code/frontend/src/components/card-list/card-list.component.hbs", "frontend/src/components/card-list/card-list.component.tsx")
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
			.addStep("step-25")
				.addCode("step-25/code/setup/jest.hbs", "setup/jest.sh")
					.withPartial("partial_1", "step-25/code/setup/jest_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCli()
					.withCommand("git checkout -b feature/setup/jest-and-docker")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
			.addStep("step-26")
				.addDescriptionFromMdFile(path.join(__dirname, "step-26/description/frontend/src/pages/board-page/board-page.playbook.mdx"))
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/package.hbs", "frontend/package.json")
					.withPartial("partial_1", "step-26/code/frontend/package_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-26/code/frontend/package_partials/partial_2.hbs", 100, 100)
					.withPartial("partial_3", "step-26/code/frontend/package_partials/partial_3.hbs", 200, 100)
					.withPartial("partial_4", "step-26/code/frontend/package_partials/partial_4.hbs", 300, 100)
					.withPartial("partial_5", "step-26/code/frontend/package_partials/partial_5.hbs", 400, 100)
				.withTime({
					"start" : 0,
					"duration" : 200
				})
				.addCode("step-26/code/frontend/tsconfig.hbs", "frontend/tsconfig.json")
					.withPartial("partial_1", "step-26/code/frontend/tsconfig_partials/partial_1.hbs", 0, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress.hbs", "frontend/cypress.json")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/fixtures/example.hbs", "frontend/cypress/fixtures/example.json")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/actions.spec.hbs", "frontend/cypress/integration/examples/actions.spec.js")
				.withTime({
					"start" : 100,
					"duration" : 400
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/aliasing.spec.hbs", "frontend/cypress/integration/examples/aliasing.spec.js")
				.withTime({
					"start" : 500,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/assertions.spec.hbs", "frontend/cypress/integration/examples/assertions.spec.js")
				.withTime({
					"start" : 600,
					"duration" : 200
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/connectors.spec.hbs", "frontend/cypress/integration/examples/connectors.spec.js")
				.withTime({
					"start" : 800,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/cookies.spec.hbs", "frontend/cypress/integration/examples/cookies.spec.js")
				.withTime({
					"start" : 900,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/cypress_api.spec.hbs", "frontend/cypress/integration/examples/cypress_api.spec.js")
				.withTime({
					"start" : 1000,
					"duration" : 300
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/files.spec.hbs", "frontend/cypress/integration/examples/files.spec.js")
				.withTime({
					"start" : 1300,
					"duration" : 200
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/local_storage.spec.hbs", "frontend/cypress/integration/examples/local_storage.spec.js")
				.withTime({
					"start" : 1500,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/location.spec.hbs", "frontend/cypress/integration/examples/location.spec.js")
				.withTime({
					"start" : 1600,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/misc.spec.hbs", "frontend/cypress/integration/examples/misc.spec.js")
				.withTime({
					"start" : 1700,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/navigation.spec.hbs", "frontend/cypress/integration/examples/navigation.spec.js")
				.withTime({
					"start" : 1800,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/network_requests.spec.hbs", "frontend/cypress/integration/examples/network_requests.spec.js")
				.withTime({
					"start" : 1900,
					"duration" : 300
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/querying.spec.hbs", "frontend/cypress/integration/examples/querying.spec.js")
				.withTime({
					"start" : 2200,
					"duration" : 200
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/spies_stubs_clocks.spec.hbs", "frontend/cypress/integration/examples/spies_stubs_clocks.spec.js")
				.withTime({
					"start" : 2400,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/traversal.spec.hbs", "frontend/cypress/integration/examples/traversal.spec.js")
				.withTime({
					"start" : 2500,
					"duration" : 200
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/utilities.spec.hbs", "frontend/cypress/integration/examples/utilities.spec.js")
				.withTime({
					"start" : 2700,
					"duration" : 200
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/viewport.spec.hbs", "frontend/cypress/integration/examples/viewport.spec.js")
				.withTime({
					"start" : 2900,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/waiting.spec.hbs", "frontend/cypress/integration/examples/waiting.spec.js")
				.withTime({
					"start" : 3000,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/examples/window.spec.hbs", "frontend/cypress/integration/examples/window.spec.js")
				.withTime({
					"start" : 3100,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/support/commands.hbs", "frontend/cypress/support/commands.js")
				.withTime({
					"start" : 3200,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/support/index.hbs", "frontend/cypress/support/index.js")
				.withTime({
					"start" : 3300,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/tsconfig.hbs", "frontend/cypress/tsconfig.json")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/plugins/cy-ts-preprocessor.hbs", "frontend/cypress/plugins/cy-ts-preprocessor.js")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/plugins/index.hbs", "frontend/cypress/plugins/index.js")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/pages/board-page.hbs", "frontend/cypress/integration/pages/board-page.feature")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/cypress/integration/pages/board-page/board-page.spec.hbs", "frontend/cypress/integration/pages/board-page/board-page.spec.ts")
				.withTime({
					"start" : 0,
					"duration" : 400
				})
				.addCode("step-26/code/frontend/src/index.hbs", "frontend/src/index.tsx")
					.withPartial("partial_1", "step-26/code/frontend/src/index_partials/partial_1.hbs", 0, 100)
					.withPartial("partial_2", "step-26/code/frontend/src/index_partials/partial_2.hbs", 100, 100)
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCode("step-26/code/frontend/src/pages/board-page/board-page.component.hbs", "frontend/src/pages/board-page/board-page.component.tsx")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
				.addCli()
					.withCommand("git checkout -b feature/frontend/pages/board")
				.withTime({
					"start" : 0,
					"duration" : 100
				})
	.write(path.join(__dirname, "playbook.json"));