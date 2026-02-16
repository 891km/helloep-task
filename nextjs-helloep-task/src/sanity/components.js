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
      <table
        style={{
          tableLayout: "fixed",
          borderCollapse: "separate",
          borderSpacing: "0 0.25rem",
        }}
        className="text-base"
      >
        <tbody>
          {value.rows?.map((row, i) => (
            <tr key={i}>
              {row.cells?.map((cell, j) => (
                <td
                  key={j}
                  style={{ verticalAlign: "top" }}
                  className={j === 0 ? "w-28" : "break-all"}
                >
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
