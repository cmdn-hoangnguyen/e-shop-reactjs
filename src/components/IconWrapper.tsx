interface IconWrapperProps {
  iconClass: string;
}

export const IconWrapper = ({ iconClass }: IconWrapperProps) => {
  return <i className={`icon ${iconClass}`}></i>;
};
