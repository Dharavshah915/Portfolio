import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}
//spotlight desing

export function ExpertiseCard({
  title,
  description,
  icon,
}: ExpertiseCardProps) {
  return (
    <div className="rounded-t-md border border-gray-500 px-[1px] py-[1px]">
      <Card
        placeholder=""
        className="bg-white-200 h-[318px] w-[298px] rounded-xl border border-blue-200"
      >
        <CardBody placeholder="" className="flex h-full flex-col ">
          <div className="flex-none text-white">{icon}</div>
          <div className="flex flex-1 flex-col">
            <Typography
              placeholder=""
              variant="h4"
              className="mb-3 text-xl font-bold tracking-tight text-white"
            >
              {title}
            </Typography>
            <Typography
              placeholder=""
              className="line-clamp-4 font-medium leading-relaxed text-gray-300"
            >
              {description}
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
