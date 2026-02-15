export default function TextHeading({ children }) {
  return (
    <h5 className="text-base uppercase border-b border-b-gray w-fit not-first:mt-4">
      {children}
    </h5>
  );
}
