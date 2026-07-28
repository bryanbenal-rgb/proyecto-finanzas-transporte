# Bitácora de Interacción Multiagente y Control Humano

## 📌 Proyecto Integrador
* **Tema:** Evaluación Económico-Financiera para la Renovación de Flota Vehicular en el Sector Transporte de Carga en Ecuador.
* **Estudiante / Desarrollador:** Bryan Benalcazar
* **Fecha de Ejecución:** Julio 2026

---

## 🤖 Registro de Agentes y Tareas

| Agente | Tarea Asignada | Producto Generado | Validación Humana |
| :--- | :--- | :--- | :--- |
| **Coordinador** | Estructurar repositorio y workflow | `README.md`, `AGENTS.md` | Aprobado |
| **Investigador Económico** | Entorno macroeconómico del sector | Sección de Entorno en Informe | Aprobado (Ajuste a tasa BCE) |
| **Analista de Datos** | Estructuración y diccionario de datos | `datos_transporte.csv`, `diccionario_datos.md` | Verificado |
| **Analista Financiero** | Estructura de capital y WACC | Modelo de amortización y $WACC = 10.24\%$ | Aprobado |
| **Ingeniería Económica** | Proyección $FCFF$, $VAN$ y $TIR$ | `modelo_financiero.py` ($VAN = \$26,243.50$) | Verificado |
| **Valoración** | Evaluación por flujos descontados | Valoración del proyecto | Aprobado |
| **Auditor de Riesgos** | Análisis de sensibilidad y supuestos | Matriz de Riesgos en Informe | Modificado escenario pesimista |
| **Visualización** | Interfaz del Dashboard | `src/dashboard/` (Next.js / Recharts) | Desplegado en Vercel |

---

## 🛠️ Registro de Control e Intervención Humana
1. **Ajuste de Tasa de Interés:** El estudiante verificó y ajustó la tasa activa efectiva del crédito Pyme al 11.5% anual según datos del Banco Central del Ecuador (BCE).
2. **Inclusión de Escudo Fiscal:** Corrección en el cálculo del $WACC$ aplicando el beneficio tributario del 25% de Impuesto a la Renta.
3. **Elección de Escenarios de Riesgo:** Modificación del incremento en el costo de diésel para evaluar la resistencia del proyecto ante fluctuaciones operativas.