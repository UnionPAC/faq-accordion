# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### ⚔️ The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### 📸 Screenshots

![Desktop View](./Screenshot%202024-01-08%20at%2012-32-56%20Frontend%20Mentor%20FAQ%20accordion.png)
![Desktop View with question open](./Screenshot%202024-01-08%20at%2012-50-34%20Frontend%20Mentor%20FAQ%20accordion.png)
![Mobile View](./Screenshot%202024-01-08%20at%2012-33-49%20Frontend%20Mentor%20FAQ%20accordion.png)


### 🔗 Links

- Live Site URL: https://faq-accordion-chi-fawn.vercel.app/

## My process

### 🧱 Built with

- HTML5
- [SASS](https://sass-lang.com/)
- Flexbox
- CSS Grid
- Mobile-first workflow

### 🤓 What I learned

One of the ways that this challenge encouraged you to test yourself was:

>Navigate the questions and hide/show answers using keyboard navigation alone

My solution to this was to use the html attribute `tabIndex = 0` on the question, so users can tab through the questions in the FAQ Accordion. If a user wishes to see the answer, he/ she only has to click `Enter`.

To navigate forward use `tab`
To navigate backward use `tab + shift`

*see code snippets below:*

```html
<div class="question" tabindex="0">
            <h4>Can I use Frontend Mentor projects in my portfolio?</h4>
            <div class="icons">
              <img
                src="./assets/images/icon-plus.svg"
                class="plus-icon"
                alt="expand"
              />
              <img
                src="./assets/images/icon-minus.svg"
                class="minus-icon"
                alt="collapse"
              />
            </div>
          </div>
```
```js
// handle enter click
document.addEventListener("keypress", (e) => {
  if (e.key == "Enter" && e.target.classList.contains("question")) {
    console.log("yes");
    e.preventDefault();
    e.target.click();
  }
});
```


### 🙏 Useful resources

- [tabindex - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) - This MDN guide on tabindex helped me to learn about keyboard accessibility and add it to my project


## 👨🏻‍🦰 Author

- Website - [Geoff Jamieson](https://www.geoffjamieson.com/)
- Frontend Mentor - [@UnionPAC](https://www.frontendmentor.io/profile/@UnionPAC)
- LinkedIn - [linkedin/geoffjamieson](https://www.linkedin.com/in/geoffjamieson/)
