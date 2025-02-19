# Layout-Simple (Vue.js)

**Layout-Simple** is a simple business website layout built with **Vue.js**, structured into components with separate data files.

---

## Project Structure

```
LAYER-SIMPLE
├── frontend/
│ ├── node_modules/
│ ├── public/
│ │ ├── index.html
│ ├── src/
│ │ ├── assets/ (Logo and other assets)
│ │ ├── components/ (Vue components)
│ │ │ ├── Aktualnosci.vue
│ │ │ ├── Branze.vue
│ │ │ ├── Footer.vue
│ │ │ ├── LogaFirm.vue
│ │ │ ├── Navbar.vue
│ │ │ ├── Produkty.vue
│ │ │ ├── Sidebar.vue
│ │ │ ├── Slider.vue
│ │ │ ├── Uslugi.vue
│ │ ├── data/ (Data files)
│ │ │ ├── AktualnosciData.js
│ │ │ ├── BranzeData.js
│ │ │ ├── FooterData.js
│ │ │ ├── ProduktyData.js
│ │ │ ├── SliderData.js
│ │ │ ├── UslugiData.js
│ │ ├── styles/ (CSS files for components)
│ │ ├── views/ (Views)
│ │ │ ├── HomeView.vue
│ │ ├── App.vue
│ │ ├── main.js
│ ├── .gitignore
│ ├── package.json
│ ├── package-lock.json
│ ├── README.md
│ ├── start.bat (Windows startup script)
│ ├── start.sh (Linux/macOS startup script)
├── grafika/ (Screenshots, PSD files)
│ ├── simple 320.jpg
│ ├── simple 768.jpg
│ ├── simple.jpg
├── LICENSE
├── CHANGELOG
```

---

## Technologies

- **Vue.js 3** – Modern frontend framework
- **CSS (separate stylesheets for components)** – UI styling
- **JavaScript (ES6+)** – Component logic and data handling
- **Node.js + npm** – Dependency management

---

## Features

✅ **Responsive Layout** – Adapts to different screen sizes
✅ **Component-Based Structure** – Modular and easy to edit
✅ **Separate Data Files** – Text and content stored separately
✅ **CSS Styling** – Each component has its own styles
✅ **Startup Scripts** – Easy project initialization

---

## Installation

1. **Clone the repository**:

```bash
   git clone https://gitlab.ideo.pl/m.koszyk/layout-simple
   cd layout-simple
```

2. **Install dependencies**:

```bash
   npm install
```

---

## ▶️ Running the Project

**Windows**:

```bash
start.bat
```

**Linux/macOS**:

```bash
bash start.sh
```

Or manually:

```bash
npm run dev
```

The project should open on the default address:  
[http://localhost:8000](http://localhost:8000)

---

## Component Breakdown

### **Navbar.vue**

- Main navigation (Industries, Products, Services, News, Contact, References)

### **Sidebar.vue**

- Sidebar menu (Menu, Industries, Products, Services, News, Contact, About Us, Awards, Investor Relations, Partners, Careers, Customer Zone)
- Social media icons (Facebook, LinkedIn)

### **Slider.vue**

- Image carousel
- Newsletter subscription form

### **Branze.vue**

- 9 industries (hover effect: background turns gray)

### **Produkty.vue**

- 10 circular elements with product names

### **Uslugi.vue**

- Service icons + descriptions

### **Aktualnosci.vue**

- News slider

### **Footer.vue**

- Contact section (form, contact details, social media)
- Partner company logos slider

---

## Styling

Each component has a separate CSS file in the `src/styles/` directory. Examples:

- `NavbarStyle.css`
- `SidebarStyle.css`
- `SliderStyle.css`
- `BranzeStyle.css`
- `ProduktyStyle.css`
- `UslugiStyle.css`
- `FooterStyle.css`

---

## Additional Information

- All content and text data are stored in the `data/` directory, allowing easy modification without changing Vue components.
- CSS files in `styles/` allow flexible customization of the website appearance.
- The startup scripts `start.bat` and `start.sh` simplify project execution.

---

## Author

Project created as part of **internship as a PHP Developer**  
GitHub Repository: [https://gitlab.ideo.pl/m.koszyk/layout-simple](https://gitlab.ideo.pl/m.koszyk/layout-simple)

---

## Project Status

**In Development** – Finished!
