interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = false 
}) => {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;