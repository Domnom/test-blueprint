[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
# Project Plan

## Stack architecture 
`Production ready Typescript Fullstack++`

    * React with Typescript
    * Express with Typescript (NestJs)
    * AWS CDK with Typescript

`Environments`
* Local 
* Dev (Local on MiniKube) 
* Dev on Surge 
* QA 
* Production 

`Client`
* React with Redux
    * Redux 
    * Helmet 
* Webpack 
* Nginx on Docker  


`API`
* NestJs with Swagger 
* Docker with Node 

`Postgres`
* Docker 


`IDp`
* Keycloak 

`DevOps`
* CircleCI 
* Kubernetes
* S3 for CDN 
* AWS Kubernetes 
    * AWS ECS Elastic Container Service -> setups EC2 
    * AWS ECR Elastic Container Registry 
    * AWS Application LoadBalancer (Firewall)
    * AWS VPC 
    * AWS EC2 for Virtual Machines in Cluster 
    * AWS FarGate - Simple ECS 
    * AWS EKS 
    * AWS Route53 DNS as a Service 
    * AWS serveless (alt) - lip service 
    * Kubernetes 
        * Volumes 
        * Secrets
        * ConfigMaps 

`Platforms?`
* Caching with Redis (optional) 
* Search index with Elastic Search? (optional) 



## Proposed Change Request
1. Learn By Doing (LBD) - Trello 
    * Port to TS
    * Add an API 
    * DevOps
        * CICD - Travis 
        * Environment - Docker and Kubernetes 
        * AWS CDK with Typescript - setup AWS with Kubernetes 
    * Playbook

2. Tool - Playbook view 
    * Terminal 
    * Browser automation 
    * Audio 

3. MVP UX for a learner 
    * Simple hompage 
    * Authn/Authz integration with Keycloak 
        * Login
        * Register 
        * Change password 
        * Style so its on brand 

    * Learning Path (Read only) 
        * Style looks good 
        * CRUD 

3. Learn By Doing (LBD) - Twitter  
    * Port the pug files to React / Redux 
    * Port API to NestJs (Optional) 
    * DevOps
        * CICD - Travis 
        * Environment - Docker and Kubernetes 
        * AWS CDK with Typescript - setup AWS with Kubernetes 
    * Playbook    
    

# Learning Path/Nanodegree  
### Read the Docs Path 
1. Fundamentals
    * HTML + CSS from W3Schools 
        * Responsive Layout 
            * CSS Grid 
            * CSS Flexbox 

    * JS from Mozilla 
        * 

2. Read the Docs   
    * React and Redux 
    * NestJs 
    * Webpack 


3. Common Patterns 
    * Setup Environments 
        - Webpack 
        - CICD 
        - Infrastructure with AWS 
        - OIDC 
        - AWS Gateway 
        - Caching 
        - Common cloud configurations 

    * Frontend (React/TS)
        - Responsive layouts 
            - Off canvas navs 
            - Border layout 
            - Accessibility and PWA with LightHouse 
        - Pass data 
        - State Management 
            - Redux 
            - Context API 
            - GraphQL (optional) 
        - Interaction 
            - Drag n Drop
            - Sort 
            - Nested sortable 
            - DnD onto Sortable 
        - File uploads 
            - Input 
            - DnD onto the Canvas 
            - DnD onto a Dropzone 
            - Upload to Filesystem with Nest/Node 
            - Upload to S3 
            - Kubernets with Gluster? (optional) 
        - Webpack 
            - splitting ext 
        - Authn/Authz 
            - Roll your own 
            - AWS Cogbnito 
            - Auth0 
            - Keycloak OIDC and Docker 
        - TreeView 
            - Drag onto tree 
            - Drag between trees 
            - Drag tree to Dom 
        - Maps 
        - Flowchart (optional) 


    * API 
        - Nest (docs) 

4. Projects - Learn by Doing 
    * Project - Trello 
    * Project - Twitter 
    * Project - Yelp (Map)  
    * Project - Instagram <--- next year 
    * Project - Facebook 
    * Project - Uber 

5. Projects - Build your own ERP 
    * Project - Project Managmeent - Jira clone 
    * Project - Accounting - Xero clone 
    * Project - Inventory Management 



# Playbook - Template 
0. Overview architecture 
    Pictures and diagrams 


1. Install local 
    * NodeJs 
    * Git 
    * Docker 
    * Minikube 
    * Optional (Postgres)
    * Viewer - Postgres CRUD (Sequel Pro)
    * Postman 

    * Steps 
        * Install 
        * localhost:3000 --> Hello world!

2. Setup     

    * CLI tools 
        * Setup git commit zen 
        * semantic relase cli 
    
    * Lerna Workspaces 
        - common 
        - backend 
        - frontend 

    * React 
        - options to run react 
            - Create react app 
            - NextJs 
            - Webpack - we will use this 
            - pros and cons 
        - npm init - package 
        - setup webpack dev and prod 
        - push to surge 

        end point is Hello world on surge and loclahost  

    * Setup Docker 
        - Docker multi build 
            - Client with Nginx 
            - MS with Node 
        - docker compose 
            - volumes 
            - networks 
            - logs 

        Hello world on Docker compose 


    * Setup Nest Js 

        Endpoint: 
        Swagger on Docker compose 
        Swagger on next js 
        Push that to NextJs 

    * Setup AWS with CDK 
        - AWS CDK 
        - Cloud formation sync 
        - Kubernetes on AWS 

        Endpoint: 
        Hello world on AWS 

    * Setup CICD    
        - Git branch model 
        - Circle CI 
            - push to master deploy to staging 

        Succesful Endpoint: 
        Hello world on AWS when push to `master`

    * Setup OIDC with Keycloak (optional) 
        - OIDC sequence dirgams and a mock server 
            - what gets posted 
            - what gets received 
            - Postman ? 
        - Options - Cognito 
        - Setup OIDC with Keycloak 
        - Theme 

    * Setup OIDC with Cogntio (optional) 
    * Setup OIDC with Auth0  (optional) 

    * Setup CDN with S3 
        - Push from cli with Secret 

    * Setup Storybook 
    * Setup Testing 
        - jest 
        - cycpress 
        - cypress with CICD 
        - codecoverage with CICD  

3. Tute - Trello front end 

    3.0 Workflow 
        * Design (take from digram from Depot of Education) 
        * BDD 
        * TDD 
        * Readme DD 
        * CDD 
        * Setup Github Projects 
    3.1 Design 
        * Wireframes 
        * Simple UX flow 
        * Sketch 
        * Host those in Storybook (addon for sketch) 
    3.2. Card 
        * Wireframe review 
        * User story 
            * Acceptance criteria in BDD 
                GIVEN 
                WHEN 
                THEN 
            * Commit zen format 
        * BDD 
            * Write UI snapshot test in jest (with Cucumber extensions)
            * Write e2e test in Cypress with Cucumber extensions  
        * TDD 
            * Write unit test in jest (#todo - review this)
                - Snapshot 
                - Rendered component 
                - Input 
                - Output 
                - Actions 
        * TDD Red/Green/Refactor 
            - Failing test 
            - Pass test 
            - refactor 
        * Add to storybook 
        * Git commit and code review 
    3.3. Card List 
    3.4. Board 
    3.5. User 
    3.6. CRUD - Board   
    3.7. CRUD - CardList    
    3.8. CRUD - Board 
    3.9. CRUD - User management 
    3.10. Interaction - Card Drag n drop  
    3.11. Interaction - Card sort 
    3.12. Interaction - Board sort  

    4.0 API 
    * Swagger 
    * One with roll your own Ctrl and service 
    * Replace refactor with Nest CRUD 
    * Entities
        - migrations
        - seeds 
    * Ctrl 
    * Repository  
    * Validation 

    
    5.0 Authn/Authz 
    * API Guards with your user management 
    * API Guards with OIDC 
    * OIDC client (skip the Server)
     
        
        
        





# Playbook - Approach 
### Trello 
0. Jot down some notes on the things to test for frontend and backend 
1. PoC - Refcator to  Ts 
2. Document your stuff in MDX 
3. If installing stuff - refactor to a setup.sh script with doc comments 
4. POC - API 
5. Document your stuff in MDX 
6. If installing stuff - refactor to a setup.sh script with doc comments 



# Todo 
* find a place to store this list - trello and as readme 
* Dom - checklist of things to test per 'entity' and add to this project plan blueprint 
* Mitchy - transform project plan into User Stories on private Github 

`folder structure`
```
readme.md - this project plan 
docker-compose.yml 
/workspaces 
    /common 
    /frontend  
    /backend  
/frontend 
    Dockerfile.dev 
    Dockerfile.prod 
    /src
/backend
    Dockerfile.dev 
    Dockerfile.prod 
    /src
lerna.json
package.json
``` 


# SDK 
### CodeSnippet 
* What to show in the description panel 
* Start 
    * File to start from? 
        * Path 
        * github repo 
        * branch ? 
    * Text to start from?  
* Find
    * regex to replace 
* Replace     
    * File to replace with ?
        * Path 
        * github repo 
        * branch ? 
    * Text to replace with ? 
* Output 
    * File to the finished file 
        * Path 
        * github repo 
        * branch ? 




