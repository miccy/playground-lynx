# Miccy Lynx Playground

Experimentální projekt s frameworkem Lynx.

## Struktura projektu

Projekt je organizován jako monorepo pomocí Turborepo:

- `apps/` - obsahuje aplikace
- `packages/` - obsahuje sdílené balíčky

## Příkazy

```bash
# Spuštění vývojového prostředí
bun dev

# Build všech aplikací a balíčků
bun build

# Spuštění linteru
bun lint

# Spuštění testů
bun test

# Vyčištění cache a node_modules
bun clean

# Formátování kódu
bun format
```

## Technologie

- [Bun](https://bun.sh/) - JavaScript runtime a package manager
- [Turborepo](https://turbo.build/) - Build systém pro monorepo
- [Lynx](https://lynxjs.io/) - JavaScript framework
