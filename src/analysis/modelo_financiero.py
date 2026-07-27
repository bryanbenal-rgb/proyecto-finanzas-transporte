import numpy as np
import numpy_financial as npf

# 1. Parámetros Iniciales
inversion_total = 60000  # 55,000 camión + 5,000 capital trabajo
deuda = inversion_total * 0.70
equity = inversion_total * 0.30
tasa_deuda = 0.115
tasa_patrimonio = 0.14  # Tasa de descuento exigida por los inversionistas
impuesto = 0.25

# 2. Cálculo del WACC (Costo Promedio Ponderado de Capital)
costo_deuda_despues_impuesto = tasa_deuda * (1 - impuesto)
wacc = (equity / inversion_total * tasa_patrimonio) + (deuda / inversion_total * costo_deuda_despues_impuesto)

# 3. Flujo de Caja Libre Proyectado (5 Años)
ingresos = 36000
costos_operativos = 20500  # Combustible + Mantenimiento + Seguros + Chofer
depreciacion = 11000       # 55,000 / 5 años
utilidad_operativa = ingresos - costos_operativos - depreciacion
impuestos_pagados = utilidad_operativa * impuesto
utilidad_neta = utilidad_operativa - impuestos_pagados
flujo_caja_operativo = utilidad_neta + depreciacion

# Flujos para los 5 años
flujos = [-inversion_total] + [flujo_caja_operativo] * 5

# 4. Indicadores de Ingeniería Económica
van = npf.npv(wacc, flujos)
tir = npf.irr(flujos)

print(f"--- RESULTADOS EVALUACIÓN FINANCIERA ---")
print(f"WACC: {wacc:.2%}")
print(f"Flujo de Caja Anual: ${flujo_caja_operativo:,.2f}")
print(f"VAN (Valor Actual Neto): ${van:,.2f}")
print(f"TIR (Tasa Interna de Retorno): {tir:.2%}")