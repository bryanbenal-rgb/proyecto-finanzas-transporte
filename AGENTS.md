# Arquitectura y Protocolo del Sistema Multiagente

## 1. Objetivo General del Sistema
El objetivo principal del sistema multiagente es automatizar y validar el análisis de factibilidad técnica, operacional y financiera para la renovación de flota de carga pesada en Ecuador (8 Toneladas), integrando modelos matemáticos en Python, documentación ejecutiva en Markdown/PDF y un Dashboard interactivo en Next.js desplegado en Vercel.

---

## 2. Función de Cada Agente
+-----------------------------------+
                  |      AGENTE ANALISTA FINANCIERO   |
                  |  (FCFF, WACC 10.24%, VAN, TIR)    |
                  +-----------------+-----------------+
                                    |
                                    v
                  +-----------------+-----------------+
                  |      AGENTE GESTOR LOGÍSTICO      |
                  | (Fletes TÍA/Chaide, Diésel)       |
                  +-----------------+-----------------+
                                    |
                                    v
                  +-----------------+-----------------+
                  |     AGENTE DESARROLLADOR WEB      |
                  | (Dashboard Next.js / Vercel API)  |
                  +-----------------------------------+

### 1. Agente Analista Financiero (`agent_finance`)
* **Rol:** Modelación cuantitativa y matemática.
* **Funciones:** Cálculo del $WACC$ ($10.24\%$), Flujo de Caja Libre ($FCFF$), $VAN$ ($\$21,778.43\text{ USD}$), $TIR$ ($22.15\%$), Payback, razones financieras (ROA, ROE, ROS) y valoración por múltiplos $EV/EBITDA$.

### 2. Agente Gestor Logístico (`agent_logistics`)
* **Rol:** Validación operativa de campo y estructura de costos.
* **Funciones:** Procesamiento de tarifarios reales (Planta Quito y Centro de Distribución TÍA 2026), rutas de retorno Guayaquil-Quito, consumo de diésel ($3.20/\text{gal}$), viáticos y desgaste de llantas cada 7.5 meses.

### 3. Agente Desarrollador Web (`agent_dev`)
* **Rol:** Implementación de interfaz y despliegue continuo.
* **Funciones:** Construcción de componentes en Next.js/React (`src/app/page.jsx`), diseño de gráficos de flujo y automatización del *deployment* en Vercel vía GitHub.

---

## 3. Secuencia de Trabajo y Comunicación Inter-Agente

1. **Fase 1 (Captura de Datos):** `agent_logistics` procesa la matriz de fletes reales y determina la estructura de ingresos ($\$58,700\text{ USD}$) y costos directos ($\$38,500\text{ USD}$).
2. **Fase 2 (Modelación Financiera):** `agent_finance` recibe los inputs logísticos, corre el modelo en Python (`modelo_financiero.py`) y genera las métricas $VAN$, $TIR$ y $FCFF$.
3. **Fase 3 (Sincronización Web):** `agent_dev` consume los outputs de `agent_finance` e implementa los cambios en el Dashboard de Next.js, sincronizando el informe en Markdown/PDF.

---

## 4. Reglas de Validación y Resolución de Contradicciones

* **Regla de Consistencia de Cifras:** Las métricas clave ($VAN$, $TIR$, $WACC$) deben coincidir exactamente entre el script de Python, el documento PDF y el Dashboard Web.
* **Regla de Signos en FCFF:** Todos los costos y depreciaciones operativas se presentan con signo negativo ($-$), mientras que la depreciación como escudo fiscal recuperado en el $FCFF$ se mantiene estrictamente positiva ($+$).
* **Resolución de Incompatibilidad por Tipo de Carga:** Si un vehículo opera en carga pesada (TÍA), prevalece la durabilidad del Hino; si opera en volumen moderado (Chaide), prevalece la menor inversión inicial del vehículo chino.

---

## 5. Decisiones Tomadas por el Coordinador del Proyecto

1. **Inclusión de Fletes de Retorno:** Se incorporaron los retornos Guayaquil-Quito ($\$275\text{ USD/viaje}$) para reflejar la rentabilidad real de la operación interprovincial.
2. **Exclusividad Operacional:** Se definió que un camión no puede compartir rutas entre TÍA y Chaide simultáneamente debido a la alta demanda de despachos.
3. **Mantenimiento Progresivo:** Se estableció un incremento anual del $5\%$ en costos operativos para modelar el desgaste mecánico proyectado a 5 años.