import { FC } from "react";

interface pageProps {
  params: any;
}

const page: FC<pageProps> = ({ params }) => {
  return <div>id: {params.id}</div>;
};

export default page;
