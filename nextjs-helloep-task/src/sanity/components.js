function Heading({ children }) {
  return (
    <h5 className="text-base uppercase border-b border-b-gray w-fit not-first:mt-4">
      {children}
    </h5>
  );
}

export const components = {
  block: {
    h1: ({ children }) => <Heading>{children}</Heading>,
    h2: ({ children }) => <Heading>{children}</Heading>,
    h3: ({ children }) => <Heading>{children}</Heading>,
    h4: ({ children }) => <Heading>{children}</Heading>,
    h5: ({ children }) => <Heading>{children}</Heading>,
    h6: ({ children }) => <h6 className="text-sm font-bold">{children}</h6>,
  },
  types: {
    table: ({ value }) => (
      <table className="text-base w-full">
        <tbody className="flex flex-col gap-1">
          {value.rows?.map((row, i) => (
            <tr key={i} className="flex">
              {row.cells?.map((cell, j) => (
                <td key={j} className={j === 0 ? "w-28 shrink-0" : "w-auto"}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    ),
  },
};
