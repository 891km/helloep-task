import TextHeading from "@/components/side/TextHeading";

export const components = {
  block: {
    h1: ({ children }) => <TextHeading>{children}</TextHeading>,
    h2: ({ children }) => <TextHeading>{children}</TextHeading>,
    h3: ({ children }) => <TextHeading>{children}</TextHeading>,
    h4: ({ children }) => <TextHeading>{children}</TextHeading>,
    h5: ({ children }) => <TextHeading>{children}</TextHeading>,
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
