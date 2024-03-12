This is a [Storyblok](https://www.storyblok.com/) and [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The app is a Restaurant Guide built with Next.js and Storyblok CMS. It allows to store restaruants and display restaurant pages along with other information.

## Getting Started

To use this project you have to have a Storyblok account. If you don't have one yet you can register at [Storyblok](https://www.storyblok.com), it's free.


### 1. Clone the repo

```sh
  $ git clone https://github.com/storyblok/next.js-13-boilerplate.git
```

### 2. Install all dependecies 
```sh
$  npm install # or yarn
```

### 3. Adding the Access token
Create a new empty Space and exchange the preview token with your own in ```app/layout.js``` and ```components/StoryblokProvider.js```

```js
// in app/layout.js
storyblokInit({
  accessToken: "your-preview-token",
  use: [apiPlugin],
});
```

```js
// in components/StoryblokProvider.js
storyblokInit({
  accessToken: "your-preview-token",
  use: [apiPlugin],
  components
});
```

### 4. Run your project
Set the preview domain in <strong>Storyblok</strong> to `https://localhost:3000/`

```sh
# to run in developer mode
$ yarn dev # or npm run dev
```

```sh
# to build your project
$ yarn build # or npm run build
```



## Learn More

## Resources

- [Next.js docs](https://nextjs.org/docs/#setup)
- [Next.js 14 and Storyblok Tutorial](https://www.storyblok.com/tp/add-a-headless-cms-to-next-js-13-in-5-minutes)
- [Storyblok Learning Hub](https://www.storyblok.com/docs/)
- [Next.js Hub](https://www.storyblok.com/tc/nextjs)


