'use client';

import React from 'react';
import { MetricCard, FlowChart } from './components';

const dataFlujos = [
  { year: 'Año 0', flujo: -60000 },
  { year: 'Año 1', flujo: 17900 },
  { year: 'Año 2', flujo: 18658 },
  { year: 'Año 3', flujo: 19150 },
  { year: 'Año 4', flujo: 19327 },
  { year: 'Año 5', flujo: 37138 },
];

export default function Dashboard() {
  return (
    <div style={{ padding: '32px', fontFamily: 'sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <header style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '28px', color: '#0f172a', margin: 0 }}>Dashboard Financiero - Renovación Flota Transporte</h1>
        <p style={{ color: '#475569' }}>Evaluación de Inversión, WACC e Indicadores de Viabilidad Económica (Ecuador)</p>
      </header>

      {/* Tarjetas Principales de Indicadores Financieros */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        <MetricCard title="Inversión Inicial Total" value="$60,000 USD" status="neutral" description="Hino 8 Ton / Capex + Cap. Trabajo" />
        <MetricCard title="WACC (Costo Capital)" value="10.24%" status="neutral" description="Tasa de Descuento Exigida" />
        <MetricCard title="VAN (Valor Actual Neto)" value="$21,778.43 USD" status="positive" description="Proyecto Viable (VAN > 0)" />
        <MetricCard title="TIR (Tasa Interna)" value="22.15%" status="positive" description="Supera al WACC (22.15% > 10.24%)" />
      </div>

      {/* Gráfico de Flujo de Caja Libre */}
      <div style={{ marginTop: '32px', backgroundColor: '#ffffff', padding: '24px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: '18px', color: '#1e293b', marginTop: 0 }}>Proyección del Flujo de Caja Libre (FCFF - 5 Años)</h2>
        <FlowChart data={dataFlujos} />
      </div>

      {/* Resumen de la Regla Estratégica de Flota */}
      <div style={{ marginTop: '24px', backgroundColor: '#ffffff', padding: '24px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <h3 style={{ fontSize: '16px', color: '#0f172a', marginTop: 0 }}>💡 Conclusión Comparativa y Regla Estratégica de Flota</h3>
        <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.6' }}>
          Debido a la alta demanda operacional, cada vehículo opera de manera 100% dedicada. La viabilidad técnica/financiera determina:
        </p>
        <ul style={{ fontSize: '14px', color: '#334155', lineHeight: '1.8' }}>
          <li><strong>Operaciones en TÍA (Carga Pesada / Peso Completo):</strong> Recomendado <strong>Hino (Japonés)</strong>. VAN = $21,778.43 USD, TIR = 22.15%. Su resistencia minimiza el consumo de diésel y mantiene un alto valor de reventa.</li>
          <li><strong>Operaciones en Chaide (Carga por Volumen / Peso Moderado):</strong> Recomendado <strong>Marca China</strong>. VAN = $20,566.20 USD, TIR = 26.12%. Su menor precio de compra ($43,000 USD) acelera la recuperación de capital.</li>
        </ul>
      </div>
    </div>
  );
}