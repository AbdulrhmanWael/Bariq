# Checkout Page Components

This directory contains the e-commerce checkout page implementation with React, TypeScript, and Tailwind CSS.

## Main Component

### `Checkout.tsx`
The main checkout page component featuring:
- **Navigation bar** with logo, menu links, and action icons (search, account, wishlist, cart)
- **3-step progress indicator** showing the current checkout stage
- **Two-column layout**:
  - Left: Shipping information form
  - Right: Order summary with cart items and pricing
- **Footer** with brand info, quick links, customer service, and newsletter subscription
- **Form validation** with real-time error display
- **Responsive design** that stacks on mobile devices

## Reusable Components

### `Input.tsx`
Reusable text input component with:
- Label with optional required indicator
- Error message display
- Various input types (text, email, tel, number)
- Focus states with pink accent color
- ARIA accessibility attributes

### `Select.tsx`
Dropdown select component with:
- Label with optional required indicator
- Customizable options array
- Error handling
- Focus states
- ARIA accessibility

### `RadioCard.tsx`
Radio button card for shipping method selection with:
- Visual card design with border highlight when selected
- Title, description, and price display
- Pink accent color for active state
- Hover effects

### `CartItem.tsx`
Order summary item component displaying:
- Product thumbnail with quantity badge
- Product name and price
- Original price (strikethrough) if discounted
- Responsive layout

### `ProgressStep.tsx`
Circular step indicator for checkout progress with:
- Number display
- Active/inactive states
- Pink accent for active step
- ARIA current attribute for accessibility

## Usage

```tsx
import Checkout from './components/Checkout';

function App() {
  return <Checkout />;
}
```

## Features

### Form Validation
- Required field validation
- Email format validation
- Real-time error clearing on input
- Visual error indicators

### State Management
- Form data stored in React useState
- Shipping cost updates based on selected method
- Dynamic total calculation

### Accessibility
- Semantic HTML elements
- ARIA labels and descriptions
- Keyboard navigation support
- Focus management
- Screen reader friendly error messages

### Responsive Design
- Mobile-first approach
- Stacks to single column on small screens
- Touch-friendly button sizes
- Optimized spacing for all screen sizes

## Styling

### Color Palette
- **Primary Pink**: `#E1007A` - used for branding, CTAs, and active states
- **Hover Pink**: `#c4006a` - darker shade for hover effects
- **Grays**: Various shades for text, borders, and backgrounds
- **White**: Primary background color

### Design System
- **Border radius**: `rounded-lg` (8px)
- **Spacing**: Consistent use of Tailwind spacing scale
- **Shadows**: Subtle borders instead of heavy shadows
- **Transitions**: 200ms duration for smooth interactions

## Data Structure

### FormData Interface
```typescript
interface FormData {
  firstName: string;
  lastName: string;
  streetAddress: string;
  aptSuite: string;
  city: string;
  stateProvince: string;
  zipPostalCode: string;
  country: string;
  phoneNumber: string;
  emailAddress: string;
  shippingMethod: 'standard' | 'express';
}
```

### OrderItem Interface
```typescript
interface OrderItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  quantity: number;
  image: string;
}
```

## Customization

To customize the checkout page:

1. **Colors**: Update the hex color `#E1007A` throughout the components
2. **Countries**: Modify the country options array in the Select component
3. **Shipping options**: Update the RadioCard props for different shipping methods
4. **Order items**: Replace the sample orderItems array with real data from your cart
5. **Form submission**: Implement the handleSubmit function to integrate with your backend

## Integration Notes

- **Navigation**: Currently uses placeholder links (`#`). Replace with React Router links or your routing solution.
- **Cart data**: Sample data is hardcoded. Connect to your cart state management (Redux, Context, etc.).
- **Form submission**: Console logs form data. Implement API call to process checkout.
- **Payment page**: Button navigates to payment. Implement routing logic.
- **Icons**: Uses Lucide React icons. All icon components are imported from 'lucide-react'.

## Browser Support

Tested and compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

- React 18+
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
