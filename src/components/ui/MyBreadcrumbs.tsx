import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Link from "next/link";

interface BreadcrumbLink {
  name: string;
  href?: string | null;
}

interface BookDetailsComponentProps {
  breadcrumbLinks?: BreadcrumbLink[];
}
const MyBreadcrumbs = ({ breadcrumbLinks }: BookDetailsComponentProps) => {
  return (
    <>
      <Breadcrumbs>
        {breadcrumbLinks?.map((crumb, index) => (
          <BreadcrumbItem key={index}>
            {crumb.href ? (
              <Link href={crumb.href}>{crumb.name}</Link>
            ) : (
              crumb.name
            )}
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </>
  );
};

export default MyBreadcrumbs;
