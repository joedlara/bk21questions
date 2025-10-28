# Brandklout 21-Point Assessment

A professional, well-organized React application for conducting a comprehensive 21-question assessment for dental practices.

## Project Structure

```
brandklout-assessment/
├── src/
│   ├── components/
│   │   ├── Header/                 # Header with logo and CTA button
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   ├── Hero/                   # Hero section with gradient background
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.module.css
│   │   ├── VideoSection/           # YouTube video player with custom overlay
│   │   │   ├── VideoSection.jsx
│   │   │   └── VideoSection.module.css
│   │   ├── Progress/               # Progress bar showing completion
│   │   │   ├── ProgressBar.jsx
│   │   │   └── ProgressBar.module.css
│   │   ├── Assessment/             # Assessment form components
│   │   │   ├── AssessmentSection.jsx
│   │   │   ├── QuestionBlock.jsx
│   │   │   ├── SectionHeader.jsx
│   │   │   └── Assessment.module.css
│   │   └── Modal/                  # Contact form modal
│   │       ├── ContactModal.jsx
│   │       ├── SuccessMessage.jsx
│   │       └── Modal.module.css
│   ├── data/
│   │   └── questions.js            # All assessment questions organized by section
│   ├── hooks/
│   │   └── useAssessment.js        # Custom hook for assessment state management
│   ├── services/
│   │   └── formService.js          # API service for form submission
│   ├── utils/
│   │   ├── constants.js            # App-wide constants
│   │   └── validation.js           # Form validation utilities
│   ├── styles/
│   │   └── global.css              # Global styles
│   ├── App.jsx                     # Main App component
│   └── main.jsx                    # Application entry point
├── index.html                      # HTML template
├── package.json                    # Dependencies
└── README.md                       # This file
```

## Features

- **Modular Component Architecture**: Each UI element is a separate, reusable component
- **CSS Modules**: Scoped styling to prevent conflicts
- **Custom Hooks**: Centralized state management with `useAssessment` hook
- **Form Validation**: Client-side validation with error handling
- **Progress Tracking**: Real-time progress bar showing completion status
- **YouTube Integration**: Custom video player with overlay
- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **API Integration**: Form submission to Formspree with proper error handling

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Key Technologies

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **CSS Modules**: Component-scoped styling
- **YouTube IFrame API**: Video player integration
- **Formspree**: Form submission service

## Configuration

Update these constants in `src/utils/constants.js`:

```javascript
export const CALENDLY_URL = "your-calendly-url";
export const FORMSPREE_ENDPOINT = "your-formspree-endpoint";
export const YOUTUBE_VIDEO_ID = "your-youtube-video-id";
```

## Component Overview

### Header
- Fixed header with logo and CTA button
- Responsive: button hidden on mobile, shown in hero instead

### Hero
- Eye-catching gradient background
- Responsive typography
- Mobile CTA button

### ProgressBar
- Fixed progress indicator
- Shows "X/21 Completed"
- Updates in real-time

### VideoSection
- YouTube IFrame API integration
- Custom play button overlay
- Auto-enables controls after first play

### AssessmentSection
- Dynamically renders all questions
- Three sections: Online Reputation, SEO & AI Search, Marketing Performance
- Yes/No radio buttons with color-coded states

### ContactModal
- Collects user information
- Form validation
- Success message with auto-redirect
- Backdrop click to close

## State Management

The `useAssessment` hook manages:
- Answer storage
- Validation errors
- Progress calculation
- Data formatting for submission

## Styling Approach

- **Global styles**: Reset and base typography
- **CSS Modules**: Component-specific styles with scoped class names
- **Responsive**: Mobile-first with media queries
- **Modern CSS**: Flexbox, Grid, CSS animations

## Development Tips

1. **Adding new questions**: Update `src/data/questions.js`
2. **Styling changes**: Modify the relevant `.module.css` file
3. **Adding sections**: Add to `questionSections` array in `questions.js`
4. **Custom validation**: Extend `src/utils/validation.js`

## Production Deployment

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder ready for deployment to any static hosting service.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

Private - All rights reserved
