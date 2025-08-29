interface PageProps {
  params: { service: string };
}

export default function ServicePage({ params }: PageProps) {
  return (
    <div>
      <h1>Service: {params.service}</h1>
    </div>
  );
}
