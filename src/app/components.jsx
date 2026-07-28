'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function MetricCard({ title, value, status, description }) {
  return (
    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <h3 style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>{title}</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '8px 0', color: status === 'positive' ? '#16a34a' : '#2563eb' }}>{value}</p>
      <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>{description}</p>
    </div>
  );
}

export function FlowChart({ data }) {
  return (
    <div style={{ width: '100%', height: 300, marginTop: '20px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="flujo" stroke="#2563eb" strokeWidth={3} name="Flujo de Caja (USD)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}