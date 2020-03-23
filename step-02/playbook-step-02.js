const path = require('path');

module.exports = step("step-02")
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/01_setup/01_setup_01_webpack.mdx"))
					.withTime({
						"start" : 500,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/01_setup/01_setup_02_typescript.mdx"))
					.withTime({
						"start" : 600,
						"duration" : 200
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/01_setup/01_setup_04_storybook.mdx"))
					.withTime({
						"start" : 800,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/01_setup/01_setup_lerna.mdx"))
					.withTime({
						"start" : 900,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/ProjectPlan.mdx"))
					.withTime({
						"start" : 1000,
						"duration" : 400
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/src/components/card/card.playbook.mdx"))
					.withTime({
						"start" : 2500,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/ProjectPlan.mdx"))
					.withTime({
						"start" : 100,
						"duration" : 400
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/readme.md"))
					.withTime({
						"start" : 1200,
						"duration" : 400
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/card/card.playbook.mdx"))
					.withTime({
						"start" : 1800,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/backend/readme.md"))
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/readme.md"))
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/backend/readme.md"))
					.withTime({
						"start" : 100,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/backend/readme.md"))
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/backend/readme.md"))
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/backend/server/README.md"))
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/.storybook/addons.hbs", ".storybook/addons.js")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/.storybook/config.hbs", ".storybook/config.js")
					.withTime({
						"start" : 100,
						"duration" : 100
					})
					.addCode("/code/.storybook/webpack.config.hbs", ".storybook/webpack.config.js")
					.withTime({
						"start" : 200,
						"duration" : 100
					})
					.addCode("/code/.webpack/loaders/example-loader.hbs", ".webpack/loaders/example-loader.js")
					.withTime({
						"start" : 300,
						"duration" : 100
					})
					.addCode("/code/.webpack/plugins/FileListPlugin.hbs", ".webpack/plugins/FileListPlugin.js")
					.withTime({
						"start" : 400,
						"duration" : 100
					})
					.addCode("/code/package.hbs", "package.json")
						.withPartial("partial_1", "step-02/code/package_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-02/code/package_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-02/code/package_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-02/code/package_partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-02/code/package_partials/partial_5.hbs", 400, 100)
					.withTime({
						"start" : 1400,
						"duration" : 100
					})
					.addCode("/code/setup/_template_.hbs", "setup/_template_.sh")
					.withTime({
						"start" : 1500,
						"duration" : 100
					})
					.addCode("/code/setup/gitignore.hbs", "setup/gitignore.sh")
					.withTime({
						"start" : 1600,
						"duration" : 100
					})
					.addCode("/code/setup/storybook.hbs", "setup/storybook.sh")
						.withPartial("partial_1", "step-02/code/setup/storybook_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-02/code/setup/storybook_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 1700,
						"duration" : 200
					})
					.addCode("/code/setup/typescript.hbs", "setup/typescript.sh")
					.withTime({
						"start" : 1900,
						"duration" : 100
					})
					.addCode("/code/setup/webpack-loaders.hbs", "setup/webpack-loaders.sh")
					.withTime({
						"start" : 2000,
						"duration" : 100
					})
					.addCode("/code/setup/webpack-plugins.hbs", "setup/webpack-plugins.sh")
					.withTime({
						"start" : 2100,
						"duration" : 100
					})
					.addCode("/code/setup/webpack.hbs", "setup/webpack.sh")
					.withTime({
						"start" : 2200,
						"duration" : 100
					})
					.addCode("/code/src/components/card/card.bdd.hbs", "src/components/card/card.bdd.tsx")
					.withTime({
						"start" : 2300,
						"duration" : 0
					})
					.addCode("/code/src/components/card/card.component.hbs", "src/components/card/card.component.tsx")
					.withTime({
						"start" : 2300,
						"duration" : 100
					})
					.addCode("/code/src/components/card/card.container.hbs", "src/components/card/card.container.tsx")
					.withTime({
						"start" : 2400,
						"duration" : 100
					})
					.addCode("/code/src/components/card/card.redux.hbs", "src/components/card/card.redux.tsx")
					.withTime({
						"start" : 2600,
						"duration" : 0
					})
					.addCode("/code/src/components/card/card.stories.hbs", "src/components/card/card.stories.tsx")
					.withTime({
						"start" : 2600,
						"duration" : 300
					})
					.addCode("/code/src/components/card/card.styles.hbs", "src/components/card/card.styles.tsx")
					.withTime({
						"start" : 2900,
						"duration" : 0
					})
					.addCode("/code/src/components/card/card.test.hbs", "src/components/card/card.test.tsx")
					.withTime({
						"start" : 2900,
						"duration" : 0
					})
					.addCode("/code/src/example-stories/example.actions.stories.hbs", "src/example-stories/example.actions.stories.tsx")
					.withTime({
						"start" : 2900,
						"duration" : 100
					})
					.addCode("/code/src/example-stories/example.knobs.stories.hbs", "src/example-stories/example.knobs.stories.tsx")
					.withTime({
						"start" : 3000,
						"duration" : 300
					})
					.addCode("/code/src/index.hbs", "src/index.css")
					.withTime({
						"start" : 3300,
						"duration" : 100
					})
					.addCode("/code/src/index.hbs", "src/index.html")
					.withTime({
						"start" : 3400,
						"duration" : 100
					})
					.addCode("/code/src/index.hbs", "src/index.tsx")
					.withTime({
						"start" : 3500,
						"duration" : 100
					})
					.addCode("/code/tsconfig.hbs", "tsconfig.json")
					.withTime({
						"start" : 3600,
						"duration" : 200
					})
					.addCode("/code/webpack.common.hbs", "webpack.common.js")
					.withTime({
						"start" : 3800,
						"duration" : 200
					})
					.addCode("/code/webpack.dev.hbs", "webpack.dev.js")
					.withTime({
						"start" : 4000,
						"duration" : 100
					})
					.addCode("/code/webpack.prod.hbs", "webpack.prod.js")
					.withTime({
						"start" : 4100,
						"duration" : 100
					})
					.addCode("/code/package.hbs", "package.json")
						.withPartial("partial_1", "step-02/code/package_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-02/code/package_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-02/code/package_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-02/code/package_partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-02/code/package_partials/partial_5.hbs", 400, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/setup/docker.hbs", "setup/docker.sh")
					.withTime({
						"start" : 100,
						"duration" : 0
					})
					.addCode("/code/.gitignore.hbs", ".gitignore")
						.withPartial("partial_1", "step-02/code/.gitignore_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/.storybook/addons.hbs", "frontend/.storybook/addons.js")
					.withTime({
						"start" : 500,
						"duration" : 100
					})
					.addCode("/code/frontend/.storybook/config.hbs", "frontend/.storybook/config.js")
					.withTime({
						"start" : 600,
						"duration" : 100
					})
					.addCode("/code/frontend/.storybook/webpack.config.hbs", "frontend/.storybook/webpack.config.js")
					.withTime({
						"start" : 700,
						"duration" : 100
					})
					.addCode("/code/frontend/.webpack/loaders/example-loader.hbs", "frontend/.webpack/loaders/example-loader.js")
					.withTime({
						"start" : 800,
						"duration" : 100
					})
					.addCode("/code/frontend/.webpack/plugins/FileListPlugin.hbs", "frontend/.webpack/plugins/FileListPlugin.js")
					.withTime({
						"start" : 900,
						"duration" : 100
					})
					.addCode("/code/frontend/package-lock.hbs", "frontend/package-lock.json")
					.withTime({
						"start" : 1000,
						"duration" : 100
					})
					.addCode("/code/frontend/package.hbs", "frontend/package.json")
					.withTime({
						"start" : 1100,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.bdd.hbs", "frontend/src/components/card/card.bdd.tsx")
					.withTime({
						"start" : 1600,
						"duration" : 0
					})
					.addCode("/code/frontend/src/components/card/card.component.hbs", "frontend/src/components/card/card.component.tsx")
					.withTime({
						"start" : 1600,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.container.hbs", "frontend/src/components/card/card.container.tsx")
					.withTime({
						"start" : 1700,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.redux.hbs", "frontend/src/components/card/card.redux.tsx")
					.withTime({
						"start" : 1900,
						"duration" : 0
					})
					.addCode("/code/frontend/src/components/card/card.stories.hbs", "frontend/src/components/card/card.stories.tsx")
					.withTime({
						"start" : 1900,
						"duration" : 300
					})
					.addCode("/code/frontend/src/components/card/card.styles.hbs", "frontend/src/components/card/card.styles.tsx")
					.withTime({
						"start" : 2200,
						"duration" : 0
					})
					.addCode("/code/frontend/src/components/card/card.test.hbs", "frontend/src/components/card/card.test.tsx")
					.withTime({
						"start" : 2200,
						"duration" : 0
					})
					.addCode("/code/frontend/src/example-stories/example.actions.stories.hbs", "frontend/src/example-stories/example.actions.stories.tsx")
					.withTime({
						"start" : 2200,
						"duration" : 100
					})
					.addCode("/code/frontend/src/example-stories/example.knobs.stories.hbs", "frontend/src/example-stories/example.knobs.stories.tsx")
					.withTime({
						"start" : 2300,
						"duration" : 300
					})
					.addCode("/code/frontend/src/index.hbs", "frontend/src/index.css")
					.withTime({
						"start" : 2600,
						"duration" : 100
					})
					.addCode("/code/frontend/src/index.hbs", "frontend/src/index.html")
					.withTime({
						"start" : 2700,
						"duration" : 100
					})
					.addCode("/code/frontend/src/index.hbs", "frontend/src/index.tsx")
					.withTime({
						"start" : 2800,
						"duration" : 100
					})
					.addCode("/code/frontend/tsconfig.hbs", "frontend/tsconfig.json")
					.withTime({
						"start" : 2900,
						"duration" : 200
					})
					.addCode("/code/frontend/webpack.common.hbs", "frontend/webpack.common.js")
					.withTime({
						"start" : 3100,
						"duration" : 200
					})
					.addCode("/code/frontend/webpack.dev.hbs", "frontend/webpack.dev.js")
					.withTime({
						"start" : 3300,
						"duration" : 100
					})
					.addCode("/code/frontend/webpack.prod.hbs", "frontend/webpack.prod.js")
					.withTime({
						"start" : 3400,
						"duration" : 100
					})
					.addCode("/code/.gitignore.hbs", ".gitignore")
						.withPartial("partial_1", "step-02/code/.gitignore_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-02/code/.gitignore_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/backend/.gitignore.hbs", "backend/.gitignore")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/backend/.gitignore.hbs", "backend/.gitignore")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/backend/Dockerfile.hbs", "backend/Dockerfile.dev")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/backend/server/nest-cli.hbs", "backend/server/nest-cli.json")
					.withTime({
						"start" : 200,
						"duration" : 100
					})
					.addCode("/code/backend/server/nodemon-debug.hbs", "backend/server/nodemon-debug.json")
					.withTime({
						"start" : 300,
						"duration" : 100
					})
					.addCode("/code/backend/server/nodemon.hbs", "backend/server/nodemon.json")
					.withTime({
						"start" : 400,
						"duration" : 100
					})
					.addCode("/code/backend/server/package.hbs", "backend/server/package.json")
					.withTime({
						"start" : 500,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/app.controller.spec.hbs", "backend/server/src/app.controller.spec.ts")
					.withTime({
						"start" : 600,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/app.controller.hbs", "backend/server/src/app.controller.ts")
					.withTime({
						"start" : 700,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/app.module.hbs", "backend/server/src/app.module.ts")
					.withTime({
						"start" : 800,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/app.service.hbs", "backend/server/src/app.service.ts")
					.withTime({
						"start" : 900,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/exceptions/Validation.exception.hbs", "backend/server/src/common/http/exceptions/Validation.exception.ts")
					.withTime({
						"start" : 1000,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/exceptions/index.hbs", "backend/server/src/common/http/exceptions/index.ts")
					.withTime({
						"start" : 1100,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/exceptions/not-found.exception.spec.hbs", "backend/server/src/common/http/exceptions/not-found.exception.spec.ts")
					.withTime({
						"start" : 1200,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/exceptions/not-found.exception.hbs", "backend/server/src/common/http/exceptions/not-found.exception.ts")
					.withTime({
						"start" : 1300,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/exceptions/not-unique.exception.spec.hbs", "backend/server/src/common/http/exceptions/not-unique.exception.spec.ts")
					.withTime({
						"start" : 1400,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/exceptions/not-unique.exception.hbs", "backend/server/src/common/http/exceptions/not-unique.exception.ts")
					.withTime({
						"start" : 1500,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/exceptions/validation.exception.spec.hbs", "backend/server/src/common/http/exceptions/validation.exception.spec.ts")
					.withTime({
						"start" : 1600,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/responses/index.hbs", "backend/server/src/common/http/responses/index.ts")
					.withTime({
						"start" : 1700,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/responses/success.response.hbs", "backend/server/src/common/http/responses/success.response.ts")
					.withTime({
						"start" : 1800,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/interceptors/error-handling.interceptor.hbs", "backend/server/src/common/interceptors/error-handling.interceptor.ts")
					.withTime({
						"start" : 1900,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/recipes/swagger/swagger.util.hbs", "backend/server/src/common/recipes/swagger/swagger.util.ts")
					.withTime({
						"start" : 2000,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/utils/error.util.spec.hbs", "backend/server/src/common/utils/error.util.spec.ts")
					.withTime({
						"start" : 2100,
						"duration" : 400
					})
					.addCode("/code/backend/server/src/common/utils/error.util.hbs", "backend/server/src/common/utils/error.util.ts")
					.withTime({
						"start" : 2500,
						"duration" : 200
					})
					.addCode("/code/backend/server/src/common/utils/test-helper.util.hbs", "backend/server/src/common/utils/test-helper.util.ts")
					.withTime({
						"start" : 2700,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/main.hbs", "backend/server/src/main.ts")
					.withTime({
						"start" : 2800,
						"duration" : 100
					})
					.addCode("/code/backend/server/test/app.e2e-spec.hbs", "backend/server/test/app.e2e-spec.ts")
					.withTime({
						"start" : 2900,
						"duration" : 100
					})
					.addCode("/code/backend/server/test/jest-e2e.hbs", "backend/server/test/jest-e2e.json")
					.withTime({
						"start" : 3000,
						"duration" : 100
					})
					.addCode("/code/backend/server/tsconfig.build.hbs", "backend/server/tsconfig.build.json")
					.withTime({
						"start" : 3100,
						"duration" : 100
					})
					.addCode("/code/backend/server/tsconfig.hbs", "backend/server/tsconfig.json")
					.withTime({
						"start" : 3200,
						"duration" : 100
					})
					.addCode("/code/backend/server/tslint.hbs", "backend/server/tslint.json")
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
