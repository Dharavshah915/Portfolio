type ContainerTitleProps = {
  title: string;
};

const ContainerTitle = ({ title }: ContainerTitleProps) => {
  return (
    <h1 className="text-4xl font-normal md:text-5xl lg:text-6xl">{title}</h1>
  );
};

export default ContainerTitle;
