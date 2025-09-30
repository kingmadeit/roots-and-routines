// components/PageWrapper.tsx
interface PageWrapperProps {
    children: React.ReactNode;
    variant?: 'services' | 'contact' | 'about' | 'default';
    className?: string;
}

const variants = {
    services: 'container py-16 md:py-24',
    contact: 'container py-16 grid md:grid-cols-[2fr_1fr] gap-12',
    about: 'container max-w-5xl py-16 md:py-24',
    default: 'container py-16'
};

  
export default function PageWrapper({ 
    children, 
    variant = 'default',
    className = '' 
  }: PageWrapperProps) {

    return (
      <div className={`${variants[variant]} ${className}`}>
        {children}
      </div>
    );
}