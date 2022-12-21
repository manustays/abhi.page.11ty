---
layout: note
title: TanStack Router – A Routing Library for TypeScript Applications
description: Introducing TanStack Router – The First TypeScript-Supported Routing Library
emoji: ⚛️
date: 2022-10-20T13:08:37+05:30
tags:
  - react
  - vue
  - svelte
  - library
links:
  - https://tanstack.com/router/v1
---

> A fully typesafe router with first-class search-param APIs and built-in caching, built for JS/TS, React, Preact, Solid, Vue and Svelte.

If you're a fan of TypeScript, you'll be excited to hear about `TanStack Router`, the first type-safe routing library for TypeScript applications.

Potential advantages of using TanStack Router:
- `Type safety` for routes.
- `Autocomplete` suggestions for routes.
- First-class `search parameter support`: useful for storing state in a URL and sharing links.
- `Improved reliability` by ensuring that routes are correctly defined and used.

One of the challenges with routing in any language is that routes are often defined in one place (e.g. a config file or a page-based system like React Router) and used in another (e.g. links in pages, redirects). This means that if you change a route in one place, you have to manually update it in all the other places where it's used. This can lead to bugs and broken routing if you miss a change or misspell a route.

TanStack Router aims to solve this problem by providing type safety for routes. This means that the router is aware of all the different routes in your application, and it can give you **autocomplete suggestions** and flag errors if you misspell or use incorrect information for a route. This makes writing routes much easier and helps prevent issues with broken routing.

TanStack Router also has **first-class support for search parameters**, which can be used to store state in a URL and share links. This can be particularly useful if you prefer to use search params over state variables for storing application state.

While TanStack Router _is still in beta_, it shows a lot of promise for improving the routing process in TypeScript applications. If you're interested in giving it a try, be aware that there are currently some missing features and documentation, and the syntax is subject to change. However, the 100% TypeScript support and type safety make it worth keeping an eye on as it continues to develop.
