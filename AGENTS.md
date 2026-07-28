# Arquitectura Multiagente: Sistema de Análisis Financiero y Logístico

## 1. Definición del Sistema Multiagente
Para la elaboración de este estudio de factibilidad y desarrollo de la plataforma web en Vercel, se implementó un sistema colaborativo multiagente compuesto por tres agentes especializados:
+-----------------------------------+
              |      AGENTE ANALISTA FINANCIERO   |
              |  (Cálculo WACC, VAN, TIR, Múltiplos) |
              +-----------------+-----------------+
                                |
                                v
              +-----------------+-----------------+
              |      AGENTE GESTOR LOGÍSTICO      |
              | (Consumo Diésel, Llantas, Peajes) |
              +-----------------+-----------------+
                                |
                                v
              +-----------------+-----------------+
              |     AGENTE DESARROLLADOR WEB      |
              | (Dashboard Next.js / Vercel API)  |
              +-----------------------------------+

---

## 2. Roles y Responsabilidades de los Agentes

### 1. Agente Analista Financiero (`agent_finance`)
* **Función:** Modelación de flujos de caja libre ($FCFF$), cálculo del $WACC$, $VAN$, $TIR$, payback descontado, razones financieras (ROA, ROE, ROS) y valoración por múltiplos (EV/EBITDA).
* **Entregables:** `src/modelo_financiero.py` y tablas de proyección a 5 años.

### 2. Agente Gestor Logístico (`agent_logistics`)
* **Función:** Procesamiento e interpretación de tarifarios reales del mercado ecuatoriano (Planta Quito y TÍA 2026), cálculo de galonaje, viáticos de choferes, peajes y desgaste de llantas cada 7.5 meses.
* **Entregables:** Matriz de costos operativos directos y fletes de retorno Guayaquil-Quito.

### 3. Agente Desarrollador Web (`agent_dev`)
* **Función:** Construcción del dashboard interactivo en React/Next.js, integración de componentes de visualización gráfica y despliegue continuo en la infraestructura de Vercel.
* **Entregables:** `src/app/page.jsx` y repositorio sincronizado en GitHub.