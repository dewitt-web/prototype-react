# Contribution Guidelines

## Git Workflow
Please follow [GitHub flow](https://guides.github.com/introduction/flow/) - create a branch for each new feature, fix, etc, then submit a pull request (PR) to merge into the `master` branch. When merging PRs, do it manually instead of using GitHub's GUI to ensure a flat branch (rebase/squash merge) and to ensure commit messages follow the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) specification for future changelog and release automation.

## Docker-based Environment Setup (Optional)
This is optional, but if you'd prefer to use Docker, you can simply run these two commands to use the provided `Dockerfile`:
- `docker build -t prototype-react .`
- `docker run --rm -it -p 3000:3000 -p 9229:9229 -v $(pwd):/prototype-react prototype-react`
  - NOTE: If using PowerShell or CMD, replace `$(pwd)` - `$(pwd).Path` for PowerShell or `%CD%` for CMD
- Run your terminal commands as needed
- `exit` when done
