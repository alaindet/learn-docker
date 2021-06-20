# Network demo app

This app "speaks" with both the internet and a local running instance of MongoDB on port 27017

## Usage

```
docker build -t nets-im .
```

```
docker run --name nets-co -d --rm -p 3000:3000 nets-im
```
