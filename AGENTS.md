# AGENTS.md

## Objetivo General del Sistema Multiagente
El sistema multiagente tiene como finalidad coordinar el análisis económico, financiero y de ingeniería económica aplicado al sector transporte, garantizando que cada agente especializado cumpla una función clara y verificable. La arquitectura asegura transparencia, validación de cálculos y generación de un dashboard interactivo en Vercel.

---

## Función de Cada Agente

### 1. Agente Coordinador
- **Responsabilidad:** Divide el problema en tareas, asigna roles y verifica la integración final.
- **Entradas:** Desafío empresarial, objetivos del proyecto.
- **Salidas:** Plan de trabajo, integración de resultados.

### 2. Investigador Económico
- **Responsabilidad:** Analiza entorno macroeconómico, sectorial y competitivo.
- **Entradas:** Datos de mercado, políticas tributarias, precios de insumos.
- **Salidas:** Informe de contexto económico.

### 3. Analista de Datos
- **Responsabilidad:** Recolecta, limpia y valida bases de datos.
- **Entradas:** Fuentes oficiales (BCE, SRI, INEC).
- **Salidas:** Dataset procesado y diccionario de variables.

### 4. Analista Financiero
- **Responsabilidad:** Calcula razones financieras, estructura de financiamiento y WACC.
- **Entradas:** Estados financieros, costos operativos, tasas de interés.
- **Salidas:** Ratios financieros, cálculo del WACC.

### 5. Ingeniero Económico
- **Responsabilidad:** Aplica VAN, TIR, beneficio/costo, recuperación y sensibilidad.
- **Entradas:** Flujos de caja proyectados.
- **Salidas:** Indicadores de viabilidad económica.

### 6. Agente de Valoración
- **Responsabilidad:** Estima el valor empresarial mediante métodos de descuento y múltiplos.
- **Entradas:** FCFF, EBITDA, múltiplos sectoriales.
- **Salidas:** Valor empresarial estimado.

### 7. Auditor de Riesgos
- **Responsabilidad:** Revisa supuestos, cálculos, inconsistencias y riesgos.
- **Entradas:** Resultados de todos los agentes.
- **Salidas:** Informe de riesgos y validación de supuestos.

### 8. Agente de Visualización
- **Responsabilidad:** Construye y verifica el dashboard interactivo.
- **Entradas:** Resultados financieros y económicos.
- **Salidas:** Dashboard en Vercel con indicadores clave.

---

## Secuencia de Trabajo
1. **Coordinador** define el desafío y asigna tareas.  
2. **Investigador Económico** analiza el entorno.  
3. **Analista de Datos** prepara la base de datos.  
4. **Analista Financiero** calcula ratios y WACC.  
5. **Ingeniero Económico** proyecta flujos y calcula VAN/TIR.  
6. **Agente de Valoración** aplica métodos adicionales.  
7. **Auditor de Riesgos** valida resultados y supuestos.  
8. **Visualización** despliega el dashboard en Vercel.  

---

## Comunicación entre Agentes
- Los agentes comparten resultados mediante archivos en la carpeta `data/processed/`.  
- El **Coordinador** centraliza la información en `reports/`.  
- El **Auditor de Riesgos** revisa y retroalimenta a todos los agentes antes de la integración final.  

---

## Reglas de Validación
- Todo cálculo debe estar reproducible en código.  
- Los datos deben provenir de fuentes verificables (BCE, SRI, INEC, etc.).  
- Supuestos simulados deben estar claramente identificados.  
- El auditor valida consistencia y coherencia antes de la recomendación final.  

---

## Criterios para Resolver Contradicciones
- Priorizar fuentes oficiales sobre estimaciones.  
- En caso de discrepancia entre agentes, el **Auditor de Riesgos** decide con base en evidencia.  
- El **Coordinador** documenta la decisión en `evidence/`.  

---

## Intervenciones y Decisiones del Estudiante
- Definición del desafío: renovación de flota de transporte.  
- Selección de fuentes de datos y supuestos operativos.  
- Validación de cálculos de VAN, TIR y WACC.  
- Decisión estratégica final: Hino para peso completo, marca china para volumen moderado.  
- Implementación del dashboard en Vercel.  