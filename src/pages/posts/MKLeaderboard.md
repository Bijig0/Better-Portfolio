---
layout: '@/templates/BasePost.astro'
title: Mortal Kombat Leaderboard
description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos excepturi.
pubDate: 2021-05-06T00:00:00Z
imgSrc: '/assets/images/MortalKombatLogo.png'
imgAlt: 'Image post'
---

My very first experience working with React. A simple app that fetches data from a Mortal Kombat leaderboard server, performs some transformations on it and displays it for end users. The servers were not CORS friendly, and so I had to self-host cors anywhere to proxy the incoming response for it to successfully display on the screen.