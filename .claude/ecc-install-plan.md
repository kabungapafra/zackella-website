# ECC install plan — zackella website

Generated 2026-10-07 by `~/.claude/scripts/ecc-agent-sort.sh` (ECC 2.2.2).
Evidence: ECC `config/project-stack-mappings.json` indicators matched against this repo root.

## STACK

- **typescript** — tsconfig.json; package.json contains 'typescript'; 42 source files (.ts, .tsx)
- **javascript** — package.json; eslint.config.mjs; 274 source files (.js, .jsx, .mjs, .cjs)
- **react** — package.json contains '"react":'; 25 source files (.tsx, .jsx)
- **nextjs** — next.config.ts; package.json contains '"next":'

Top file types:
```
  .js       272
  .map      228
  .json     104
  .webp     45
  .meta     41
  .rsc      39
  .woff2    34
  .sst      33
  .tsx      25
  .ts       17
  .jpg      13
  .png      12
```

## DAILY

| component | type | evidence |
|---|---|---|
| skills/accessibility | skill | stack: react |
| skills/backend-patterns | skill | stack: nextjs |
| skills/coding-standards | skill | stack: typescript,javascript,react,nextjs |
| skills/deployment-patterns | skill | stack supplement: nextjs |
| skills/design-system | skill | dependency match |
| skills/frontend-a11y | skill | stack supplement: react |
| skills/frontend-patterns | skill | stack: react,nextjs |
| skills/git-workflow | skill | operator baseline (git repo) |
| skills/nextjs-turbopack | skill | stack supplement: nextjs |
| skills/react-patterns | skill | stack: react |
| skills/react-performance | skill | stack: react |
| skills/react-testing | skill | stack: react |
| skills/tdd-workflow | skill | stack: typescript,javascript,react,nextjs |
| skills/verification-loop | skill | stack: typescript,javascript,react,nextjs |
| agents/a11y-architect | agent | dependency match |
| agents/build-error-resolver | agent | stack: typescript,javascript |
| agents/code-explorer | agent | operator baseline (git repo) |
| agents/code-reviewer | agent | operator baseline (git repo) |
| agents/react-build-resolver | agent | stack: react,nextjs |
| agents/react-reviewer | agent | stack: react,nextjs |
| agents/security-reviewer | agent | operator baseline (git repo) |
| agents/typescript-reviewer | agent | stack: typescript,javascript,nextjs |
| rules/common/* | rules | matched stack |
| rules/react/* | rules | matched stack |
| rules/typescript/* | rules | matched stack |
| rules/web/* | rules | matched stack |

Dependency-driven additions:

- `tailwindcss` in package.json -> frontend-patterns,design-system

## LIBRARY

278 skills and 60 agents stay searchable but off-by-default —
no indicator for them matched this repo. LIBRARY is not deletion: `/ecc:<name>` still works.

<details><summary>LIBRARY skills</summary>

    agent-architecture-audit agent-eval agent-harness-construction agentic-engineering agentic-os 
    agent-introspection-debugging agent-payment-x402 agent-self-evaluation agent-sort 
    ai-first-engineering ai-regression-testing android-clean-architecture angular-developer 
    api-connector-builder api-design architecture-decision-records article-writing automation-audit-ops 
    autonomous-agent-harness autonomous-loops benchmark benchmark-methodology 
    benchmark-optimization-loop blender-motion-state-inspection blueprint brand-discovery brand-voice 
    browser-qa bun-runtime canary-watch carrier-relationship-management cisco-ios-patterns ck 
    claude-devfleet clickhouse-io click-path-audit codebase-onboarding codehealth-mcp code-tour 
    competitive-platform-analysis competitive-report-structure compose-multiplatform-patterns config-gc 
    configure-ecc connections-optimizer content-engine content-hash-cache-pattern context-budget 
    continuous-agent-loop continuous-learning continuous-learning-v2 contract-first 
    cost-aware-llm-pipeline cost-tracking council council-multi-model counterparty-channel-discipline 
    cpp-coding-standards cpp-testing crosspost csharp-testing customer-billing-ops 
    customs-trade-compliance dart-flutter-patterns dashboard-builder database-migrations 
    data-scraper-agent data-throughput-accelerator deep-research defi-amm-security delivery-gate 
    dev-team django-celery django-patterns django-security django-tdd django-verification 
    dmux-workflows docker-patterns documentation-lookup dotnet-patterns dynamic-workflow-mode 
    e2e-testing ecc-guide ecc-recipes ecc-tools-cost-audit email-ops energy-procurement 
    enterprise-agent-ops error-handling esign-field-placement eval-harness evm-token-decimals 
    exa-search fal-ai-media fastapi-patterns finance-billing-ops flox-environments 
    flutter-dart-code-review foundation-models-on-device frontend-design-direction frontend-slides 
    fsharp-testing gan-style-harness gateguard generating-python-installer github-ops golang-patterns 
    golang-testing google-workspace-ops growth-log healthcare-cdss-patterns healthcare-emr-patterns 
    healthcare-eval-harness healthcare-phi-compliance hermes-imports hexagonal-architecture 
    hipaa-compliance homelab-network-readiness homelab-network-setup homelab-pihole-dns 
    homelab-vlan-segmentation homelab-wireguard-vpn hookify-rules inherit-legacy-style 
    intent-driven-development inventory-demand-planning investor-materials investor-outreach 
    ios-icon-gen iterative-retrieval ito-baskets ito-compute ito-inference ito-training 
    java-coding-standards jira-integration jpa-patterns knowledge-ops kotlin-coroutines-flows 
    kotlin-exposed-patterns kotlin-ktor-patterns kotlin-patterns kotlin-testing kubernetes-patterns 
    laravel-patterns laravel-plugin-discovery laravel-security laravel-tdd laravel-verification 
    latency-critical-systems lead-intelligence liquid-glass-design living-docs-governance 
    llm-trading-agent-security logistics-exception-management loop-design-check 
    mailtrap-email-integration make-interfaces-feel-better manim-video marketing-campaign 
    market-research master-agreement-generator mcp-server-patterns messages-ops ml-adoption-playbook 
    mle-workflow motion-advanced motion-foundations motion-patterns mysql-patterns nanoclaw-repl 
    nasiko-control-plane nestjs-patterns netmiko-ssh-automation network-bgp-diagnostics 
    network-config-validation network-interface-health nodejs-keccak256 nutrient-document-processing 
    nuxt4-patterns openclaw-persona-forge opensource-pipeline operator-approval-loop orch-add-feature 
    orch-build-mvp orch-change-feature orch-fix-defect orch-pipeline orch-refine-code 
    parallel-execution-optimizer perl-patterns perl-security perl-testing plan-canvas 
    plankton-code-quality plan-orchestrate postgres-patterns prediction-market-oracle-research 
    prediction-market-risk-review prisma-patterns product-capability production-audit 
    production-scheduling product-lens project-flow-ops prompt-optimizer python-patterns python-testing 
    pytorch-patterns quality-nonconformance quarkus-patterns quarkus-security quarkus-tdd 
    quarkus-verification rails-patterns ralphinho-rfc-pipeline react-native-patterns 
    recsys-pipeline-architect recursive-decision-ledger redis-patterns regex-vs-llm-structured-text 
    remotion-video-creation repo-scan research-ops returns-reverse-logistics rules-distill 
    rust-patterns rust-testing safety-guard santa-method scientific-db-pubmed-database 
    scientific-db-uspto-database scientific-pkg-gget scientific-thinking-literature-review 
    scientific-thinking-scholar-evaluation search-first security-bounty-hunter security-review 
    security-scan seo skill-comply skill-scout skill-stocktake social-graph-ranker social-publisher 
    springboot-patterns springboot-security springboot-tdd springboot-verification strategic-compact 
    swift-actor-persistence swift-concurrency-6-2 swift-protocol-di-testing swiftui-patterns taste 
    taste-application taste-distillation tasteforge-video team-agent-orchestration team-builder 
    terminal-opener terminal-ops tinystruct-patterns token-budget-advisor ui-demo ui-to-vue uncloud 
    unified-memory unified-notifications-ops videodb video-editing visa-doc-translate vite-patterns 
    vue-patterns windows-desktop-e2e workspace-surface-audit x-api

</details>

<details><summary>LIBRARY agents</summary>

    agent-evaluator architect chief-of-staff code-architect code-simplifier comment-analyzer 
    conversation-analyzer cpp-build-resolver cpp-reviewer csharp-reviewer dart-build-resolver 
    database-reviewer django-build-resolver django-reviewer docs-lookup doc-updater e2e-runner 
    fastapi-reviewer flutter-reviewer fsharp-reviewer gan-evaluator gan-generator gan-planner 
    go-build-resolver go-reviewer harmonyos-app-resolver harness-optimizer healthcare-reviewer 
    homelab-architect java-build-resolver java-reviewer kotlin-build-resolver kotlin-reviewer 
    loop-operator marketing-agent mle-reviewer network-architect network-config-reviewer 
    network-troubleshooter opensource-forker opensource-packager opensource-sanitizer 
    performance-optimizer php-reviewer planner pr-test-analyzer python-reviewer pytorch-build-resolver 
    rag-pipeline-reviewer refactor-cleaner rust-build-resolver rust-reviewer seo-specialist 
    silent-failure-hunter spec-miner swift-build-resolver swift-reviewer tdd-guide type-design-analyzer 
    vue-reviewer

</details>

## INSTALL PLAN

Apply (writes `skillOverrides` into `.claude/settings.local.json`, git-ignored):

```bash
~/.claude/scripts/ecc-agent-sort.sh apply "/home/darlin-pafra/zackella website"
```

Revert: delete the `skillOverrides` key from `.claude/settings.local.json`.
Re-run after the stack changes: `~/.claude/scripts/ecc-agent-sort.sh plan "/home/darlin-pafra/zackella website"`.

## VERIFICATION

- Catalog checked: every DAILY name above resolves to a real file under `/home/darlin-pafra/.claude/plugins/cache/ecc/ecc/2.2.2`.
- Stacks matched at repo root only, so a nested `android/` or `ios/` shell does not
  promote a native stack in a cross-platform repo.
- Stacks whose config file matched but whose source files are absent are listed as demoted.
