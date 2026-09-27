type InputProps = {
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
  error?: string;
  onChange: (value: string) => void;
};

export function Input({
  label,
  value,
  placeholder,
  type = "text",
  error,
  onChange,
}: InputProps) {
  return (
    <div className="field">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        onChange={(event) => onChange(event.target.value)}
      />
      {error && <small className="field-error">{error}</small>}
    </div>
  );
}
