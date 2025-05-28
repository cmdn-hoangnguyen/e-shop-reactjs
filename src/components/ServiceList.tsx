import type { MAIN_CONTENT } from "../constants/enum";
import type { Service } from "../constants/types";
import { ServiceItem } from "./ServiceItem";

interface ServiceListProps {
  data: Service[];
  type: MAIN_CONTENT;
  itemClass: string;
}

export const ServiceList = ({ data, type, itemClass }: ServiceListProps) => (
  <>
    {data.map((item, index) => (
      <li className={itemClass} key={index}>
        <ServiceItem
          icon={item.icon}
          title={item.title}
          description={item.description}
          mainContent={type}
        />
      </li>
    ))}
  </>
);
