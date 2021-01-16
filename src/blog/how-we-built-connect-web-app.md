---
layout: blog
title: How we built the Connect Web App – Part 1 – Breaking from our past
description: The story of designing the Interaction Framework and a PWA, enabling us to automate the process of building and delivering financial products & services to our users.
image: /assets/img/blog/connect.jpeg
date: 2016-08-04T20:03:37+05:30
tags: ["architecture"]
author: Kumar Abhishek
---


> This is a ~~series of~~ posts about my adventure with an exciting project at Eko:  [connect.eko.in](https://connect.eko.in), the progressive web app enabling Eko‘s merchants to make payments and other financial transactions.

## The Past
About eight years ago, [Eko](https://eko.in) introduced the simplest of all interfaces to bring banking, payments and other financial transactions to the masses: by dialing numbers on a basic mobile phone. But as the smartphones and laptops grew in popularity with our merchants, we introduced other smart applications. One of them was a simple web portal for money remittance called “Connect”:

![Old Connect Screenshot](/assets/img/blog/old-connect.jpeg)

The website was immediately successful with our partner merchants, thanks mostly to its simple three-pane interface for transferring money to any bank account in India.

> In the three years of it's existence, the old Connect portal had already been used to transact for more than 6 billion dollars.


But soon, money remittance service was not enough. We wanted to introduce more services. The only problem was that our engineers had to individually design and build interfaces for these new services. And we realized…

- we had to manually design and code each page/interface separately. The process was too slow!
- the three-pane interface was only suitable for the remittance workflow
- we needed a different interface for different services

And, as a solution, us lazy folks at Eko came up again with our common mantra:

> generalize and automate!


## Breaking From The Past

So, we came up with the following solution:

1. The **Interaction Framework**: to _generalize_ all the financial services (transactions) supported by our platform into interactions that take place between two or more entities. _For example_, a money transfer is an interaction between two bank/wallet accounts. Over this generalization, we defined requests, responses, parameters, complex validations, interaction relationships, interaction flows, dynamic behavior, etc. This became our **Interaction Framework**!
2. A **Progressive Web App**: to build a progressive web app and _automate_ the process of providing new services by leveraging the Interaction-Framework. We decided to use [Google Polymer](https://www.polymer-project.org) (which was still in beta, back then) and build custom web components purely on the front-end web technologies.
3. An **API Backend**: to design a backend service on **Node.js** that would be totally _decoupled_ from the front-end app.

