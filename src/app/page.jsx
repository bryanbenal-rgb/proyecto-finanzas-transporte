'use client';

import React from 'react';
import { MetricCard, FlowChart } from './components';

const dataFlujos = [
  { year: 'Año 0', flujo: -60000 },
  { year: 'Año 1', flujo: 22625 },
  { year: 'Año 2', flujo: 22625 },
  { year: 'Año 3', flujo: 22625 },
  { year: 'Año 4', flujo: 22625 },
  { year: 'Año 5', flujo: 22625 },
];

export default function Dashboard() {
  return (
    <div style={{ padding: '32px', fontFamily: 'sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <header style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '28px', color: '#0f172a', margin: 0 }}>Dashboard Financiero - Renovación Flota Transporte</h1>
        <p style={{ color: '#475569' }}>Evaluación de Inversión, WACC e Indicadores de Viabilidad Económica (Ecuador)</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        <MetricCard title="Inversión Inicial Total" value="$60,000 USD" status="neutral" description="70% Deuda Pyme / 30% Equity" />
        <MetricCard title="WACC (Costo Capital)" value="10.24%" status="neutral" description="Tasa de Descuento Exigida" />
        <MetricCard title="VAN (Valor Actual Neto)" value="$26,243.50 USD" status="positive" description="Proyecto Viable (VAN > 0)" />
        <MetricCard title="TIR (Tasa Interna)" value="21.58%" status="positive" description="Supera al WACC (21.58% > 10.24%)" />
      </div>

      <div style={{ marginTop: '32px', backgroundColor: '#ffffff', padding: '24px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: '18px', color: '#1e293b' }}>Proyección del Flujo de Caja Libre (FCFF - 5 Años)</h2>
        <FlowChart data={dataFlujos} />
      </div>
    </div>
  );
}
import React from 'react';
import { MetricCard, FlowChart } from './components';

const dataFlujos = [
  { year: 'Año 0', flujo: -60000 },
  { year: 'Año 1', flujo: 22625 },
  { year: 'Año 2', flujo: 22625 },
  { year: 'Año 3', flujo: 22625 },
  { year: 'Año 4', flujo: 22625 },
  { year: 'Año 5', flujo: 22625 },
];

export default function Dashboard() {
  return (
    <div style={{ padding: '32px', fontFamily: 'sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <header style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '28px', color: '#0f172a', margin: 0 }}>Dashboard Financiero - Renovación Flota Transporte</h1>
        <p style={{ color: '#475569' }}>Evaluación de Inversión, WACC e Indicadores de Viabilidad Económica (Ecuador)</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        <MetricCard title="Inversión Inicial Total" value="$60,000 USD" status="neutral" description="70% Deuda Pyme / 30% Equity" />
        <MetricCard title="WACC (Costo Capital)" value="10.24%" status="neutral" description="Tasa de Descuento Exigida" />
        <MetricCard title="VAN (Valor Actual Neto)" value="$26,243.50 USD" status="positive" description="Proyecto Viable (VAN > 0)" />
        <MetricCard title="TIR (Tasa Interna)" value="21.58%" status="positive" description="Supera al WACC (21.58% > 10.24%)" />
      </div>

      <div style={{ marginTop: '32px', backgroundColor: '#ffffff', padding: '24px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: '18px', color: '#1e293b' }}>Proyección del Flujo de Caja Libre (FCFF - 5 Años)</h2>
        <FlowChart data={dataFlujos} />
      </div>
    </div>
  );
}