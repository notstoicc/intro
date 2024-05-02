---
title: Projects - Anthony Fu
display: Projects
description: List of projects that I am proud of
wrapperClass: 'text-center'
projects:
  WeBlog:
    - name: 'Nuxt ESLint'
      link: 'https://github.com/nuxt/eslint'
      desc: 'All-in-one ESLint module for Nuxt'
      icon: 'i-simple-icons-eslint'
    - name: 'Nuxt Playground'
      link: 'https://github.com/nuxt/learn.nuxt.com'
      desc: 'Interactive Playground for learning Nuxt'
      icon: 'i-logos-nuxt-icon saturate-0'
    - name: 'Nuxt DevTools'
      link: 'https://github.com/nuxt/devtools'
      desc: 'Unleash Nuxt Developer Experience'
      icon: 'i-logos-nuxt-icon saturate-0'

---

<!-- @layout-full-width -->

<ListProjects :projects="frontmatter.projects" />
