interface SearchBarProps {
  onChange: (value: string) => void;
}

export default function SearchBar({ onChange }: SearchBarProps) {
  return (
    <input
      className="text-black"
      type="text"
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search users"
    />
  );
}
