import { useEffect } from 'react';

export function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset?: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Извините, произошла ошибка!</h2>
      <blockquote>
        <code>
          {error.message}
        </code>
      </blockquote>
      {reset && <button onClick={() => reset()}>Попробовать снова</button>}
    </div>
  );
}
