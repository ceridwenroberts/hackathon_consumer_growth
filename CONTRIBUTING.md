# Project workflow

## Branch naming

Branch names in kebab-case

Use following prefixes for branch naming:

- `feat/` — New features
- `fix/` — Bug fixes
- `docs/` — Documentation changes

Example: `feat/login-form`

## Before committing

1. Format code
   npm run format:check
   npm run format

2. Check lint errors
   npm run lint

3. Test changes

# Git workflow

### New branch

    git checkout main
    git pull origin main
    git checkout -b branchname

### Committing Changes

    Review your changes before committing:

    git status
    git diff

    Stage specific files:

    git add path/to/file

    (Stage all changed files:

    git add .)

### Create a commit:

    git commit -m "Add signup form"

## Push Your Branch

    git push -u origin feat/signup-form

    For later pushes from the same branch:

    git push

## Fetch the latest remote branches:

    git fetch origin

    ## Update branch (/pull request)

    git add .
    git commit -m "Address pull request feedback"
    git push

## Merge to main

    git checkout main
    git pull origin main

## Component Reuse

Before creating a new UI component, check whether an existing component can be reused.

components/
├── ui/ # Basic, reusable building blocks
│ ├── Button.tsx
│ ├── Input.tsx
│ ├── Card.tsx
│ ├── Badge.tsx
│ ├── Modal.tsx
│ ├── Progress.tsx
│ └── Spinner.tsx
│
├── layout/ # Shared page structure
│ ├── Header.tsx
│ ├── Container.tsx
│ └── Section.tsx
│
├── features/ # Components combining UI building blocks
│ ├── auth/
│ │ ├── AccountActions.tsx
│ │ ├── LogInForm.tsx
│ │ └── SignUpForm.tsx
│ │
│ ├── dashboard/
│ │ ├── DashboardCard.tsx
│ │ └── ProjectProgress.tsx
│ │
│ └── projects/
│ ├── ProjectCard.tsx
│ └── ProjectList.tsx
│
└── prototype/ # Temporary demos and experiments
└── StepIndicator.tsx
