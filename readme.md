# Typesetter

Generates models and migrations to be used with bookshelf and knex.

## Usage

With npx

### Model
To generate a model and migration to go along with the model

```bash
npx typesetter model User firstName:string lastName:string
```
This will generate a model named user and a migration with a timestamp.

### Migration
```bash
npx typesetter migrate new-feature-set
```

## Install

Global

```bash
npm install typesetter -g
```

Locally

```bash
npm install typesetter --save-dev
```