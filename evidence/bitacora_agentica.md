# Evidencia de Interacción Agéntica y Validación del Modelo

## 1. Prompts Principales Utilizados

### Prompt de Modelación Financiera (`agent_finance`)
> *"Construye un modelo financiero en Python para evaluar un camión Hino de 8 Toneladas en Ecuador con Capex de $60,000 USD, WACC de 10.24%, ISLR de 25% y vida útil de 5 años con salvamento de $18,000 USD. Calcula VAN, TIR y payback descontado."*

### Prompt de Integración Logística (`agent_logistics`)
> *"Analiza los tarifarios reales de fletes TÍA y Planta Quito. Ajusta los ingresos anuales incorporando 4 viajes mensuales interprovinciales a Guayaquil con flete de retorno consolidado ($275 USD) y desglosa los costos operacionales en diésel ($3.20/gal), chofer, llantas y mantenimientos."*

---

## 2. Ejemplos de Respuestas Aceptadas, Corregidas y Rechazadas

| Estado | Contexto de la Interacción | Motivo / Ajuste Aplicado |
| :---: | :--- | :--- |
| ❌ **Rechazada** | Propuesta inicial con ingresos planos de $\$36,000\text{ USD}$ sin retornos. | Desestimada por no reflejar la operación real de transporte interprovincial. |
| ⚠️ **Corregida** | Fila de `(+) Depreciación` aparecía negativa ($-\$11,000$) en el Año 5 en la tabla. | Se corrigió a **positiva ($+\$11,000$)** para recuperar el escudo fiscal de forma técnicamente correcta. |
| ⚠️ **Corregida** | Conflicto entre preliminar $VAN = \$26,243.50$ y real $VAN = \$21,778.43$. | Se unificaron unánimemente los valores reales ajustados con llantas y mantenimientos en todo el documento y la Web. |
| ✅ **Aceptada** | Regla comparativa: *"Para operaciones de peso completo $\rightarrow$ Hino; para volumen moderado $\rightarrow$ Marca China"*. | Aprobada e integrada en la conclusión estratégica del informe y la tarjeta del Dashboard. |

---

## 3. Validación de Cálculos Financieros (Python Output)

Los siguientes resultados fueron ejecutados e inspeccionados directamente en el entorno de evaluación:

```text
=================== VALIDACIÓN DE CÁLCULOS ===================
Capex Inicial:          -$60,000.00 USD
WACC Exigido:           10.24%
Flujo Año 1:            $17,900.00 USD
Flujo Año 2:            $18,658.00 USD
Flujo Año 3:            $19,150.00 USD
Flujo Año 4:            $19,327.00 USD
Flujo Año 5 (+Salv.):   $37,138.00 USD
--------------------------------------------------------------
VAN Calculado:          $21,778.43 USD  [VALIDADO VAN > 0]
TIR Calculada:          22.15%          [VALIDADO TIR > WACC]
==============================================================