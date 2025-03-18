# Lynx Playground

Experimental project with the Lynx framework.

## Project Structure

The project is organized as a monorepo using Turborepo:

- `apps/` - contains applications
- `packages/` - contains shared packages

## Commands

```bash
# Run development environment
bun dev

# Build all applications and packages
bun build

# Run linter
bun lint

# Run tests
bun test

# Clean cache and node_modules
bun clean

# Format code
bun format
```

## Technologies

- [Bun](https://bun.sh/) - JavaScript runtime and package manager
- [Turborepo](https://turbo.build/) - Build system for monorepo
- [Lynx](https://lynxjs.io/) - JavaScript framework
