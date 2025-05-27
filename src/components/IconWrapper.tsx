import clsx from "clsx";

interface IconWrapperProps {
  iconClass: string;
}

export const IconWrapper = ({ iconClass }: IconWrapperProps) => {
  return <i className={clsx("icon", iconClass)}></i>;
};
