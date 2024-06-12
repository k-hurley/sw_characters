import React, { Fragment } from "react";

interface Props {
    config: any,
    data:   any,
    keyFn:  any
}

function Table({ config, data, keyFn }: Props) {
    const renderedHeaders = config.map((column:any) => {
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }
        return <th key={column.label}>{column.label}</th>
    });

    const renderedRows = data.map((item:any) => {
        const renderedCells = config.map((column:any) => {
            return <td key={column.label} className="p-3">{column.render(item)}</td>
        });
        return (
            <tr className="border-b" key={keyFn(item)}>
                {renderedCells}
            </tr>
        );
    });
    return <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                {renderedHeaders}
            </tr>
        </thead>
        <tbody>
            {renderedRows}
        </tbody>
    </table>
}

export default Table;