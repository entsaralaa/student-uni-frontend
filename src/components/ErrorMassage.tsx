type ErrorMessageProps = {
  message: string;
  onRetry?: () => void;
};

export function ErrorMessage({
  message,
  onRetry,
}: ErrorMessageProps) {
  return (
    <div className="error-message">
      <span>{message}</span>

      {onRetry && (
        <button onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}