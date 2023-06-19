import * as React from "react";

import Icon, { IconSize, Props as IconProps } from "application/ui/icons/Icon";

export const NeonLogo = ({ size = 16 }: { size?: IconSize }) => (
  <svg
    viewBox="0 0 128 36"
    preserveAspectRatio="xMidYMin"
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 6.207A6.207 6.207 0 0 1 6.207 0h23.586A6.207 6.207 0 0 1 36 6.207v20.06c0 3.546-4.488 5.085-6.664 2.286l-6.805-8.754v10.615A5.586 5.586 0 0 1 16.945 36H6.207A6.207 6.207 0 0 1 0 29.793V6.207Zm6.207-1.241c-.686 0-1.241.555-1.241 1.24v23.587c0 .686.555 1.242 1.24 1.242h10.925c.343 0 .434-.278.434-.621V16.18c0-3.547 4.488-5.086 6.665-2.286l6.805 8.753V6.207c0-.686.064-1.241-.621-1.241H6.207Z"
      fill="#12FFF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 6.207A6.207 6.207 0 0 1 6.207 0h23.586A6.207 6.207 0 0 1 36 6.207v20.06c0 3.546-4.488 5.085-6.664 2.286l-6.805-8.754v10.615A5.586 5.586 0 0 1 16.945 36H6.207A6.207 6.207 0 0 1 0 29.793V6.207Zm6.207-1.241c-.686 0-1.241.555-1.241 1.24v23.587c0 .686.555 1.242 1.24 1.242h10.925c.343 0 .434-.278.434-.621V16.18c0-3.547 4.488-5.086 6.665-2.286l6.805 8.753V6.207c0-.686.064-1.241-.621-1.241H6.207Z"
      fill="url(#a)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 6.207A6.207 6.207 0 0 1 6.207 0h23.586A6.207 6.207 0 0 1 36 6.207v20.06c0 3.546-4.488 5.085-6.664 2.286l-6.805-8.754v10.615A5.586 5.586 0 0 1 16.945 36H6.207A6.207 6.207 0 0 1 0 29.793V6.207Zm6.207-1.241c-.686 0-1.241.555-1.241 1.24v23.587c0 .686.555 1.242 1.24 1.242h10.925c.343 0 .434-.278.434-.621V16.18c0-3.547 4.488-5.086 6.665-2.286l6.805 8.753V6.207c0-.686.064-1.241-.621-1.241H6.207Z"
      fill="url(#b)"
    />
    <path
      d="M29.793 0A6.207 6.207 0 0 1 36 6.207v20.06c0 3.546-4.488 5.085-6.664 2.286l-6.805-8.754v10.615A5.586 5.586 0 0 1 16.945 36a.62.62 0 0 0 .62-.62v-19.2c0-3.547 4.488-5.086 6.665-2.286l6.805 8.753V1.241C31.035.556 30.479 0 29.793 0Z"
      fill="#B9FFB3"
    />
    <path
      d="M60.686 10.6v9.416l-9.13-9.416h-4.752V26h4.334V15.88L61.082 26h3.938V10.6h-4.334ZM73.054 22.568V19.84h9.702v-3.278h-9.702v-2.53h11.77V10.6H68.632V26h16.434v-3.432H73.054ZM96.583 26.506c6.094 0 10.054-2.992 10.054-8.206 0-5.214-3.96-8.206-10.054-8.206S86.551 13.086 86.551 18.3c0 5.214 3.938 8.206 10.032 8.206Zm0-3.652c-3.388 0-5.478-1.65-5.478-4.554 0-2.904 2.112-4.554 5.478-4.554 3.388 0 5.478 1.65 5.478 4.554 0 2.904-2.09 4.554-5.478 4.554ZM123.249 10.6v9.416l-9.13-9.416h-4.752V26h4.334V15.88L123.645 26h3.938V10.6h-4.334Z"
      fill="currentColor"
    />
    <defs>
      <linearGradient
        id="a"
        x1="36"
        y1="36"
        x2="4.345"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B9FFB3" />
        <stop offset="1" stopColor="#B9FFB3" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="36"
        y1="36"
        x2="14.617"
        y2="27.683"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1A1A1A" stopOpacity=".9" />
        <stop offset="1" stopColor="#1A1A1A" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export const NeonIcon = (props: IconProps) => (
  <Icon viewBox="0 0 36 36" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 6.207A6.207 6.207 0 0 1 6.207 0h23.586A6.207 6.207 0 0 1 36 6.207v20.06c0 3.546-4.488 5.085-6.664 2.286l-6.805-8.754v10.615A5.586 5.586 0 0 1 16.945 36H6.207A6.207 6.207 0 0 1 0 29.793V6.207Zm6.207-1.241c-.686 0-1.241.555-1.241 1.24v23.587c0 .686.555 1.242 1.24 1.242h10.925c.343 0 .434-.278.434-.621V16.18c0-3.547 4.488-5.086 6.665-2.286l6.805 8.753V6.207c0-.686.064-1.241-.621-1.241H6.207Z"
    />
  </Icon>
);
