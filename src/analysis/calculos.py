# src/analysis/calculos.py
# Proyecto Integrador: Análisis Financiero y Evaluación de Inversión en el Sector Transporte

import numpy as np
import numpy_financial as npf

# -------------------------------
# 1. Parámetros Iniciales
# -------------------------------
inversion_total = 60000   # 55,000 camión + 5,000 capital trabajo
deuda = inversion_total * 0.60
equity = inversion_total * 0.40
tasa_deuda = 0.115
tasa_patrimonio = 0.1262   # ajustada con CAPM y riesgo país
impuesto = 0.25

# -------------------------------
# 2. Cálculo del WACC
# -------------------------------
costo_deuda_despues_impuesto = tasa_deuda * (1 - impuesto)
wacc = (equity / inversion_total * tasa_patrimonio) + (deuda / inversion_total * costo_deuda_despues_impuesto)

# -------------------------------
# 3. Flujo de Caja Libre Proyectado (5 Años)
# -------------------------------
ingresos = 36000
costos_operativos = 20500
depreciacion = 11000
utilidad_operativa = ingresos - costos_operativos - depreciacion
impuestos_pagados = utilidad_operativa * impuesto
utilidad_neta = utilidad_operativa - impuestos_pagados
flujo_caja_operativo = utilidad_neta + depreciacion

# Flujos de caja (5 años + salvamento)
flujos = [-inversion_total, flujo_caja_operativo, flujo_caja_operativo, flujo_caja_operativo, flujo_caja_operativo, flujo_caja_operativo + 18000]

# -------------------------------
# 4. Indicadores de Ingeniería Económica
# -------------------------------
van = npf.npv(wacc, flujos)
tir = npf.irr(flujos)

# Payback descontado
def payback_desc(flujos, tasa):
    acumulado = 0
    for i, fc in enumerate(flujos[1:], start=1):
        acumulado += fc / ((1 + tasa) ** i)
        if acumulado >= abs(flujos[0]):
            return i
    return None

payback = payback_desc(flujos, wacc)

# -------------------------------
# 5. Análisis de Sensibilidad
# -------------------------------
def evaluar_escenario(ingresos, costos, depreciacion, inversion_total, wacc):
    utilidad_operativa = ingresos - costos - depreciacion
    impuestos_pagados = utilidad_operativa * impuesto
    utilidad_neta = utilidad_operativa - impuestos_pagados
    flujo_caja_operativo = utilidad_neta + depreciacion
    flujos = [-inversion_total] + [flujo_caja_operativo] * 5
    return npf.npv(wacc, flujos), npf.irr(flujos), payback_desc(flujos, wacc)

escenarios = {
    "Optimista": (40000, 19000),
    "Base": (36000, 20500),
    "Pesimista": (32000, 22000)
}

# -------------------------------
# 6. Razones Financieras
# -------------------------------
def razones_financieras(ingresos, ebit, utilidad_neta, activo_total):
    return {
        "Margen Operativo": ebit / ingresos,
        "Margen Neto": utilidad_neta / ingresos,
        "ROA": utilidad_neta / activo_total,
        "Rotación de Activos": ingresos / activo_total
    }

razones = razones_financieras(ingresos, utilidad_operativa, utilidad_neta, inversion_total)

# -------------------------------
# 7. Mostrar Resultados
# -------------------------------
print("\n--- RESULTADOS EVALUACIÓN FINANCIERA ---")
print(f"WACC: {wacc:.2%}")
print(f"Flujo de Caja Anual: ${flujo_caja_operativo:,.2f}")
print(f"VAN (Valor Actual Neto): ${van:,.2f}")
print(f"TIR (Tasa Interna de Retorno): {tir:.2%}")
print(f"Payback descontado: {payback} años")

print("\n--- ANÁLISIS DE SENSIBILIDAD ---")
for nombre, (ing, cost) in escenarios.items():
    van_s, tir_s, pb_s = evaluar_escenario(ing, cost, 11000, inversion_total, wacc)
    print(f"{nombre}: VAN=${van_s:,.2f}, TIR={tir_s:.2%}, Payback={pb_s} años")

print("\n--- RAZONES FINANCIERAS ---")
for k, v in razones.items():
    print(f"{k}: {v:.2%}")
