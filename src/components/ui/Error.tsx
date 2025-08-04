type ErrorProps = {
  title?: string;
  message: string;
}

export default function Error({ 
  title = "Something went wrong",
  message
}: ErrorProps) {
  return (
    <div className="text-center py-12">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{message}</p>
    </div>
  );
} 