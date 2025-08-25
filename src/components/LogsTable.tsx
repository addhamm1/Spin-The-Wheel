import React from 'react';

interface Log {
  time: string;
  result: string;
}

interface Props {
  logs: Log[];
}

const LogsTable: React.FC<Props> = ({ logs }) => (
  <table className="min-w-full border">
    <thead>
      <tr>
        <th className="border px-2">time</th>
        <th className="border px-2">result</th>
      </tr>
    </thead>
    <tbody>
      {logs.map((log, i) => (
        <tr key={i}>
          <td className="border px-2">{log.time}</td>
          <td className="border px-2">{log.result}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default LogsTable;
