const path = require('path');

module.exports = step("step-4")
					.addDescriptionFromMdFile(path.join(__dirname, "/description/ProjectPlan.mdx"))
					.withTime({
						"start" : 100,
						"duration" : 800
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/board/Board.playbook.mdx"))
					.withTime({
						"start" : 3900,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/cardlist/CardList.playbook.mdx"))
					.withTime({
						"start" : 5200,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/draggablecard/DraggableCard.playbook.mdx"))
					.withTime({
						"start" : 6200,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/backend/readme.md"))
					.withTime({
						"start" : 300,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/backend/server/README.md"))
					.withTime({
						"start" : 400,
						"duration" : 200
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/ProjectPlan.mdx"))
					.withTime({
						"start" : 100,
						"duration" : 800
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/board/Board.playbook.mdx"))
					.withTime({
						"start" : 3900,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/cardlist/CardList.playbook.mdx"))
					.withTime({
						"start" : 5200,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/frontend/src/components/draggablecard/DraggableCard.playbook.mdx"))
					.withTime({
						"start" : 6200,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/backend/readme.md"))
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/common/helpers/readme.md"))
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/ProjectPlan.mdx"))
					.withTime({
						"start" : 0,
						"duration" : 900
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/01_setup/01_setup_03_lerna.mdx"))
					.withTime({
						"start" : 900,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/01_setup/01_setup_05_docker.mdx"))
					.withTime({
						"start" : 1000,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/01_setup/01_setup_06_jest.mdx"))
					.withTime({
						"start" : 1100,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/01_setup/01_setup_07_cypress.mdx"))
					.withTime({
						"start" : 1200,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/01_setup/01_setup_08_cicd.mdx"))
					.withTime({
						"start" : 1300,
						"duration" : 200
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/02_frontend/01_Card.mdx"))
					.withTime({
						"start" : 1500,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/02_frontend/02_CardList.mdx"))
					.withTime({
						"start" : 1600,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/02_frontend/03_Board.mdx"))
					.withTime({
						"start" : 1700,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/02_frontend/04_Routes_and_Pages.mdx"))
					.withTime({
						"start" : 1800,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/02_frontend/05_CRUD_Boards.mdx"))
					.withTime({
						"start" : 1900,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/02_frontend/06_CRUD_CardLists.mdx"))
					.withTime({
						"start" : 2000,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/02_frontend/07_CRUD_Cards.mdx"))
					.withTime({
						"start" : 2100,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/02_frontend/08_Auth_Pages.mdx"))
					.withTime({
						"start" : 2200,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/02_frontend/09_Interactions_DnDCards.mdx"))
					.withTime({
						"start" : 2300,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/02_frontend/10_TrelloAPI.mdx"))
					.withTime({
						"start" : 2400,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/03_backend/01_NestJs_and_swagger.mdx"))
					.withTime({
						"start" : 2500,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/03_backend/02_TrelloAPI_Proxy.mdx"))
					.withTime({
						"start" : 2600,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/03_backend/03_CRUD_Boards.mdx"))
					.withTime({
						"start" : 2700,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/03_backend/04_CRUD_CardList.mdx"))
					.withTime({
						"start" : 2800,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/05_cicd/05_setup_01_cicd.mdx"))
					.withTime({
						"start" : 2900,
						"duration" : 200
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/05_cicd/05_setup_02_env.mdx"))
					.withTime({
						"start" : 3100,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/05_cicd/05_setup_03_aws.mdx"))
					.withTime({
						"start" : 3200,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/docs/05_cicd/05_setup_04_circle.mdx"))
					.withTime({
						"start" : 3300,
						"duration" : 100
					})
					.addDescriptionFromMdFile(path.join(__dirname, "/description/readme.md"))
					.withTime({
						"start" : 0,
						"duration" : 900
					})
					.addCode("/code/common/helpers/lexicographic.util.spec.hbs", "common/helpers/lexicographic.util.spec.ts")
					.withTime({
						"start" : 0,
						"duration" : 200
					})
					.addCode("/code/common/helpers/lexicographic.util.hbs", "common/helpers/lexicographic.util.ts")
					.withTime({
						"start" : 200,
						"duration" : 300
					})
					.addCode("/code/.gitignore.hbs", ".gitignore")
						.withPartial("partial_1", "step-4/code/.gitignore_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/.storybook/addons.hbs", "frontend/.storybook/addons.js")
						.withPartial("partial_1", "step-4/code/frontend/.storybook/addons_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 900,
						"duration" : 100
					})
					.addCode("/code/frontend/.storybook/webpack.config.hbs", "frontend/.storybook/webpack.config.js")
						.withPartial("partial_1", "step-4/code/frontend/.storybook/webpack.config_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-4/code/frontend/.storybook/webpack.config_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-4/code/frontend/.storybook/webpack.config_partials/partial_3.hbs", 200, 100)
					.withTime({
						"start" : 1000,
						"duration" : 100
					})
					.addCode("/code/frontend/__sample.hbs", "frontend/__sample.sh")
					.withTime({
						"start" : 1100,
						"duration" : 100
					})
					.addCode("/code/frontend/package.hbs", "frontend/package.json")
						.withPartial("partial_1", "step-4/code/frontend/package_partials/partial_1.hbs", 0, 200)
						.withPartial("partial_2", "step-4/code/frontend/package_partials/partial_2.hbs", 200, 100)
					.withTime({
						"start" : 1200,
						"duration" : 200
					})
					.addCode("/code/frontend/src/@uikit/alerts/alert.stories.hbs", "frontend/src/@uikit/alerts/alert.stories.tsx")
					.withTime({
						"start" : 1400,
						"duration" : 100
					})
					.addCode("/code/frontend/src/@uikit/buttons/button.stories.hbs", "frontend/src/@uikit/buttons/button.stories.tsx")
					.withTime({
						"start" : 1500,
						"duration" : 100
					})
					.addCode("/code/frontend/src/@uikit/forms/form.stories.hbs", "frontend/src/@uikit/forms/form.stories.tsx")
					.withTime({
						"start" : 1600,
						"duration" : 100
					})
					.addCode("/code/frontend/src/@uikit/layouts/layout.stories.hbs", "frontend/src/@uikit/layouts/layout.stories.tsx")
					.withTime({
						"start" : 1700,
						"duration" : 100
					})
					.addCode("/code/frontend/src/@uikit/modals/modal.stories.hbs", "frontend/src/@uikit/modals/modal.stories.tsx")
					.withTime({
						"start" : 1800,
						"duration" : 100
					})
					.addCode("/code/frontend/src/@uikit/textboxes/textboxes.stories.hbs", "frontend/src/@uikit/textboxes/textboxes.stories.tsx")
					.withTime({
						"start" : 1900,
						"duration" : 100
					})
					.addCode("/code/frontend/src/assets/css/app.hbs", "frontend/src/assets/css/app.css")
					.withTime({
						"start" : 2000,
						"duration" : 200
					})
					.addCode("/code/frontend/src/assets/images/b.hbs", "frontend/src/assets/images/b.jpg")
					.withTime({
						"start" : 2200,
						"duration" : 800
					})
					.addCode("/code/frontend/src/assets/images/b.hbs", "frontend/src/assets/images/b.png")
					.withTime({
						"start" : 3000,
						"duration" : 200
					})
					.addCode("/code/frontend/src/assets/images/del.hbs", "frontend/src/assets/images/del.png")
					.withTime({
						"start" : 3200,
						"duration" : 100
					})
					.addCode("/code/frontend/src/assets/images/dots.hbs", "frontend/src/assets/images/dots.png")
					.withTime({
						"start" : 3300,
						"duration" : 100
					})
					.addCode("/code/frontend/src/assets/images/gal.hbs", "frontend/src/assets/images/gal.png")
					.withTime({
						"start" : 3400,
						"duration" : 100
					})
					.addCode("/code/frontend/src/assets/images/noavatar.hbs", "frontend/src/assets/images/noavatar.png")
					.withTime({
						"start" : 3500,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/Board.bdd.hbs", "frontend/src/components/board/Board.bdd.tsx")
					.withTime({
						"start" : 3600,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/Board.component.hbs", "frontend/src/components/board/Board.component.tsx")
					.withTime({
						"start" : 3700,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/Board.container.hbs", "frontend/src/components/board/Board.container.tsx")
					.withTime({
						"start" : 3800,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/Board.redux.hbs", "frontend/src/components/board/Board.redux.tsx")
					.withTime({
						"start" : 4000,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/Board.stories.hbs", "frontend/src/components/board/Board.stories.tsx")
					.withTime({
						"start" : 4100,
						"duration" : 200
					})
					.addCode("/code/frontend/src/components/board/Board.styles.hbs", "frontend/src/components/board/Board.styles.tsx")
					.withTime({
						"start" : 4300,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/Board.test.hbs", "frontend/src/components/board/Board.test.tsx")
					.withTime({
						"start" : 4400,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.component.hbs", "frontend/src/components/card/card.component.tsx")
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
					.addCode("/code/frontend/src/components/card/card.stories.hbs", "frontend/src/components/card/card.stories.tsx")
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
					.addCode("/code/frontend/src/components/cardlist/CardList.bdd.hbs", "frontend/src/components/cardlist/CardList.bdd.tsx")
					.withTime({
						"start" : 4900,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/cardlist/CardList.component.hbs", "frontend/src/components/cardlist/CardList.component.tsx")
					.withTime({
						"start" : 5000,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/cardlist/CardList.container.hbs", "frontend/src/components/cardlist/CardList.container.tsx")
					.withTime({
						"start" : 5100,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/cardlist/CardList.redux.hbs", "frontend/src/components/cardlist/CardList.redux.tsx")
					.withTime({
						"start" : 5300,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/cardlist/CardList.stories.hbs", "frontend/src/components/cardlist/CardList.stories.tsx")
					.withTime({
						"start" : 5400,
						"duration" : 200
					})
					.addCode("/code/frontend/src/components/cardlist/CardList.styles.hbs", "frontend/src/components/cardlist/CardList.styles.tsx")
					.withTime({
						"start" : 5600,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/cardlist/CardList.test.hbs", "frontend/src/components/cardlist/CardList.test.tsx")
					.withTime({
						"start" : 5700,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/draggablecard/DraggableCard.bdd.hbs", "frontend/src/components/draggablecard/DraggableCard.bdd.tsx")
					.withTime({
						"start" : 5800,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/draggablecard/DraggableCard.component.hbs", "frontend/src/components/draggablecard/DraggableCard.component.tsx")
					.withTime({
						"start" : 5900,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/draggablecard/DraggableCard.container.hbs", "frontend/src/components/draggablecard/DraggableCard.container.tsx")
					.withTime({
						"start" : 6000,
						"duration" : 200
					})
					.addCode("/code/frontend/src/components/draggablecard/DraggableCard.redux.hbs", "frontend/src/components/draggablecard/DraggableCard.redux.tsx")
					.withTime({
						"start" : 6300,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/draggablecard/DraggableCard.stories.hbs", "frontend/src/components/draggablecard/DraggableCard.stories.tsx")
					.withTime({
						"start" : 6400,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/draggablecard/DraggableCard.styles.hbs", "frontend/src/components/draggablecard/DraggableCard.styles.tsx")
					.withTime({
						"start" : 6500,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/draggablecard/DraggableCard.test.hbs", "frontend/src/components/draggablecard/DraggableCard.test.tsx")
					.withTime({
						"start" : 6600,
						"duration" : 100
					})
					.addCode("/code/frontend/src/config/index.hbs", "frontend/src/config/index.ts")
					.withTime({
						"start" : 6700,
						"duration" : 100
					})
					.addCode("/code/frontend/src/example-stories/example.actions.stories.hbs", "frontend/src/example-stories/example.actions.stories.tsx")
						.withPartial("partial_1", "step-4/code/frontend/src/example-stories/example.actions.stories_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-4/code/frontend/src/example-stories/example.actions.stories_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 6800,
						"duration" : 100
					})
					.addCode("/code/frontend/src/example-stories/example.knobs.stories.hbs", "frontend/src/example-stories/example.knobs.stories.tsx")
						.withPartial("partial_1", "step-4/code/frontend/src/example-stories/example.knobs.stories_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 6900,
						"duration" : 300
					})
					.addCode("/code/frontend/tsconfig.hbs", "frontend/tsconfig.json")
						.withPartial("partial_1", "step-4/code/frontend/tsconfig_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 7200,
						"duration" : 200
					})
					.addCode("/code/frontend/webpack.common.hbs", "frontend/webpack.common.js")
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
					.addCode("/code/frontend/yarn.hbs", "frontend/yarn.lock")
						.withPartial("partial_1", "step-4/code/frontend/yarn_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-4/code/frontend/yarn_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-4/code/frontend/yarn_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-4/code/frontend/yarn_partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-4/code/frontend/yarn_partials/partial_5.hbs", 400, 100)
						.withPartial("partial_6", "step-4/code/frontend/yarn_partials/partial_6.hbs", 500, 100)
						.withPartial("partial_7", "step-4/code/frontend/yarn_partials/partial_7.hbs", 600, 100)
						.withPartial("partial_8", "step-4/code/frontend/yarn_partials/partial_8.hbs", 700, 100)
						.withPartial("partial_9", "step-4/code/frontend/yarn_partials/partial_9.hbs", 800, 100)
					.withTime({
						"start" : 7600,
						"duration" : 14000
					})
					.addCode("/code/setup/_template_.hbs", "setup/_template_.sh")
						.withPartial("partial_1", "step-4/code/setup/_template__partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-4/code/setup/_template__partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-4/code/setup/_template__partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-4/code/setup/_template__partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-4/code/setup/_template__partials/partial_5.hbs", 400, 100)
						.withPartial("partial_6", "step-4/code/setup/_template__partials/partial_6.hbs", 500, 100)
					.withTime({
						"start" : 21600,
						"duration" : 100
					})
					.addCode("/code/setup/aws.hbs", "setup/aws.sh")
					.withTime({
						"start" : 21700,
						"duration" : 100
					})
					.addCode("/code/setup/cicd.hbs", "setup/cicd.sh")
					.withTime({
						"start" : 21800,
						"duration" : 100
					})
					.addCode("/code/setup/commitzen.hbs", "setup/commitzen.sh")
						.withPartial("partial_1", "step-4/code/setup/commitzen_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 21900,
						"duration" : 100
					})
					.addCode("/code/setup/cypress.hbs", "setup/cypress.sh")
					.withTime({
						"start" : 22000,
						"duration" : 100
					})
					.addCode("/code/setup/docker.hbs", "setup/docker.sh")
					.withTime({
						"start" : 22100,
						"duration" : 100
					})
					.addCode("/code/setup/gitignore.hbs", "setup/gitignore.sh")
						.withPartial("partial_1", "step-4/code/setup/gitignore_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 22200,
						"duration" : 100
					})
					.addCode("/code/setup/jest.hbs", "setup/jest.sh")
					.withTime({
						"start" : 22300,
						"duration" : 100
					})
					.addCode("/code/setup/semantic-release.hbs", "setup/semantic-release.sh")
					.withTime({
						"start" : 22400,
						"duration" : 100
					})
					.addCode("/code/setup/storybook.hbs", "setup/storybook.sh")
						.withPartial("partial_1", "step-4/code/setup/storybook_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-4/code/setup/storybook_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 22500,
						"duration" : 200
					})
					.addCode("/code/setup/sxd/component.hbs", "setup/sxd/component.sh")
					.withTime({
						"start" : 22700,
						"duration" : 200
					})
					.addCode("/code/setup/sxd/components/component.bdd.tsx.hbs", "setup/sxd/components/component.bdd.tsx.template")
					.withTime({
						"start" : 22900,
						"duration" : 100
					})
					.addCode("/code/setup/sxd/components/component.container.tsx.hbs", "setup/sxd/components/component.container.tsx.template")
					.withTime({
						"start" : 23000,
						"duration" : 100
					})
					.addCode("/code/setup/sxd/components/component.playbook.mdx.hbs", "setup/sxd/components/component.playbook.mdx.template")
					.withTime({
						"start" : 23100,
						"duration" : 100
					})
					.addCode("/code/setup/sxd/components/component.redux.tsx.hbs", "setup/sxd/components/component.redux.tsx.template")
					.withTime({
						"start" : 23200,
						"duration" : 100
					})
					.addCode("/code/setup/sxd/components/component.stories.tsx.hbs", "setup/sxd/components/component.stories.tsx.template")
					.withTime({
						"start" : 23300,
						"duration" : 100
					})
					.addCode("/code/setup/sxd/components/component.styles.tsx.hbs", "setup/sxd/components/component.styles.tsx.template")
					.withTime({
						"start" : 23400,
						"duration" : 100
					})
					.addCode("/code/setup/sxd/components/component.test.tsx.hbs", "setup/sxd/components/component.test.tsx.template")
					.withTime({
						"start" : 23500,
						"duration" : 100
					})
					.addCode("/code/setup/sxd/components/component.tsx.hbs", "setup/sxd/components/component.tsx.template")
					.withTime({
						"start" : 23600,
						"duration" : 100
					})
					.addCode("/code/setup/typescript.hbs", "setup/typescript.sh")
						.withPartial("partial_1", "step-4/code/setup/typescript_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-4/code/setup/typescript_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 23700,
						"duration" : 100
					})
					.addCode("/code/setup/webpack-loaders.hbs", "setup/webpack-loaders.sh")
						.withPartial("partial_1", "step-4/code/setup/webpack-loaders_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 23800,
						"duration" : 100
					})
					.addCode("/code/setup/webpack-plugins.hbs", "setup/webpack-plugins.sh")
						.withPartial("partial_1", "step-4/code/setup/webpack-plugins_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 23900,
						"duration" : 100
					})
					.addCode("/code/setup/webpack.hbs", "setup/webpack.sh")
						.withPartial("partial_1", "step-4/code/setup/webpack_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-4/code/setup/webpack_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 24000,
						"duration" : 100
					})
					.addCode("/code/.gitignore.hbs", ".gitignore")
						.withPartial("partial_1", "step-4/code/.gitignore_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/backend/.gitignore.hbs", "backend/.gitignore")
					.withTime({
						"start" : 100,
						"duration" : 100
					})
					.addCode("/code/backend/Dockerfile.hbs", "backend/Dockerfile.dev")
					.withTime({
						"start" : 200,
						"duration" : 100
					})
					.addCode("/code/backend/server/nest-cli.hbs", "backend/server/nest-cli.json")
					.withTime({
						"start" : 600,
						"duration" : 100
					})
					.addCode("/code/backend/server/nodemon-debug.hbs", "backend/server/nodemon-debug.json")
					.withTime({
						"start" : 700,
						"duration" : 100
					})
					.addCode("/code/backend/server/nodemon.hbs", "backend/server/nodemon.json")
					.withTime({
						"start" : 800,
						"duration" : 100
					})
					.addCode("/code/backend/server/package.hbs", "backend/server/package.json")
					.withTime({
						"start" : 900,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/app.controller.spec.hbs", "backend/server/src/app.controller.spec.ts")
					.withTime({
						"start" : 1000,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/app.controller.hbs", "backend/server/src/app.controller.ts")
					.withTime({
						"start" : 1100,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/app.module.hbs", "backend/server/src/app.module.ts")
					.withTime({
						"start" : 1200,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/app.service.hbs", "backend/server/src/app.service.ts")
					.withTime({
						"start" : 1300,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/exceptions/Validation.exception.hbs", "backend/server/src/common/http/exceptions/Validation.exception.ts")
					.withTime({
						"start" : 1400,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/exceptions/index.hbs", "backend/server/src/common/http/exceptions/index.ts")
					.withTime({
						"start" : 1500,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/exceptions/not-found.exception.spec.hbs", "backend/server/src/common/http/exceptions/not-found.exception.spec.ts")
					.withTime({
						"start" : 1600,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/exceptions/not-found.exception.hbs", "backend/server/src/common/http/exceptions/not-found.exception.ts")
					.withTime({
						"start" : 1700,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/exceptions/not-unique.exception.spec.hbs", "backend/server/src/common/http/exceptions/not-unique.exception.spec.ts")
					.withTime({
						"start" : 1800,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/exceptions/not-unique.exception.hbs", "backend/server/src/common/http/exceptions/not-unique.exception.ts")
					.withTime({
						"start" : 1900,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/exceptions/validation.exception.spec.hbs", "backend/server/src/common/http/exceptions/validation.exception.spec.ts")
					.withTime({
						"start" : 2000,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/responses/index.hbs", "backend/server/src/common/http/responses/index.ts")
					.withTime({
						"start" : 2100,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/http/responses/success.response.hbs", "backend/server/src/common/http/responses/success.response.ts")
					.withTime({
						"start" : 2200,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/interceptors/error-handling.interceptor.hbs", "backend/server/src/common/interceptors/error-handling.interceptor.ts")
					.withTime({
						"start" : 2300,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/recipes/swagger/swagger.util.hbs", "backend/server/src/common/recipes/swagger/swagger.util.ts")
					.withTime({
						"start" : 2400,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/common/utils/error.util.spec.hbs", "backend/server/src/common/utils/error.util.spec.ts")
					.withTime({
						"start" : 2500,
						"duration" : 400
					})
					.addCode("/code/backend/server/src/common/utils/error.util.hbs", "backend/server/src/common/utils/error.util.ts")
					.withTime({
						"start" : 2900,
						"duration" : 200
					})
					.addCode("/code/backend/server/src/common/utils/test-helper.util.hbs", "backend/server/src/common/utils/test-helper.util.ts")
					.withTime({
						"start" : 3100,
						"duration" : 100
					})
					.addCode("/code/backend/server/src/main.hbs", "backend/server/src/main.ts")
					.withTime({
						"start" : 3200,
						"duration" : 100
					})
					.addCode("/code/backend/server/test/app.e2e-spec.hbs", "backend/server/test/app.e2e-spec.ts")
					.withTime({
						"start" : 3300,
						"duration" : 100
					})
					.addCode("/code/backend/server/test/jest-e2e.hbs", "backend/server/test/jest-e2e.json")
					.withTime({
						"start" : 3400,
						"duration" : 100
					})
					.addCode("/code/backend/server/tsconfig.build.hbs", "backend/server/tsconfig.build.json")
					.withTime({
						"start" : 3500,
						"duration" : 100
					})
					.addCode("/code/backend/server/tsconfig.hbs", "backend/server/tsconfig.json")
					.withTime({
						"start" : 3600,
						"duration" : 100
					})
					.addCode("/code/backend/server/tslint.hbs", "backend/server/tslint.json")
					.withTime({
						"start" : 3700,
						"duration" : 100
					})
					.addCode("/code/backend/server/yarn.hbs", "backend/server/yarn.lock")
					.withTime({
						"start" : 3800,
						"duration" : 7400
					})
					.addCode("/code/docker-compose.hbs", "docker-compose.yml")
					.withTime({
						"start" : 11200,
						"duration" : 100
					})
					.addCode("/code/.gitignore.hbs", ".gitignore")
						.withPartial("partial_1", "step-4/code/.gitignore_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/frontend/.storybook/addons.hbs", "frontend/.storybook/addons.js")
						.withPartial("partial_1", "step-4/code/frontend/.storybook/addons_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 900,
						"duration" : 100
					})
					.addCode("/code/frontend/.storybook/webpack.config.hbs", "frontend/.storybook/webpack.config.js")
						.withPartial("partial_1", "step-4/code/frontend/.storybook/webpack.config_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-4/code/frontend/.storybook/webpack.config_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-4/code/frontend/.storybook/webpack.config_partials/partial_3.hbs", 200, 100)
					.withTime({
						"start" : 1000,
						"duration" : 100
					})
					.addCode("/code/frontend/__sample.hbs", "frontend/__sample.sh")
					.withTime({
						"start" : 1100,
						"duration" : 100
					})
					.addCode("/code/frontend/package.hbs", "frontend/package.json")
						.withPartial("partial_1", "step-4/code/frontend/package_partials/partial_1.hbs", 0, 200)
						.withPartial("partial_2", "step-4/code/frontend/package_partials/partial_2.hbs", 200, 100)
					.withTime({
						"start" : 1200,
						"duration" : 200
					})
					.addCode("/code/frontend/src/@uikit/alerts/alert.stories.hbs", "frontend/src/@uikit/alerts/alert.stories.tsx")
					.withTime({
						"start" : 1400,
						"duration" : 100
					})
					.addCode("/code/frontend/src/@uikit/buttons/button.stories.hbs", "frontend/src/@uikit/buttons/button.stories.tsx")
					.withTime({
						"start" : 1500,
						"duration" : 100
					})
					.addCode("/code/frontend/src/@uikit/forms/form.stories.hbs", "frontend/src/@uikit/forms/form.stories.tsx")
					.withTime({
						"start" : 1600,
						"duration" : 100
					})
					.addCode("/code/frontend/src/@uikit/layouts/layout.stories.hbs", "frontend/src/@uikit/layouts/layout.stories.tsx")
					.withTime({
						"start" : 1700,
						"duration" : 100
					})
					.addCode("/code/frontend/src/@uikit/modals/modal.stories.hbs", "frontend/src/@uikit/modals/modal.stories.tsx")
					.withTime({
						"start" : 1800,
						"duration" : 100
					})
					.addCode("/code/frontend/src/@uikit/textboxes/textboxes.stories.hbs", "frontend/src/@uikit/textboxes/textboxes.stories.tsx")
					.withTime({
						"start" : 1900,
						"duration" : 100
					})
					.addCode("/code/frontend/src/assets/css/app.hbs", "frontend/src/assets/css/app.css")
					.withTime({
						"start" : 2000,
						"duration" : 200
					})
					.addCode("/code/frontend/src/assets/images/b.hbs", "frontend/src/assets/images/b.jpg")
					.withTime({
						"start" : 2200,
						"duration" : 800
					})
					.addCode("/code/frontend/src/assets/images/b.hbs", "frontend/src/assets/images/b.png")
					.withTime({
						"start" : 3000,
						"duration" : 200
					})
					.addCode("/code/frontend/src/assets/images/del.hbs", "frontend/src/assets/images/del.png")
					.withTime({
						"start" : 3200,
						"duration" : 100
					})
					.addCode("/code/frontend/src/assets/images/dots.hbs", "frontend/src/assets/images/dots.png")
					.withTime({
						"start" : 3300,
						"duration" : 100
					})
					.addCode("/code/frontend/src/assets/images/gal.hbs", "frontend/src/assets/images/gal.png")
					.withTime({
						"start" : 3400,
						"duration" : 100
					})
					.addCode("/code/frontend/src/assets/images/noavatar.hbs", "frontend/src/assets/images/noavatar.png")
					.withTime({
						"start" : 3500,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/Board.bdd.hbs", "frontend/src/components/board/Board.bdd.tsx")
					.withTime({
						"start" : 3600,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/Board.component.hbs", "frontend/src/components/board/Board.component.tsx")
					.withTime({
						"start" : 3700,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/Board.container.hbs", "frontend/src/components/board/Board.container.tsx")
					.withTime({
						"start" : 3800,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/Board.redux.hbs", "frontend/src/components/board/Board.redux.tsx")
					.withTime({
						"start" : 4000,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/Board.stories.hbs", "frontend/src/components/board/Board.stories.tsx")
					.withTime({
						"start" : 4100,
						"duration" : 200
					})
					.addCode("/code/frontend/src/components/board/Board.styles.hbs", "frontend/src/components/board/Board.styles.tsx")
					.withTime({
						"start" : 4300,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/board/Board.test.hbs", "frontend/src/components/board/Board.test.tsx")
					.withTime({
						"start" : 4400,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/card/card.component.hbs", "frontend/src/components/card/card.component.tsx")
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
					.addCode("/code/frontend/src/components/card/card.stories.hbs", "frontend/src/components/card/card.stories.tsx")
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
					.addCode("/code/frontend/src/components/cardlist/CardList.bdd.hbs", "frontend/src/components/cardlist/CardList.bdd.tsx")
					.withTime({
						"start" : 4900,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/cardlist/CardList.component.hbs", "frontend/src/components/cardlist/CardList.component.tsx")
					.withTime({
						"start" : 5000,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/cardlist/CardList.container.hbs", "frontend/src/components/cardlist/CardList.container.tsx")
					.withTime({
						"start" : 5100,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/cardlist/CardList.redux.hbs", "frontend/src/components/cardlist/CardList.redux.tsx")
					.withTime({
						"start" : 5300,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/cardlist/CardList.stories.hbs", "frontend/src/components/cardlist/CardList.stories.tsx")
					.withTime({
						"start" : 5400,
						"duration" : 200
					})
					.addCode("/code/frontend/src/components/cardlist/CardList.styles.hbs", "frontend/src/components/cardlist/CardList.styles.tsx")
					.withTime({
						"start" : 5600,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/cardlist/CardList.test.hbs", "frontend/src/components/cardlist/CardList.test.tsx")
					.withTime({
						"start" : 5700,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/draggablecard/DraggableCard.bdd.hbs", "frontend/src/components/draggablecard/DraggableCard.bdd.tsx")
					.withTime({
						"start" : 5800,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/draggablecard/DraggableCard.component.hbs", "frontend/src/components/draggablecard/DraggableCard.component.tsx")
					.withTime({
						"start" : 5900,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/draggablecard/DraggableCard.container.hbs", "frontend/src/components/draggablecard/DraggableCard.container.tsx")
					.withTime({
						"start" : 6000,
						"duration" : 200
					})
					.addCode("/code/frontend/src/components/draggablecard/DraggableCard.redux.hbs", "frontend/src/components/draggablecard/DraggableCard.redux.tsx")
					.withTime({
						"start" : 6300,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/draggablecard/DraggableCard.stories.hbs", "frontend/src/components/draggablecard/DraggableCard.stories.tsx")
					.withTime({
						"start" : 6400,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/draggablecard/DraggableCard.styles.hbs", "frontend/src/components/draggablecard/DraggableCard.styles.tsx")
					.withTime({
						"start" : 6500,
						"duration" : 100
					})
					.addCode("/code/frontend/src/components/draggablecard/DraggableCard.test.hbs", "frontend/src/components/draggablecard/DraggableCard.test.tsx")
					.withTime({
						"start" : 6600,
						"duration" : 100
					})
					.addCode("/code/frontend/src/config/index.hbs", "frontend/src/config/index.ts")
					.withTime({
						"start" : 6700,
						"duration" : 100
					})
					.addCode("/code/frontend/src/example-stories/example.actions.stories.hbs", "frontend/src/example-stories/example.actions.stories.tsx")
						.withPartial("partial_1", "step-4/code/frontend/src/example-stories/example.actions.stories_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-4/code/frontend/src/example-stories/example.actions.stories_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 6800,
						"duration" : 100
					})
					.addCode("/code/frontend/src/example-stories/example.knobs.stories.hbs", "frontend/src/example-stories/example.knobs.stories.tsx")
						.withPartial("partial_1", "step-4/code/frontend/src/example-stories/example.knobs.stories_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 6900,
						"duration" : 300
					})
					.addCode("/code/frontend/tsconfig.hbs", "frontend/tsconfig.json")
						.withPartial("partial_1", "step-4/code/frontend/tsconfig_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 7200,
						"duration" : 200
					})
					.addCode("/code/frontend/webpack.common.hbs", "frontend/webpack.common.js")
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
					.addCode("/code/frontend/yarn.hbs", "frontend/yarn.lock")
						.withPartial("partial_1", "step-4/code/frontend/yarn_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-4/code/frontend/yarn_partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-4/code/frontend/yarn_partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-4/code/frontend/yarn_partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-4/code/frontend/yarn_partials/partial_5.hbs", 400, 100)
						.withPartial("partial_6", "step-4/code/frontend/yarn_partials/partial_6.hbs", 500, 100)
						.withPartial("partial_7", "step-4/code/frontend/yarn_partials/partial_7.hbs", 600, 100)
						.withPartial("partial_8", "step-4/code/frontend/yarn_partials/partial_8.hbs", 700, 100)
						.withPartial("partial_9", "step-4/code/frontend/yarn_partials/partial_9.hbs", 800, 100)
					.withTime({
						"start" : 7600,
						"duration" : 14000
					})
					.addCode("/code/setup/_template_.hbs", "setup/_template_.sh")
						.withPartial("partial_1", "step-4/code/setup/_template__partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-4/code/setup/_template__partials/partial_2.hbs", 100, 100)
						.withPartial("partial_3", "step-4/code/setup/_template__partials/partial_3.hbs", 200, 100)
						.withPartial("partial_4", "step-4/code/setup/_template__partials/partial_4.hbs", 300, 100)
						.withPartial("partial_5", "step-4/code/setup/_template__partials/partial_5.hbs", 400, 100)
						.withPartial("partial_6", "step-4/code/setup/_template__partials/partial_6.hbs", 500, 100)
					.withTime({
						"start" : 21600,
						"duration" : 100
					})
					.addCode("/code/setup/aws.hbs", "setup/aws.sh")
					.withTime({
						"start" : 21700,
						"duration" : 100
					})
					.addCode("/code/setup/cicd.hbs", "setup/cicd.sh")
					.withTime({
						"start" : 21800,
						"duration" : 100
					})
					.addCode("/code/setup/commitzen.hbs", "setup/commitzen.sh")
						.withPartial("partial_1", "step-4/code/setup/commitzen_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 21900,
						"duration" : 100
					})
					.addCode("/code/setup/cypress.hbs", "setup/cypress.sh")
					.withTime({
						"start" : 22000,
						"duration" : 100
					})
					.addCode("/code/setup/docker.hbs", "setup/docker.sh")
					.withTime({
						"start" : 22100,
						"duration" : 100
					})
					.addCode("/code/setup/gitignore.hbs", "setup/gitignore.sh")
						.withPartial("partial_1", "step-4/code/setup/gitignore_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 22200,
						"duration" : 100
					})
					.addCode("/code/setup/jest.hbs", "setup/jest.sh")
					.withTime({
						"start" : 22300,
						"duration" : 100
					})
					.addCode("/code/setup/semantic-release.hbs", "setup/semantic-release.sh")
					.withTime({
						"start" : 22400,
						"duration" : 100
					})
					.addCode("/code/setup/storybook.hbs", "setup/storybook.sh")
						.withPartial("partial_1", "step-4/code/setup/storybook_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-4/code/setup/storybook_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 22500,
						"duration" : 200
					})
					.addCode("/code/setup/sxd/component.hbs", "setup/sxd/component.sh")
					.withTime({
						"start" : 22700,
						"duration" : 200
					})
					.addCode("/code/setup/sxd/components/component.bdd.tsx.hbs", "setup/sxd/components/component.bdd.tsx.template")
					.withTime({
						"start" : 22900,
						"duration" : 100
					})
					.addCode("/code/setup/sxd/components/component.container.tsx.hbs", "setup/sxd/components/component.container.tsx.template")
					.withTime({
						"start" : 23000,
						"duration" : 100
					})
					.addCode("/code/setup/sxd/components/component.playbook.mdx.hbs", "setup/sxd/components/component.playbook.mdx.template")
					.withTime({
						"start" : 23100,
						"duration" : 100
					})
					.addCode("/code/setup/sxd/components/component.redux.tsx.hbs", "setup/sxd/components/component.redux.tsx.template")
					.withTime({
						"start" : 23200,
						"duration" : 100
					})
					.addCode("/code/setup/sxd/components/component.stories.tsx.hbs", "setup/sxd/components/component.stories.tsx.template")
					.withTime({
						"start" : 23300,
						"duration" : 100
					})
					.addCode("/code/setup/sxd/components/component.styles.tsx.hbs", "setup/sxd/components/component.styles.tsx.template")
					.withTime({
						"start" : 23400,
						"duration" : 100
					})
					.addCode("/code/setup/sxd/components/component.test.tsx.hbs", "setup/sxd/components/component.test.tsx.template")
					.withTime({
						"start" : 23500,
						"duration" : 100
					})
					.addCode("/code/setup/sxd/components/component.tsx.hbs", "setup/sxd/components/component.tsx.template")
					.withTime({
						"start" : 23600,
						"duration" : 100
					})
					.addCode("/code/setup/typescript.hbs", "setup/typescript.sh")
						.withPartial("partial_1", "step-4/code/setup/typescript_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-4/code/setup/typescript_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 23700,
						"duration" : 100
					})
					.addCode("/code/setup/webpack-loaders.hbs", "setup/webpack-loaders.sh")
						.withPartial("partial_1", "step-4/code/setup/webpack-loaders_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 23800,
						"duration" : 100
					})
					.addCode("/code/setup/webpack-plugins.hbs", "setup/webpack-plugins.sh")
						.withPartial("partial_1", "step-4/code/setup/webpack-plugins_partials/partial_1.hbs", 0, 100)
					.withTime({
						"start" : 23900,
						"duration" : 100
					})
					.addCode("/code/setup/webpack.hbs", "setup/webpack.sh")
						.withPartial("partial_1", "step-4/code/setup/webpack_partials/partial_1.hbs", 0, 100)
						.withPartial("partial_2", "step-4/code/setup/webpack_partials/partial_2.hbs", 100, 100)
					.withTime({
						"start" : 24000,
						"duration" : 100
					})
					.addCode("/code/setup/docker.hbs", "setup/docker.sh")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/setup/jest.hbs", "setup/jest.sh")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
					.addCode("/code/setup/sdk/package.hbs", "setup/sdk/package.json")
					.withTime({
						"start" : 900,
						"duration" : 100
					})
					.addCode("/code/setup/sdk/playbook.hello.hbs", "setup/sdk/playbook.hello.json")
					.withTime({
						"start" : 1000,
						"duration" : 1300
					})
					.addCode("/code/setup/sdk/playbook.hbs", "setup/sdk/playbook.json")
					.withTime({
						"start" : 2300,
						"duration" : 200
					})
					.addCode("/code/setup/sdk/playbook.sdk.hbs", "setup/sdk/playbook.sdk.js")
					.withTime({
						"start" : 2500,
						"duration" : 400
					})
					.addCode("/code/setup/sdk/screenscrape-mozilla-js-v2.hbs", "setup/sdk/screenscrape-mozilla-js-v2.js")
					.withTime({
						"start" : 2900,
						"duration" : 200
					})
					.addCode("/code/setup/sdk/screenscrape-mozilla-js.hbs", "setup/sdk/screenscrape-mozilla-js.js")
					.withTime({
						"start" : 3100,
						"duration" : 100
					})
					.addCode("/code/setup/sdk/yarn.hbs", "setup/sdk/yarn.lock")
					.withTime({
						"start" : 3200,
						"duration" : 500
					})
					.addCli()
						.withCommand("git checkout -b feature/plan")
					.withTime({
						"start" : 0,
						"duration" : 100
					})
