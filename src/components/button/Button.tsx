import React, { ButtonHTMLAttributes } from 'react';
import { cn } from 'src/utils/misc/cn';

export const ButtonType: { [key in ButtonVariant]: string } = {
  yellow: 'bg-[rgba(249,160,63,1)] md:text-[20px] text-[rgba(109,74,37,1)] rounded-full px-[16px] py-[8px] shadow-[inset_0px_0px_4px_rgba(109,74,37,1)]',
  yellowInvert: 'border-[rgba(249,160,63,1)] border-[2px] md:text-[20px] text-[rgba(249,160,63,1)] rounded-full px-[16px] py-[8px]',
};

export type ButtonVariant = 'yellow' | 'yellowInvert';

export const ButtonSize: { [key in ButtonSize]: string } = {
  small: 'px-[8px] py-[7.5px]',
  medium: '',
  large: '',
};

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, size = 'medium', children, onClick, disabled, className, style }) => {
  return (
    <button
      className={cn(
        'group leading-none transition-[background,border] disabled:cursor-auto disabled:opacity-50',
        ButtonType[variant],
        ButtonSize[size],
        className,
      )}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      • <span className='group-hover:underline'>{children}</span> •
    </button>
  );
};

export default Button;
