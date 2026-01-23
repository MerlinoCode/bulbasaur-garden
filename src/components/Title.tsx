import React from "react";

interface props{
    text: string;
    type: TitleSize;
    border?: boolean;
}
type TitleSize = 'small' | 'medium' | 'medium-2' | 'large' | 'xLarge';

const sizeClasses: Record<string, string> = {
  small: 'text-sm',
  medium: 'text-base',
  'medium-2': 'text-lg',
  large: 'text-xl',
  xLarge: 'text-2xl',
};

const Title: React.FC<props> = ({ text, type, border }) => {
  const textClass = `
    text-white
    ${border ? 'border-4 border-transparent border-b-amber-300' : ''}
    ${sizeClasses[type]}
  `;

  return (
    <div className="flex justify-center mb-4 w-fit">
      <p className={textClass}>{text}</p>
    </div>
  );
};

export default Title;