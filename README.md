# Playwright - Fullstack Open Blog App Exercises

This repository contains **end-to-end (E2E) tests** built with [Playwright](https://playwright.dev/) as part of the [Fullstack Open](https://fullstackopen.com/en/) course.  
The tests are designed to validate both frontend and backend functionality of the **Blog application** developed during the course.  

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/The-Memin/Playwright.git
cd Playwright
npm install
```

---

## ▶️ Running Tests

Make sure both the **backend** and **frontend** servers of your Blog project are running. Then run:

```bash
npm test
```

This will execute all Playwright tests.  

To open the **Playwright UI** for debugging:

```bash
npm exec playwright test --ui
```

---

## 🛠 Project Structure

```
Playwright/
│── tests/            # Test files
│── playwright.config.js
│── package.json
│── README.md
```

---

## 🌍 Requirements

- Node.js >= 18  
- npm  
- Running backend & frontend applications from the Fullstack Open Blog project  

---

## 📚 Resources

- [Playwright Docs](https://playwright.dev/docs/intro)  
- [Fullstack Open](https://fullstackopen.com/en/)  