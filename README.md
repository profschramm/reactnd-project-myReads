# MyReads Project

This program was created from the starter template provided by 
Udacity's React Fundamentals course. 

Interpretations
 1. On the search page, I filter out books that are already on shelves and only display books that are not on a shelf.

Known Bugs

 1. I have a warning about "Multiple modules with names that only differ in casing". I have read
    about it on the web where it says that it is likely a upper/lower case typing error. But I have been unable to find it.

Known Design Flaws

1. I started off with Book.js going to be shared between the main application and the search page, with a different Control component 
   (one to change shelves and one to add a book).  However, with me learning, I ended up with two different but similar components
   Book.js and SearchBook.js where SearchBook.js handles the case where thumbnails may not be available. I should refactor these
   but I'm late with this project and need to get working on the next project. 

Question to the Reviewer: The two books "The Linux Command Line" and "Linux Command Line" have the same thumbnail and look like duplicate books on two different shelves. Is this the way the database is, or is this a bug in my code?


## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
*    Just in case, you may also have to `npm install prop-types` and `npm install react-router-dom` and `npm install form-serialize`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. 
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── Book.js # Displays one single book on root screen
    ├── BookGrid.js # Displays a grid of books (on a shelf)  Originally intended to share Component between / and /search
                # Perhaps unnecessary if doing again.
    ├── Bookshelf.js # Displays a grid of books on a single shelf
    ├── BookShelfChange # A "control" on a single book on a Bookshelf, to allow user to move books between shelves
    ├── SearchBook.js # Displays one single searched book (Like book.js but handles missing fields) and has different "control"
    ├── SearchBooks.js # Secondary screen for searching for books to add
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

Cheryl Schramm