# Social Feed

A beautiful and responsive social media feed application built with React, featuring a modern UI design and smooth interactions.

![Social Feed Demo](![alt text](image.png))

## Features

- 📱 Responsive design that works on desktop and mobile
- ❤️ Like/unlike posts with animated interactions
- 💬 Comment system with modal interface
- 🔄 Load more posts functionality
- ⚡ Fast loading with loading states
- 🎨 Modern UI with Tailwind CSS
- 🖼️ Dynamic image loading from Picsum Photos
- 👤 User avatars from Random User API

## Tech Stack

- React
- Vite
- Tailwind CSS
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/krohit2552/Social-Media
cd Social-Media
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

5. live: https://deluxe-sfogliatella-16812b.netlify.app/

## Project Structure

```
social-feed/
├── src/
│   ├── components/
│   │   ├── Feed.jsx       # Main feed component
│   │   ├── Post.jsx       # Individual post component
│   │   └── CommentModal.jsx # Comment modal component
│   ├── App.jsx           # Root component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/
│   └── vite.svg         # Favicon
└── package.json         # Dependencies and scripts
```

## Features in Detail

### Feed Component
- Displays a list of social media posts
- Implements infinite scroll with "Load More" functionality
- Handles loading and error states
- Responsive layout with Tailwind CSS

### Post Component
- Displays user information, post image, and interactions
- Like/unlike functionality with counter
- Comment button that opens a modal
- Share button (UI only)

### Comment Modal
- Displays existing comments
- Allows adding new comments
- Responsive design that works on all screen sizes

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Styling

The project uses Tailwind CSS for styling. The main configuration is in:
- `tailwind.config.js`
- `postcss.config.js`

### Mock Data

The feed currently uses mock data located in `Feed.jsx`. In a production environment, this would be replaced with actual API calls.

## Contributing

1. Fork the repository
2. Create your feature branch and goes to that feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/) for the blazing fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide React](https://lucide.dev/) for the beautiful icons
- [Random User API](https://randomuser.me/) for the profile pictures
- [Lorem Picsum](https://picsum.photos/) for the post images