# Project specs

## How to run

- Step 1:

```bash
cd client && yarn serve
```

- Step 2:

```bash
python manage.py collectstatic
```

- Step 3:

```bash
python manage.py runserver
```

## How to deploy

- Step 1: Enable ManifestStaticfilesStorage to help with versioning and cache busting.
- Step 2:

```bash
cd client && yarn build
```

```bash
python manage.py collectstatic
```
