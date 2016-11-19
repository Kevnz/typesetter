# Typesetter

Generates models and migrations to be used with bookshelf and knex.

## Install
```bash
npm install typesetter -g
```

## Usage

### Model
To generate a model and migration to go along with the model

```bash
typesetter model User firstName:string lastName:string
```
This will generate a model named user and a migration with a timestamp.

### Migration
```bash
typesetter migrate new-feature-set
```
