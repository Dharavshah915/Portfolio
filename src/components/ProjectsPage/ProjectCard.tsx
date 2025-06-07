//chanfe project page to have a map to make populate card props will not work till then
//copy formating of expertise page and make changes as wanted for grid formatiing, maybe try making sizes variable, search up colage type formatting
import { title } from 'process';
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from '@material-tailwind/react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  projectUrl?: string;
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  imageAlt,
  projectUrl,
}: ProjectCardProps) {
  return (
    <Card className="bg-gray-5000 h-[400px] max-w-[24rem] overflow-hidden border border-gray-500 shadow-md shadow-glow transition-all duration-300 text-shadow-glow hover:border-gray-600">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={imageUrl}
          alt={imageAlt}
          className="h-60 w-full translate-y-[-25px] object-cover"
        />
      </CardHeader>
      <CardBody className="h-[140px]">
        <Typography variant="h3" color="white" className="font-bold">
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          color="gray"
          className="mt-3 line-clamp-5 text-sm font-normal text-gray-300"
        >
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <Button
          placeholder=""
          size="sm"
          variant="text"
          className="flex items-center gap-2 font-medium text-gray-300 transition-colors duration-300 hover:text-white"
          onClick={() => window.open(projectUrl, '_blank')}
        >
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </CardFooter>
    </Card>
  );
}
