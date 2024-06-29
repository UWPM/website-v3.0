import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

export default function Values() {
  return <section>wassup</section>;
}

const ValueCard: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  className,
  ...props
) => {
  return (
    <div className={cn("flex flex-col space-y-2.5", className)} {...props} />
  );
};

const ValueCardImage: React.FC<ImageProps> = (className, props) => {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      className={cn("mx-auto lg:w-full", className)}
      {...props}
    />
  );
};

const ValueCardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  className,
  ...props
) => {
  return <div className={cn("", className)} {...props} />;
};

const ValueCardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  className,
  ...props
) => {
  return <div className={cn("", className)} {...props} />;
};
